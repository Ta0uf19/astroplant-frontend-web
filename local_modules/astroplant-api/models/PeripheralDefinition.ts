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
 * @interface PeripheralDefinition
 */
export interface PeripheralDefinition {
    /**
     * @type {number}
     * @memberof PeripheralDefinition
     */
    id: number;
    /**
     * @type {string}
     * @memberof PeripheralDefinition
     */
    name: string;
    /**
     * @type {string}
     * @memberof PeripheralDefinition
     */
    description?: string;
    /**
     * @type {string}
     * @memberof PeripheralDefinition
     */
    brand?: string;
    /**
     * @type {string}
     * @memberof PeripheralDefinition
     */
    model?: string;
    /**
     * @type {string}
     * @memberof PeripheralDefinition
     */
    moduleName: string;
    /**
     * @type {string}
     * @memberof PeripheralDefinition
     */
    className: string;
    /**
     * @type {object}
     * @memberof PeripheralDefinition
     */
    configurationSchema: object;
}
