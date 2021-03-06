import { Epic, combineEpics } from "redux-observable";
import { from, of, concat, timer } from "rxjs";
import {
  mergeMap,
  switchMap,
  map,
  filter,
  catchError,
  takeUntil
} from "rxjs/operators";
import * as actions from "./actions";
import * as meActions from "../me/actions";
import * as genericActions from "../generic/actions";

import { KitsApi } from "astroplant-api";
import { AuthConfiguration, requestWrapper } from "utils/api";
import { PDNotFound, PDForbidden } from "../../problems";

const addKitFromKitMemberships: Epic = (actions$, state$) =>
  actions$.pipe(
    filter(meActions.setKitMemberships.match),
    map(action => action.payload),
    switchMap(kitMemberships =>
      from(kitMemberships.map(kitMembership => kitMembership.kit))
    ),
    map(actions.addKit)
  );

const fetchKit: Epic = (actions$, state$) =>
  actions$.pipe(
    filter(actions.fetchKit.match),
    map(action => action.payload.serial),
    map(kitSerial => {
      const api = new KitsApi(AuthConfiguration.Instance);
      return { serial: kitSerial, req: api.showKitBySerial({ kitSerial }) };
    }),
    mergeMap(({ serial, req }) =>
      req.pipe(
        requestWrapper(),
        map(kit => actions.addKit(kit)),
        catchError(err => {
          if (PDNotFound.is(err.response)) {
            return of(actions.notFound({ serial }));
          } else if (PDForbidden.is(err.response)) {
            return of(actions.notAuthorized({ serial }));
          } else {
            return of(genericActions.setApiConnectionFailed(true));
          }
        })
      )
    )
  );

const kitWatching: Epic = (actions$, state$) =>
  actions$.pipe(
    filter(actions.startWatching.match),
    map(action => action.payload.serial),
    mergeMap(serial =>
      timer(0, 60 * 1000).pipe(
        mergeMap(() =>
          concat(of(actions.kitConfigurationsRequest({ serial })))
        ),
        takeUntil(
          actions$.pipe(
            filter(actions.stopWatching.match),
            filter(action => action.payload.serial === serial)
          )
        )
      )
    )
  );

const kitConfigurationsRequest: Epic = (actions$, state$) =>
  actions$.pipe(
    filter(actions.kitConfigurationsRequest.match),
    map(action => action.payload.serial),
    map(kitSerial => {
      const api = new KitsApi(AuthConfiguration.Instance);
      return { serial: kitSerial, req: api.listConfigurations({ kitSerial }) };
    }),
    mergeMap(({ serial, req }) =>
      req.pipe(
        map(configurations =>
          actions.kitConfigurationsSuccess({ serial, configurations })
        ),
        catchError(err => of(genericActions.setApiConnectionFailed(true)))
      )
    )
  );

export default combineEpics(
  addKitFromKitMemberships,
  fetchKit,
  kitWatching,
  kitConfigurationsRequest
);
