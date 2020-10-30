import { ClientType } from "./clientType";
import { Droit } from "./droit";

export class Client{
    id: number;
    type: ClientType;
    adresse: string;
    droits:Array<Droit>;

    constructor(){
        this.id= undefined;
        this.type= undefined;
        this.adresse = undefined;
        this.droits = undefined;
    }


}
