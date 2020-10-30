import { Option } from "./option";

export class Produit{
    id:number;
    nom:string;
    description:string;
    optionProd:Option;

    constructor(){
        this.id = undefined;
        this.nom = undefined;
        this.description = undefined;
        this.optionProd = new Option;
    }
}