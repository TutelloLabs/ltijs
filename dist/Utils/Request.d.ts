export = Request;
declare class Request {
    /**
       * @description Handles the Lti 1.3 initial login flow (OIDC protocol).
       * @param {object} request - Login request object sent by consumer.
       * @param {object} platform - Platform Object.
       * @param {String} state - State parameter, used to validate the response.
       */
    static ltiAdvantageLogin(request: object, platform: object, state: string): Promise<{
        response_type: string;
        response_mode: string;
        id_token_signed_response_alg: string;
        scope: string;
        client_id: any;
        redirect_uri: any;
        login_hint: any;
        nonce: string;
        prompt: string;
        state: string;
    }>;
}
//# sourceMappingURL=Request.d.ts.map