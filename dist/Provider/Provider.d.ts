declare const _exports: Provider;
export = _exports;
/**
 * @descripttion LTI Provider Class that implements the LTI 1.3 protocol and services.
 */
declare class Provider {
    /**
       * @description Provider configuration method.
       * @param {String} encryptionkey - Secret used to sign cookies and encrypt other info.
       * @param {Object} database - Database configuration.
       * @param {String} database.url - Database Url (Ex: mongodb://localhost/applicationdb).
       * @param {Object} [database.plugin] - If set, must be the Database object of the desired database plugin.
       * @param {Boolean} [database.debug] - If set to true, enables mongoose debug mode.
       * @param {Object} [database.connection] - MongoDB database connection options (Ex: user, pass)
       * @param {String} [database.connection.user] - Database user for authentication if needed.
       * @param {String} [database.conenction.pass] - Database pass for authentication if needed.
       * @param {Object} [options] - Lti Provider options.
       * @param {String} [options.appRoute = '/'] - Lti Provider main route. If no option is set '/' is used.
       * @param {String} [options.loginRoute = '/login'] - Lti Provider login route. If no option is set '/login' is used.
       * @param {String} [options.keysetRoute = '/keys'] - Lti Provider public jwk keyset route. If no option is set '/keys' is used.
       * @param {String} [options.dynRegRoute = '/register'] - Dynamic registration route.
       * @param {Boolean} [options.https = false] - Set this as true in development if you are not using any web server to redirect to your tool (like Nginx) as https and are planning to configure ssl through Express.
       * @param {Object} [options.ssl] - SSL certificate and key if https is enabled.
       * @param {String} [options.ssl.key] - SSL key.
       * @param {String} [options.ssl.cert] - SSL certificate.
       * @param {String} [options.staticPath] - The path for the static files your application might serve (Ex: _dirname+"/public")
       * @param {Boolean} [options.cors = true] - If set to false, disables cors.
       * @param {Function} [options.serverAddon] - Allows the execution of a method inside of the server contructor. Can be used to register middlewares.
       * @param {Object} [options.cookies] - Cookie configuration. Allows you to configure, sameSite and secure parameters.
       * @param {Boolean} [options.cookies.secure = false] - Cookie secure parameter. If true, only allows cookies to be passed over https.
       * @param {String} [options.cookies.sameSite = 'Lax'] - Cookie sameSite parameter. If cookies are going to be set across domains, set this parameter to 'None'.
       * @param {String} [options.cookies.domain] - Cookie domain parameter. This parameter can be used to specify a domain so that the cookies set by Ltijs can be shared between subdomains.
       * @param {Boolean} [options.devMode = false] - If true, does not require state and session cookies to be present (If present, they are still validated). This allows ltijs to work on development environments where cookies cannot be set. THIS SHOULD NOT BE USED IN A PRODUCTION ENVIRONMENT.
       * @param {Number} [options.tokenMaxAge = 10] - Sets the idToken max age allowed in seconds. Defaults to 10 seconds. If false, disables max age validation.
       * @param {Object} [options.dynReg] - Setup for the Dynamic Registration Service.
       * @param {String} [options.dynReg.url] - Tool Provider main URL. (Ex: 'https://tool.example.com')
       * @param {String} [options.dynReg.name] - Tool Provider name. (Ex: 'Tool Provider')
       * @param {String} [options.dynReg.logo] - Tool Provider logo. (Ex: 'https://client.example.org/logo.png')
       * @param {String} [options.dynReg.description] - Tool Provider description. (Ex: 'Tool description')
       * @param {Array<String>} [options.dynReg.redirectUris] - Additional redirect URIs. (Ex: ['https://tool.example.com/launch'])
       * @param {Object} [options.dynReg.customParameters] - Custom parameters object. (Ex: { key: 'value' })
       * @param {Boolean} [options.dynReg.autoActivate = false] - Platform auto activation flag. If true, every Platform registered dynamically is immediately activated. Defaults to false.
       */
    setup(encryptionkey: string, database: {
        url: string;
        plugin?: any;
        debug?: boolean;
        connection?: {
            user?: string;
        };
    }, options?: {
        appRoute?: string;
        loginRoute?: string;
        keysetRoute?: string;
        dynRegRoute?: string;
        https?: boolean;
        ssl?: {
            key?: string;
            cert?: string;
        };
        staticPath?: string;
        cors?: boolean;
        serverAddon?: Function;
        cookies?: {
            secure?: boolean;
            sameSite?: string;
            domain?: string;
        };
        devMode?: boolean;
        tokenMaxAge?: number;
        dynReg?: {
            url?: string;
            name?: string;
            logo?: string;
            description?: string;
            redirectUris?: Array<string>;
            customParameters?: any;
            autoActivate?: boolean;
        };
    }): this;
    /**
     * @description Database object.
     */
    Database: any;
    /**
     * @description Express server object.
     */
    app: any;
    /**
     * @description Grading service.
     */
    Grade: GradeService;
    /**
     * @description Deep Linking service.
     */
    DeepLinking: DeepLinkingService;
    /**
     * @description Names and Roles service.
     */
    NamesAndRoles: NamesAndRolesService;
    /**
     * @description Dynamic Registration service.
     */
    DynamicRegistration: DynamicRegistration;
    /**
       * @description Starts listening to a given port for LTI requests and opens connection to the database.
       * @param {Object} [options] - Deployment options.
       * @param {Number} [options.port] - Deployment port. 3000 by default.
       * @param {Boolean} [options.silent] - If true, disables initial startup message.
       * @param {Boolean} [options.serverless] - If true, Ltijs does not start an Express server instance. This allows usage as a middleware and with services like AWS. Ignores 'port' parameter.
       * @returns {Promise<true>}
       */
    deploy(options?: {
        port?: number;
        silent?: boolean;
        serverless?: boolean;
    }): Promise<true>;
    /**
     * @description Closes connection to database and stops server.
     * @param {Object} [options] - Deployment options.
     * @param {Boolean} [options.silent] - If true, disables messages.
     * @returns {Promise<true>}
     */
    close(options?: {
        silent?: boolean;
    }): Promise<true>;
    /**
       * @description Sets the callback function called whenever there's a sucessfull lti 1.3 launch, exposing a "token" object containing the idtoken information.
       * @param {Function} _connectCallback - Callback function called everytime a platform sucessfully launches to the provider.
       * @param {Object} [options] - Optional parameters for the onConnect method.
       * @param {string} [options.sameSite] - Sets the SameSite attribute for cookies. Can be 'Strict', 'Lax', or 'None'.
       * @param {boolean} [options.secure] - Sets the Secure attribute for cookies, requiring HTTPS.
       * @param {Function} [options.sessionTimeout] - Callback function called when a session times out.
       * @param {Function} [options.invalidToken] - Callback function called when an invalid token is received.
       * @example .onConnect((token, request, response)=>{response.send('OK')})
       * @returns {true}
       */
    onConnect(_connectCallback: Function, options?: {
        sameSite?: string;
        secure?: boolean;
        sessionTimeout?: Function;
        invalidToken?: Function;
    }): true;
    /**
     * @description Sets the callback function called whenever there's a sucessfull deep linking launch, exposing a "token" object containing the idtoken information.
     * @param {Function} _deepLinkingCallback - Callback function called everytime a platform sucessfully launches a deep linking request.
     * @example .onDeepLinking((token, request, response)=>{response.send('OK')})
     * @returns {true}
     */
    onDeepLinking(_deepLinkingCallback: Function): true;
    /**
     * @description Sets the callback function called whenever there's a sucessfull dynamic registration request, allowing the registration flow to be customized.
     * @param {Function} _dynamicRegistrationCallback - Callback function called everytime the LTI Provider receives a dynamic registration request.
     */
    onDynamicRegistration(_dynamicRegistrationCallback: Function): boolean;
    /**
     * @description Sets the callback function called when no valid session is found during a request validation.
     * @param {Function} _sessionTimeoutCallback - Callback method.
     * @example .onSessionTimeout((request, response)=>{response.send('Session timeout')})
     * @returns {true}
     */
    onSessionTimeout(_sessionTimeoutCallback: Function): true;
    /**
     * @description Sets the callback function called when the token received fails to be validated.
     * @param {Function} _invalidTokenCallback - Callback method.
     * @example .onInvalidToken((request, response)=>{response.send('Invalid token')})
     * @returns {true}
     */
    onInvalidToken(_invalidTokenCallback: Function): true;
    /**
     * @description Sets the callback function called when the Platform attempting to login is not registered.
     * @param {Function} _unregisteredPlatformCallback - Callback method.
     * @example .onUnregisteredPlatform((request, response)=>{response.send('Unregistered Platform')})
     * @returns {true}
     */
    onUnregisteredPlatform(_unregisteredPlatformCallback: Function): true;
    /**
     * @description Sets the callback function called when the Platform attempting to login is not activated.
     * @param {Function} _inactivePlatformCallback - Callback method.
     * @example .onInactivePlatform((request, response)=>{response.send('Platform not activated')})
     * @returns {true}
     */
    onInactivePlatform(_inactivePlatformCallback: Function): true;
    /**
     * @description Gets the main application route that will receive the final decoded Idtoken at the end of a successful launch.
     * @returns {String}
     */
    appRoute(): string;
    /**
     * @description Gets the login route responsible for dealing with the OIDC login flow.
     * @returns {String}
     */
    loginRoute(): string;
    /**
       * @description Gets the keyset route that will be used to retrieve a public jwk keyset.
       * @returns {String}
       */
    keysetRoute(): string;
    /**
     * @description Gets the dynamic registration route that will be used to register platforms dynamically.
     * @returns {String}
     */
    dynRegRoute(): string;
    /**
     * @description Whitelists routes to bypass the Ltijs authentication protocol. If validation fails, these routes are still accessed but aren't given an idToken.
     * @param {String} routes - Routes to be whitelisted
     */
    whitelist(...routes: string): any[];
    /**
       * @description Registers a platform.
       * @param {Object} platform
       * @param {String} platform.url - Platform url.
       * @param {String} platform.name - Platform nickname.
       * @param {String} platform.clientId - Client Id generated by the platform.
       * @param {String} platform.authenticationEndpoint - Authentication endpoint that the tool will use to authenticate within the platform.
       * @param {String} platform.accesstokenEndpoint - Access token endpoint that the tool will use to get an access token for the platform.
       * @param {object} platform.authConfig - Authentication method and key for verifying messages from the platform. {method: "RSA_KEY", key:"PUBLIC KEY..."}
       * @param {String} platform.authConfig.method - Method of authorization "RSA_KEY" or "JWK_KEY" or "JWK_SET".
       * @param {String} platform.authConfig.key - Either the RSA public key provided by the platform, or the JWK key, or the JWK keyset address.
       * @param {string} [platform.authorizationServer] - Authorization server identifier to be used as the aud when requesting an access token. If not specified, the access token endpoint URL will be used.
       * @param {Function} [getPlatform] - Function to get the platform details.
       * @param {String} [ENCRYPTIONKEY] - Encryption key for securing data.
       * @param {Object} [Database] - Database object for data manipulation.
       * @returns {Promise<Platform>}
       */
    registerPlatform(platform: {
        url: string;
        name: string;
        clientId: string;
        authenticationEndpoint: string;
        accesstokenEndpoint: string;
        authConfig: {
            method: string;
            key: string;
        };
        authorizationServer?: string;
    }, getPlatform?: Function, ENCRYPTIONKEY?: string, Database?: any): Promise<Platform>;
    /**
       * @description Gets a platform.
       * @param {String} url - Platform url.
       * @param {String} [clientId] - Tool clientId.
       * @returns {Promise<Array<Platform>, Platform | false>}
       */
    getPlatform(url: string, clientId?: string, ENCRYPTIONKEY: any, Database: any): Promise<Array<Platform>, Platform | false>;
    /**
     * @description Gets a platform by the platformId.
     * @param {String} platformId - Platform Id.
     * @returns {Promise<Array<Platform>, Platform | false>}
     */
    getPlatformById(platformId: string): Promise<Array<Platform>, Platform | false>;
    /**
     * @description Updates a platform by the platformId.
     * @param {String} platformId - Platform Id.
     * @param {Object} platformInfo - Update Information.
     * @param {String} platformInfo.url - Platform url.
     * @param {String} platformInfo.clientId - Platform clientId.
     * @param {String} platformInfo.name - Platform nickname.
     * @param {String} platformInfo.authenticationEndpoint - Authentication endpoint that the tool will use to authenticate within the platform.
     * @param {String} platformInfo.accesstokenEndpoint - Access token endpoint that the tool will use to get an access token for the platform.
     * @param {object} platformInfo.authConfig - Authentication method and key for verifying messages from the platform. {method: "RSA_KEY", key:"PUBLIC KEY..."}
     * @param {String} platformInfo.authConfig.method - Method of authorization "RSA_KEY" or "JWK_KEY" or "JWK_SET".
     * @param {String} platformInfo.authConfig.key - Either the RSA public key provided by the platform, or the JWK key, or the JWK keyset address.
     * @returns {Promise<Array<Platform>, Platform | false>}
     */
    updatePlatformById(platformId: string, platformInfo: {
        url: string;
        clientId: string;
        name: string;
        authenticationEndpoint: string;
        accesstokenEndpoint: string;
        authConfig: {
            method: string;
            key: string;
        };
    }): Promise<Array<Platform>, Platform | false>;
    /**
       * @description Deletes a platform.
       * @param {string} url - Platform url.
       * @param {String} clientId - Tool clientId.
       * @returns {Promise<true>}
       */
    deletePlatform(url: string, clientId: string): Promise<true>;
    /**
     * @description Deletes a platform by the platform Id.
     * @param {string} platformId - Platform Id.
     * @returns {Promise<true>}
     */
    deletePlatformById(platformId: string): Promise<true>;
    /**
       * @description Gets all platforms.
       * @returns {Promise<Array<Platform>>}
       */
    getAllPlatforms(): Promise<Array<Platform>>;
    /**
     * @description Redirects to a new location. Passes Ltik if present.
     * @param {Object} res - Express response object.
     * @param {String} path - Redirect path.
     * @param {Object} [options] - Redirection options.
     * @param {Boolean} [options.newResource = false] - If true, changes the path variable on the context token.
     * @param {Object} [options.query] - Query parameters that will be added to the URL.
     * @example lti.redirect(response, '/path', { newResource: true })
     */
    redirect(res: any, path: string, options?: {
        newResource?: boolean;
        query?: any;
    }): Promise<any>;
    /**
     * @deprecated
     */
    appUrl(): string;
    /**
     * @deprecated
     */
    loginUrl(): string;
    /**
     * @deprecated
     */
    keysetUrl(): string;
    #private;
}
import GradeService = require("./Services/Grade");
import DeepLinkingService = require("./Services/DeepLinking");
import NamesAndRolesService = require("./Services/NamesAndRoles");
import DynamicRegistration = require("./Services/DynamicRegistration");
import Platform = require("../Utils/Platform");
//# sourceMappingURL=Provider.d.ts.map