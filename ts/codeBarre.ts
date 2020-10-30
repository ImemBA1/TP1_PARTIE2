import { Client } from "./client";
import { Option } from "./option";
import { Produit } from "./produit";

export class codeBarre {
    id:number;
    code:string;
    produits:Array<Produit>;
    options:Array<Option>;
    client:Client;
    constructor(){
        this.id;
        this.code;
    }
}