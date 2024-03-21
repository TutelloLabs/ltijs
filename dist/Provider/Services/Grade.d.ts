export = Grade;
declare class Grade {
    constructor(getPlatform: any, ENCRYPTIONKEY: any, Database: any);
    /**
     * @description Gets lineitems from a given platform
     * @param {Object} idtoken - Idtoken for the user
     * @param {Object} [options] - Options object
     * @param {Boolean} [options.resourceLinkId = false] - Filters line items based on the resourceLinkId of the resource that originated the request
     * @param {String} [options.resourceId = false] - Filters line items based on the resourceId
     * @param {String} [options.tag = false] - Filters line items based on the tag
     * @param {Number} [options.limit = false] - Sets a maximum number of line items to be returned
     * @param {String} [options.id = false] - Filters line items based on the id
     * @param {String} [options.label = false] - Filters line items based on the label
     * @param {String} [options.url = false] - Retrieves line items from a specific URL. Usually retrieved from the `next` link header of a previous request.
     */
    getLineItems(idtoken: any, options?: {
        resourceLinkId?: boolean;
        resourceId?: string;
        tag?: string;
        limit?: number;
        id?: string;
        label?: string;
        url?: string;
    }, accessToken: any): Promise<{
        next: any;
        prev: any;
        first: any;
        last: any;
        lineItems: any;
    }>;
    /**
     * @description Creates a new lineItem for the given context
     * @param {Object} idtoken - Idtoken for the user
     * @param {Object} lineItem - LineItem Object, following the application/vnd.ims.lis.v2.lineitem+json specification
     * @param {Object} [options] - Aditional configuration for the lineItem
     * @param {Boolean} [options.resourceLinkId = false] - If set to true, binds the created lineItem to the resource that originated the request
     */
    createLineItem(idtoken: any, lineItem: any, options?: {
        resourceLinkId?: boolean;
    }, accessToken: any): Promise<any>;
    /**
     * @description Gets LineItem by the ID
     * @param {Object} idtoken - Idtoken for the user
     * @param {String} lineItemId - LineItem ID.
     */
    getLineItemById(idtoken: any, lineItemId: string, accessToken: any): Promise<any>;
    /**
     * @description Updates LineItem by the ID
     * @param {Object} idtoken - Idtoken for the user
     * @param {String} lineItemId - LineItem ID.
     * @param {Object} lineItem - Updated fields.
     */
    updateLineItemById(idtoken: any, lineItemId: string, lineItem: any): Promise<any>;
    /**
     * @description Deletes LineItem by the ID
     * @param {Object} idtoken - Idtoken for the user
     * @param {String} lineItemId - LineItem ID.
     */
    deleteLineItemById(idtoken: any, lineItemId: string): Promise<boolean>;
    /**
     * @description Publishes a score or grade to a lineItem. Represents the Score Publish service described in the lti 1.3 specification.
     * @param {Object} idtoken - Idtoken for the user.
     * @param {String} lineItemId - LineItem ID.
     * @param {Object} score - Score/Grade following the LTI Standard application/vnd.ims.lis.v1.score+json.
     */
    submitScore(idtoken: any, lineItemId: string, score: any): Promise<any>;
    /**
     * @description Retrieves scores from a lineItem. Represents the Result service described in the lti 1.3 specification.
     * @param {Object} idtoken - Idtoken for the user.
     * @param {String} lineItemId - LineItem ID.
     * @param {Object} [options] - Options object.
     * @param {String} [options.userId = false] - Filters based on the userId.
     * @param {Number} [options.limit = false] - Sets a maximum number of scores to be returned.
     * @param {String} [options.url = false] - Retrieves scores from a specific URL. Usually retrieved from the `next` link header of a previous request.
     */
    getScores(idtoken: any, lineItemId: string, options?: {
        userId?: string;
        limit?: number;
        url?: string;
    }): Promise<{
        scores: any;
        next: any;
        prev: any;
        first: any;
        last: any;
    }>;
    /**
     * @deprecated
     * @description Deletes lineitems from a given platform. Deprecated in favor of deleteLineItemById.
     * @param {Object} idtoken - Idtoken for the user
     * @param {Object} [options] - Options object
     * @param {Boolean} [options.resourceLinkId = false] - Filters line items based on the resourceLinkId of the resource that originated the request
     * @param {String} [options.resourceId = false] - Filters line items based on the resourceId
     * @param {String} [options.tag = false] - Filters line items based on the tag
     * @param {Number} [options.limit = false] - Sets a maximum number of line items to be deleted
     * @param {String} [options.id = false] - Filters line items based on the id
     * @param {String} [options.label = false] - Filters line items based on the label
     */
    deleteLineItems(idtoken: any, options?: {
        resourceLinkId?: boolean;
        resourceId?: string;
        tag?: string;
        limit?: number;
        id?: string;
        label?: string;
    }): Promise<{
        success: any[];
        failure: any[];
    }>;
    /**
     * @deprecated
     * @description Publishes a score or grade to a platform. Deprecated in favor of sendScores, that send scores to a specific lineItem.
     * @param {Object} idtoken - Idtoken for the user
     * @param {Object} score - Score/Grade following the Lti Standard application/vnd.ims.lis.v1.score+json
     * @param {Object} [options] - Options object
     * @param {Object} [options.autoCreate] - Line item that will be created automatically if it does not exist
     * @param {String} [options.userId = false] - Send score to a specific user. If no userId is provided, the score is sent to the user that initiated the request
     * @param {Boolean} [options.resourceLinkId = true] - Filters line items based on the resourceLinkId of the resource that originated the request. Defaults to true
     * @param {String} [options.resourceId = false] - Filters line items based on the resourceId
     * @param {String} [options.tag = false] - Filters line items based on the tag
     * @param {Number} [options.limit = false] - Sets a maximum number of line items to be reached
     * @param {String} [options.id = false] - Filters line items based on the id
     * @param {String} [options.label = false] - Filters line items based on the label
     */
    scorePublish(idtoken: any, score: any, options?: {
        autoCreate?: any;
        userId?: string;
        resourceLinkId?: boolean;
        resourceId?: string;
        tag?: string;
        limit?: number;
        id?: string;
        label?: string;
    }): Promise<{
        success: any[];
        failure: any[];
    }>;
    /**
     * @deprecated
     * @description Retrieves a certain lineitem's results. Deprecated in favor of getScores that retrieves scores from a specific lineItem.
     * @param {Object} idtoken - Idtoken for the user
     * @param {Object} [options] - Options object
     * @param {String} [options.userId = false] - Filters based on the userId
     * @param {Boolean} [options.resourceLinkId = true] - Filters line items based on the resourceLinkId of the resource that originated the request. Defaults to true
     * @param {String} [options.resourceId = false] - Filters line items based on the resourceId
     * @param {String} [options.tag = false] - Filters line items based on the tag
     * @param {Number} [options.limit = false] - Sets a maximum number of results to be returned per line item
     * @param {String} [options.id = false] - Filters line items based on the id
     * @param {String} [options.label = false] - Filters line items based on the label
     */
    result(idtoken: any, options?: {
        userId?: string;
        resourceLinkId?: boolean;
        resourceId?: string;
        tag?: string;
        limit?: number;
        id?: string;
        label?: string;
    }): Promise<({
        lineitem: any;
        results: any;
        error?: undefined;
    } | {
        lineitem: any;
        error: any;
        results?: undefined;
    })[]>;
    /**
     * @deprecated
     */
    GetLineItems(idtoken: any, options: any, accessToken: any): Promise<{
        next: any;
        prev: any;
        first: any;
        last: any;
        lineItems: any;
    }>;
    /**
     * @deprecated
     */
    CreateLineItem(idtoken: any, lineItem: any, options: any, accessToken: any): Promise<any>;
    /**
     * @deprecated
     */
    DeleteLineItems(idtoken: any, options: any): Promise<{
        success: any[];
        failure: any[];
    }>;
    /**
     * @deprecated
     */
    ScorePublish(idtoken: any, score: any, options: any): Promise<{
        success: any[];
        failure: any[];
    }>;
    /**
     * @deprecated
     */
    Result(idtoken: any, options: any): Promise<({
        lineitem: any;
        results: any;
        error?: undefined;
    } | {
        lineitem: any;
        error: any;
        results?: undefined;
    })[]>;
    #private;
}
//# sourceMappingURL=Grade.d.ts.map