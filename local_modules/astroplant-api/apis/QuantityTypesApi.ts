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
    QuantityType,
} from '../models';

export interface ListQuantityTypesRequest {
    after?: number;
}

/**
 * no description
 */
export class QuantityTypesApi extends BaseAPI {

    /**
     * List all quantity types.
     */
    listQuantityTypes = (requestParameters: ListQuantityTypesRequest): Observable<Array<QuantityType>> => {

        const query: HttpQuery = {
            ...(requestParameters.after && { 'after': requestParameters.after }),
        };

        return this.request<Array<QuantityType>>({
            path: '/quantity-types',
            method: 'GET',
            query,
        });
    };

}
