/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
export = Database;
/**
 * @description Collection of static methods to manipulate the database.
 */
declare class Database {
    /**
     * @description Mongodb configuration setup
     * @param {Object} database - Configuration object
     */
    constructor(database: any);
    db: mongoose.Connection;
    /**
     * @description Opens connection to database
     */
    setup(): Promise<boolean>;
    Close(): Promise<boolean>;
    /**
       * @description Get item or entire database.
       * @param {String} ENCRYPTIONKEY - Encryptionkey of the database, false if none
       * @param {String} collection - The collection to be accessed inside the database.
       * @param {Object} [query] - Query for the item you are looking for in the format {type: "type1"}.
       */
    Get(ENCRYPTIONKEY: string, collection: string, query?: any): Promise<false | any[]>;
    /**
       * @description Insert item in database.
       * @param {String} ENCRYPTIONKEY - Encryptionkey of the database, false if none.
       * @param {String} collection - The collection to be accessed inside the database.
       * @param {Object} item - The item Object you want to insert in the database.
       * @param {Object} [index] - Key that should be used as index in case of Encrypted document.
       */
    Insert(ENCRYPTIONKEY: string, collection: string, item: any, index?: any): Promise<boolean>;
    /**
     * @description Replace item in database. Creates a new document if it does not exist.
     * @param {String} ENCRYPTIONKEY - Encryptionkey of the database, false if none.
     * @param {String} collection - The collection to be accessed inside the database.
     * @param {Object} query - Query for the item you are looking for in the format {type: "type1"}.
     * @param {Object} item - The item Object you want to insert in the database.
     * @param {Object} [index] - Key that should be used as index in case of Encrypted document.
     */
    Replace(ENCRYPTIONKEY: string, collection: string, query: any, item: any, index?: any): Promise<boolean>;
    /**
       * @description Assign value to item in database
       * @param {String} ENCRYPTIONKEY - Encryptionkey of the database, false if none.
       * @param {String} collection - The collection to be accessed inside the database.
       * @param {Object} query - The entry you want to modify in the format {type: "type1"}.
       * @param {Object} modification - The modification you want to make in the format {type: "type2"}.
       */
    Modify(ENCRYPTIONKEY: string, collection: string, query: any, modification: any): Promise<boolean>;
    /**
       * @description Delete item in database
       * @param {String} collection - The collection to be accessed inside the database.
       * @param {Object} query - The entry you want to delete in the format {type: "type1"}.
       */
    Delete(collection: string, query: any): Promise<boolean>;
    /**
     * @description Encrypts data.
     * @param {String} data - Data to be encrypted
     * @param {String} secret - Secret used in the encryption
     */
    Encrypt(data: string, secret: string): Promise<{
        iv: string;
        data: string;
    }>;
    /**
     * @description Decrypts data.
     * @param {String} data - Data to be decrypted
     * @param {String} _iv - Encryption iv
     * @param {String} secret - Secret used in the encryption
     */
    Decrypt(data: string, _iv: string, secret: string): Promise<string>;
    #private;
}
import mongoose = require("mongoose");
//# sourceMappingURL=Database.d.ts.map