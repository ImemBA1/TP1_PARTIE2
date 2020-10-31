"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("./client");
var clientType_1 = require("./clientType");
var contact_1 = require("./contact");
var details_1 = require("./details");
var droit_1 = require("./droit");
var droitType_1 = require("./droitType");
var entreprise_1 = require("./entreprise");
var individu_1 = require("./individu");
var option_1 = require("./option");
var produit_1 = require("./produit");
var produitDroit_1 = require("./produitDroit");
var faker = require("faker");
var fs = require("fs");
fs.writeFileSync('../json/ClientsDataBase.json', JSON.stringify(addClientAll(), null, '\t'));
fs.writeFileSync('../json/ProduitsDroitsDataBase.json', JSON.stringify(addDataProduitDroit(), null, '\t'));
function addDataClientIndiv() {
    var clientIndiv;
    var clientIndivTab;
    clientIndivTab = new Array;
    for (var index = 0; index <= 4; index++) {
        clientIndiv = new individu_1.Individu;
        clientIndiv.id = index;
        clientIndiv.nom = faker.name.lastName();
        clientIndiv.prenom = faker.name.firstName();
        clientIndiv.type = clientType_1.ClientType.individu;
        clientIndiv.adresse = faker.address.streetAddress();
        clientIndiv.email = faker.internet.email();
        clientIndiv.detailsIndiv = addDataDetails();
        clientIndiv.droits = addDataDroits();
        clientIndivTab.push(clientIndiv);
    }
    return clientIndivTab;
}
function addDataClientEntreprise() {
    var clientEntre;
    var clientEntreTab;
    clientEntreTab = new Array;
    for (var index = 0; index <= 4; index++) {
        clientEntre = new entreprise_1.Entreprise;
        clientEntre.nom = faker.company.companyName();
        clientEntre.phone = faker.phone.phoneNumber();
        clientEntre.fax = faker.internet.email();
        clientEntre.id = index;
        clientEntre.type = clientType_1.ClientType.entreprise;
        clientEntre.adresse = faker.address.streetAddress();
        clientEntre.detailsEntreprise = addDataDetails();
        clientEntre.contact = new contact_1.Contact;
        clientEntre.contact.email = faker.internet.email();
        clientEntre.contact.nom = faker.name.lastName();
        clientEntre.contact.prenom = faker.name.firstName();
        clientEntre.droits = addDataDroits();
        clientEntreTab.push(clientEntre);
    }
    return clientEntreTab;
}
function addDataClient() {
    var client;
    var clientTab;
    clientTab = new Array;
    for (var index = 0; index <= 4; index++) {
        client = new client_1.Client;
        client.id = index;
        client.adresse = faker.address.streetAddress();
        client.droits = addDataDroits();
    }
    return clientTab;
}
function addDataDetails() {
    var details = new details_1.Details;
    details.province = faker.address.country();
    details.rue = faker.address.streetName();
    details.ville = faker.address.city();
    return details;
}
function addDataDroits() {
    var droit;
    var droitsTab;
    droitsTab = new Array;
    for (var index = 0; index <= 4; index++) {
        droit = new droit_1.Droit;
        droit.idDroit = index.toString();
        droit.dateDebut = faker.date.past();
        droit.dateFin = faker.date.future();
        if (index % 3 == 0)
            droit.type = droitType_1.DroitType.droit_03;
        else if (index % 3 == 1)
            droit.type = droitType_1.DroitType.droit_01;
        else
            droit.type = droitType_1.DroitType.droit_02;
        droitsTab.push(droit);
    }
    return droitsTab;
}
function addDataProduits() {
    var produit;
    var produitsTab;
    produitsTab = new Array;
    for (var index = 0; index <= 4; index++) {
        produit = new produit_1.Produit;
        produit.id = index;
        produit.nom = faker.commerce.productName();
        produit.description = faker.commerce.productDescription();
        produit.optionProd = new option_1.Option;
        produit.optionProd.id = index;
        produit.optionProd.description = faker.commerce.productDescription();
        produit.optionProd.nom = faker.commerce.productMaterial();
        produitsTab.push(produit);
    }
    return produitsTab;
}
function addDataProduitDroit() {
    var produitDroit;
    var droitsTab = addDataDroits();
    var produitsTab = addDataProduits();
    var produitsDroitsTab = new Array;
    for (var index = 0; index <= 4; index++) {
        produitDroit = new produitDroit_1.ProduitDroit;
        produitDroit.produit = produitsTab[Math.floor(Math.random() * Math.floor(5))];
        produitDroit.droit = droitsTab[Math.floor(Math.random() * Math.floor(5))];
        produitsDroitsTab.push(produitDroit);
    }
    return { "DroitsProduits": produitsDroitsTab };
}
function addClientAll() {
    var allClient = new Array;
    var Individus = addDataClientIndiv();
    var Entreprises = addDataClientEntreprise();
    var Clients = addDataClient();
    var compteur = 0;
    for (var i = 0; i < Individus.length; i++) {
        allClient[compteur] = Individus[i];
        compteur++;
    }
    for (var i = 0; i < Entreprises.length; i++) {
        allClient[compteur] = Entreprises[i];
        compteur++;
    }
    for (var i = 0; i < Clients.length; i++) {
        allClient[compteur] = Clients[i];
        compteur++;
    }
    return { "Clients": allClient };
}
