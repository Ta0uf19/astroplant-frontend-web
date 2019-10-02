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
import { BaseAPI } from '../runtime';
import {
    InlineResponse429,
    InlineResponse500,
} from '../models';

/**
 * no description
 */
export class ServerApi extends BaseAPI {

    /**
     * Get the current server time.
     */
    timeGet = (): Observable<string> => {
        return this.request<string>({
            path: '/time',
            method: 'GET',
        });
    };

    /**
     * Grab the version of the API.
     */
    versionGet = (): Observable<string> => {
        return this.request<string>({
            path: '/version',
            method: 'GET',
        });
    };

}
