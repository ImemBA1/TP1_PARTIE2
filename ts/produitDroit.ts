import { Droit } from "./droit";
import { Produit } from "./produit";

export class ProduitDroit{
    produit:Produit;
    droit:Droit;
    constructor(){
        this.produit = undefined;
        this.droit = undefined;
    }

}
