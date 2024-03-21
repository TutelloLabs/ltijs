export = Keyset;
declare class Keyset {
    /**
       * @description Handles the creation of jwk keyset.
       */
    static build(Database: any, ENCRYPTIONKEY: any): Promise<{
        keys: any[];
    }>;
}
//# sourceMappingURL=Keyset.d.ts.map