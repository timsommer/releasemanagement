
/** 
 * IConfiguration interface that defines the different configuration data objects
 */
export interface IConfiguration {
    root: string;
    port: number;
    hostname: string
    db: {
        name: string,
        server: string,
        port: number,
        auto_reconnect: boolean,
        safeMode: boolean
    },
    app: {
        name: string
    },
    client: {
        dataRoot: string
    }
}
