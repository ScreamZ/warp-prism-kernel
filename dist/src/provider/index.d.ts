export declare class Provider {
    name: string;
    procedures: IProcedure[];
    constructor(namespace: string, procedures: IProcedure[]);
}
export interface IProcedure {
    name: string;
    handler: (data: any, response: deepstreamIO.RPCResponse) => void;
}
