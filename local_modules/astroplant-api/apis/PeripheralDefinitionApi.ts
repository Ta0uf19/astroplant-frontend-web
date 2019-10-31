// tslint:disable
/**
 * AstroPlant API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Observable } from 'rxjs';
import { BaseAPI, HttpQuery } from '../runtime';
import {
    InlineResponse429,
    InlineResponse500,
    PeripheralDefinition,
} from '../models';

export interface ListPeripheralDefinitionsRequest {
    after?: number;
    withExpectedQuantityTypes?: boolean;
}

/**
 * no description
 */
export class PeripheralDefinitionApi extends BaseAPI {

    /**
     * List all peripheral device definitions.
     */
    listPeripheralDefinitions = (requestParameters: ListPeripheralDefinitionsRequest): Observable<Array<PeripheralDefinition>> => {

        const query: HttpQuery = {
            ...(requestParameters.after && { 'after': requestParameters.after }),
            ...(requestParameters.withExpectedQuantityTypes && { 'withExpectedQuantityTypes': requestParameters.withExpectedQuantityTypes }),
        };

        return this.request<Array<PeripheralDefinition>>({
            path: '/peripheral-definitions',
            method: 'GET',
            query,
        });
    };

}
