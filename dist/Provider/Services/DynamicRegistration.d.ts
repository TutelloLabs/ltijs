export = DynamicRegistration;
declare class DynamicRegistration {
    constructor(options: any, routes: any, registerPlatform: any, getPlatform: any, ENCRYPTIONKEY: any, Database: any);
    /**
     * @description Performs dynamic registration flow.
     * @param {String} openidConfiguration - OpenID configuration URL. Retrieved from req.query.openid_configuration.
     * @param {String} [registrationToken] - Registration Token. Retrieved from req.query.registration_token.
     * @param {Object} [options] - Replacements or extensions to default registration options.
     */
    register(openidConfiguration: string, registrationToken?: string, options?: any): Promise<{
        message: string;
        platform: any;
        registrationResponse: any;
    }>;
    #private;
}
//# sourceMappingURL=DynamicRegistration.d.ts.map