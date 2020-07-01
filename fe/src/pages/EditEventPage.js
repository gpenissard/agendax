/**
 * @module EditEventPage
 */
import Page from "./Page.js";

export default class EditEventPage extends Page {

	constructor(eventId) {
		super();
		this._eventId = eventId;
	}

	get title() {
		let result = `Evénement n°${this._eventId}`;
		return result;
	}

	get body() {
		let result = `<p>Contenu page événement n°${this._eventId} - nom de l'événement<p>`;
		return result;
	}

	/**
	 * Méthode principale, appelée par l'objet App,  après le chargement
	 */
	main() {
		super.main();
	}

	/**
	 * Chargement de la page et de ses données
	 * @returns {Promise} La promesse résolue après chargement
	 */
	load() {
		return new Promise(resolve => {
			document.addEventListener("DOMContentLoaded", () => {
				resolve();
			});
		});
	}
}
