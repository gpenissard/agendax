/**
 * @module Controller
 */

export default class Controller {
	
	constructor() {
		this._page = null; // Instanciated in descendants
	}

	get page() {
		return this._page;
	}

	/**
	 * À surcharger dans les descendants
	 * Abstraite
	 */
	process() {
		throw new Error("Méthode abstraite");
	}

	displayContents() {
		// Insertion contenu dans le DOM
	   document.getElementById('app').innerHTML = this.page.contents;
	}

}
