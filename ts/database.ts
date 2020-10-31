import { Client } from "./client";
import { ClientType } from "./clientType";
import { Contact } from "./contact";
import { Details } from "./details";
import { Droit } from "./droit";
import { DroitType } from "./droitType";
import { Entreprise } from "./entreprise";
import { Individu } from "./individu";
import { Option } from "./option";
import { Produit } from "./produit";
import { ProduitDroit } from "./produitDroit";

const faker = require("faker");
const fs = require("fs");

fs.writeFileSync('../json/ClientsDataBase.json', JSON.stringify(addClientAll(), null, '\t'));
fs.writeFileSync('../json/ProduitsDroitsDataBase.json', JSON.stringify(addDataProduitDroit(), null, '\t'));

function addDataClientIndiv(){
    var clientIndiv:Individu;
    var clientIndivTab:Array<Individu>;
    clientIndivTab = new Array;

    for (let index = 0; index <= 4; index++) {  
        clientIndiv = new Individu;
        clientIndiv.id = index;
        clientIndiv.nom = faker.name.lastName();
        clientIndiv.prenom =  faker.name.firstName();
        clientIndiv.type = ClientType.individu;
        clientIndiv.adresse = faker.address.streetAddress();
        clientIndiv.email = faker.internet.email();   
        clientIndiv.detailsIndiv = addDataDetails();
        clientIndiv.droits = addDataDroits();
        clientIndivTab.push(clientIndiv);     
    }
    return clientIndivTab;
}

function addDataClientEntreprise(){
    var clientEntre:Entreprise;
    var clientEntreTab:Array<Entreprise>;
    clientEntreTab = new Array;
    
    for (let index = 0; index <= 4; index++) {
        clientEntre = new Entreprise;
        clientEntre.nom = faker.company.companyName();
        clientEntre.phone = faker.phone.phoneNumber();
        clientEntre.fax = faker.internet.email();
        clientEntre.id = index;
        clientEntre.type = ClientType.entreprise;
        clientEntre.adresse = faker.address.streetAddress();
        clientEntre.detailsEntreprise = addDataDetails();
        clientEntre.contact = new Contact;
        clientEntre.contact.email = faker.internet.email();
        clientEntre.contact.nom = faker.name.lastName();
        clientEntre.contact.prenom = faker.name.firstName();
        clientEntre.droits = addDataDroits();
        clientEntreTab.push(clientEntre);
        
    }
    return clientEntreTab;
}

function addDataClient(){
    var client:Client;
    var clientTab:Array<Client>;
    clientTab = new Array;

    for (let index = 0; index <= 4; index++) {
        client = new Client
        client.id = index;
        client.adresse = faker.address.streetAddress();
        client.droits = addDataDroits();
    }
    return clientTab;
}

function addDataDetails(){
    var details:Details = new Details;
    details.province = faker.address.country();
    details.rue = faker.address.streetName();
    details.ville =faker .address.city();
    return details;
}

function addDataDroits(){
    var droit:Droit;
    var droitsTab:Array<Droit>;
    droitsTab = new Array;

    for (let index = 0; index <= 4; index++) {
        droit = new Droit;
        droit.idDroit = index.toString() ;
        droit.dateDebut = faker.date.past();
        droit.dateFin = faker.date.future();
        if (index % 3 == 0)
            droit.type = DroitType.droit_03;
        else if (index % 3 == 1)
            droit.type = DroitType.droit_01;
        else
            droit.type = DroitType.droit_02;
        droitsTab.push(droit);
    }
    return droitsTab;
}

function addDataProduits(){
    var produit:Produit;
    var produitsTab:Array<Produit>;
    produitsTab = new Array;

    for (let index = 0; index <= 4; index++) {
        produit = new Produit;
        produit.id = index;
        produit.nom = faker.commerce.productName();
        produit.description = faker.commerce.productDescription();
        produit.optionProd = new Option;
        produit.optionProd.id = index;
        produit.optionProd.description = faker.commerce.productDescription();
        produit.optionProd.nom = faker.commerce.productMaterial();
        produitsTab.push(produit);
    }
    return produitsTab;
}

function addDataProduitDroit(){
    var produitDroit:ProduitDroit;
    var droitsTab:Array<Droit> = addDataDroits();
    var produitsTab:Array<Produit> = addDataProduits();
    var produitsDroitsTab:Array<ProduitDroit> = new Array;
    for (let index = 0; index <= 4 ; index++) {
        produitDroit = new ProduitDroit;
        produitDroit.produit = produitsTab[Math.floor(Math.random() * Math.floor(5))];
        produitDroit.droit = droitsTab[Math.floor(Math.random() * Math.floor(5))];
        produitsDroitsTab.push(produitDroit);
    }
    return produitsDroitsTab;
}

function addClientAll(){
    var allClient:Array<Client> =  new Array;
    var Individus:Array<Individu> = addDataClientIndiv();
    var Entreprises:Array<Entreprise> = addDataClientEntreprise();
    var Clients:Array<Client> = addDataClient();
    var compteur = 0;

    for (let i = 0; i < Individus.length; i++) {
        allClient[compteur] = Individus[i];
        compteur++;
    }

    for (let i = 0; i < Entreprises.length; i++) {
        allClient[compteur] = Entreprises[i];
        compteur++;
    }

    for (let i = 0; i < Clients.length; i++) {
        allClient[compteur] = Clients[i];
        compteur++;
    }
    
    return allClient;
}
