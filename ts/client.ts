import { ClientType } from "./clientType";

export class Client{
    id: number;
    type: ClientType;
    adresse: string;

    constructor(){
        this.id= undefined;
        this.type= undefined;
        this.adresse = undefined;
    }


}
