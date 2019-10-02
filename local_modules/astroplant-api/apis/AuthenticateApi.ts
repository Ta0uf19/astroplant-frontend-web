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
import { BaseAPI, HttpHeaders, throwIfRequired } from '../runtime';
import {
    AuthRefreshToken,
    AuthUser,
    AuthenticationTokens,
    InlineResponse429,
    InlineResponse500,
    ProblemDetails,
} from '../models';

export interface AuthenticateByCredentialsRequest {
    authUser: AuthUser;
}

export interface ObtainAuthenticationTokenFromRefreshTokenRequest {
    authRefreshToken: AuthRefreshToken;
}

/**
 * no description
 */
export class AuthenticateApi extends BaseAPI {

    /**
     * Authenticate yourself by username and password.
     */
    authenticateByCredentials = (requestParameters: AuthenticateByCredentialsRequest): Observable<AuthenticationTokens> => {
        throwIfRequired(requestParameters, 'authUser', 'authenticateByCredentials');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<AuthenticationTokens>({
            path: '/me/auth',
            method: 'POST',
            headers,
            body: requestParameters.authUser,
        });
    };

    /**
     * Obtain an authentication token from a refresh token.
     */
    obtainAuthenticationTokenFromRefreshToken = (requestParameters: ObtainAuthenticationTokenFromRefreshTokenRequest): Observable<string> => {
        throwIfRequired(requestParameters, 'authRefreshToken', 'obtainAuthenticationTokenFromRefreshToken');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<string>({
            path: '/me/refresh',
            method: 'POST',
            headers,
            body: requestParameters.authRefreshToken,
        });
    };

}
