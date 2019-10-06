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

/**
 * @export
 * @interface Kit
 */
export interface Kit {
    /**
     * @type {number}
     * @memberof Kit
     */
    id: number;
    /**
     * @type {string}
     * @memberof Kit
     */
    serial: string;
    /**
     * @type {string}
     * @memberof Kit
     */
    name: string;
    /**
     * @type {string}
     * @memberof Kit
     */
    description?: string;
    /**
     * @type {number}
     * @memberof Kit
     */
    latitude?: number;
    /**
     * @type {number}
     * @memberof Kit
     */
    longitude?: number;
    /**
     * @type {boolean}
     * @memberof Kit
     */
    privacyPublicDashboard?: boolean;
    /**
     * @type {boolean}
     * @memberof Kit
     */
    privacyShowOnMap?: boolean;
}