/**
 * @module EventsPage
 */
import Page from "./Page.js";

export default class EventsPage extends Page {

	constructor(pageData = null) {
		super(pageData);
	}

	get title() {
		let result = "Semaine du 27 février";
		return result;
	}

	get body() {
		let result = `<p>Contenu page agenda de la semaine du 27 février<p>`;
		result += `<ul>`;
		let events = this.data.events;
		// console.log(events);
		for (let event of events) {
			result += `<li data-event-id="${event.id}"><a href="/event/${event.id}">${event.name}</a></li>`;
		}
		result += `</ul>`;
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
