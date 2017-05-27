export class Provider {
    public procedures: IProcedure[];

    constructor(procedures: IProcedure[]) {
        this.procedures = procedures;
    }
}

export interface IProcedure {
    name: string;
    handler: (data: any, response: deepstreamIO.RPCResponse) => void;
}
