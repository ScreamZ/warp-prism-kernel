export class Provider {
    public name: string;
    public procedures: IProcedure[];

    constructor(namespace: string, procedures: IProcedure[]) {
        procedures.forEach((el) => {
            el.name = `${namespace}/${el.name}`;
        });

        this.name = namespace;
        this.procedures = procedures;
    }
}

export interface IProcedure {
    name: string;
    handler: (data: any, response: deepstreamIO.RPCResponse) => void;
}
