export declare class Provider {
    procedures: IProcedure[];
    constructor(procedures: IProcedure[]);
}
export interface IProcedure {
    name: string;
    handler: (data: any, response: deepstreamIO.RPCResponse) => void;
}
