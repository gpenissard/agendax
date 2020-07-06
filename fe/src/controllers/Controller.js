/**
 * @module Controller
 */

export default class Controller {
	
	constructor() {
		this._page = null; // L'objet Page, gérant la vue et es données de vue et instancié dans les descendants
		this._data = null; // Des données de requête pour la page. Rempli par les controllers descendants au traitement (process)
	}

	/**
	 * Getter page
	 */
	get page() {
		return this._page;
	}

	/**
	 * Getter page
	 */
	get data() {
		return this._data;
	}

	/**
	 * Setter page
	 */
	set data(someData) {
		this._data = someData;
	}

	/**
	 * Traite la requête (sans réaliser l'affichage dans la page)
	 * À surcharger dans les descendants
	 * Abstraite
	 */
	process() {
		throw new Error("Méthode abstraite");
	}

	/**
	 * Affiche les contenus dans la page en utilisant l'objet Page (propriété this.page)
	 */
	displayContents() {
		// Insertion contenu de la page dans le DOM 
		// N'est appelée que dans la phase domTime de l'App
	   document.getElementById('app').innerHTML = this.page.contents;
	   document.title = 'Mon App:' + this.page.title;
	}

}
