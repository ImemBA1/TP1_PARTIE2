"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produit = void 0;
var option_1 = require("./option");
var Produit = /** @class */ (function () {
    function Produit() {
        this.id = undefined;
        this.nom = undefined;
        this.description = undefined;
        this.optionProd = new option_1.Option;
    }
    return Produit;
}());
exports.Produit = Produit;
