import { Client } from "./client";

export class Entreprise extends Client{
    nom:string;
    phone:string;
    fax:string;
    constructor(){
        super();
        this.nom= undefined;
        this.phone= undefined;
        this.fax = undefined;
        this.id= undefined;
        this.type= undefined;
        this.adresse = undefined;
        
    }
}