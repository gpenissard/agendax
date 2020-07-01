/**
 * @module WeekPage
 */
import Page from "./Page.js";

export default class EventPage extends Page {

	get title() {
		let result = "Evénement";
		return result;
	}

	get body() {
		let result = `<p>Contenu page événement "nom de l'événement "<p>`;
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
