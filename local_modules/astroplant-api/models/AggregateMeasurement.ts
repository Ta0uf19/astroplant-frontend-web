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
 * @interface AggregateMeasurement
 */
export interface AggregateMeasurement {
    /**
     * @type {string}
     * @memberof AggregateMeasurement
     */
    id: string;
    /**
     * @type {number}
     * @memberof AggregateMeasurement
     */
    peripheralId: number;
    /**
     * @type {number}
     * @memberof AggregateMeasurement
     */
    kitId: number;
    /**
     * @type {number}
     * @memberof AggregateMeasurement
     */
    kitConfigurationId: number;
    /**
     * @type {number}
     * @memberof AggregateMeasurement
     */
    quantityTypeId: number;
    /**
     * @type {string}
     * @memberof AggregateMeasurement
     */
    aggregateType: string;
    /**
     * @type {number}
     * @memberof AggregateMeasurement
     */
    value: number;
    /**
     * @type {Date}
     * @memberof AggregateMeasurement
     */
    datetimeStart: Date;
    /**
     * @type {Date}
     * @memberof AggregateMeasurement
     */
    datetimeEnd: Date;
}