/**
 * @module EventsPage
 */
import Page from "./Page.js";

export default class EventsPage extends Page {

	constructor() {
		super();
	}

	get title() {
		let result = "Agenda: Semaine du 27 février";
		return result;
	}

	get body() {
		let result = `<p>Contenu page agenda de la semaine du 27 février<p>`;
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
