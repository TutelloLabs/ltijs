export = Server;
declare class Server {
    constructor(https: any, ssl: any, ENCRYPTIONKEY: any, corsOpt: any, serverAddon: any);
    app: any;
    server: boolean;
    ssl: any;
    listen(port: any): Promise<any>;
    setStaticPath(path: any): void;
    close(): void;
}
//# sourceMappingURL=Server.d.ts.map