import { Client } from "./client";
import { Contact } from "./contact";
import { Details } from "./details";

export class Entreprise extends Client{
    nom:string;
    phone:string;
    fax:string;
    contact:Contact;
    detailsEntreprise:Details;
    constructor(){
        super();
        this.nom= undefined;
        this.phone= undefined;
        this.fax = undefined;
        this.id= undefined;
        this.type= undefined;
        this.adresse = undefined;
        this.contact = new Contact;
        this.detailsEntreprise = new Details;
    }
}