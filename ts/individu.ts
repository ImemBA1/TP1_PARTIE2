import { Client } from "./client";
import { Details } from "./details";

export class Individu extends Client{
    prenom:string;
    nom: string;
    email: string;
    detailsIndiv:Details;
    
    constructor(){
        super();
        this.id= undefined;
        this.type= undefined;
        this.adresse = undefined;
        this.prenom= undefined;
        this.nom= undefined;
        this.email = undefined;
        this.detailsIndiv = new Details;
    }
}
