/**
 * @module Controller
 */

export default class Controller {
	
	constructor() {
		this._page = null; // Instanciated in descendants
		this._data = null; // Data pour la page. Rempli par les controllers descendants au chargement (process)
	}

	get page() {
		return this._page;
	}

	get data() {
		return this._data;
	}

	set data(someData) {
		this._data = someData;
	}

	/**
	 * À surcharger dans les descendants
	 * Abstraite
	 */
	process() {
		throw new Error("Méthode abstraite");
	}

	displayContents() {
		// Insertion contenu de la page dans le DOM 
		// N'est appelée que dans la phase domTime de l'App
	   document.getElementById('app').innerHTML = this.page.contents;
	   document.title = 'Mon App:' + this.page.title;
	}

}
