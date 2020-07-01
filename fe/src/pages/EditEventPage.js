/**
 * @module EditEventPage
 */
import Page from "./Page.js";
import AgxDate from "../utils/AgxDate";

export default class EditEventPage extends Page {

	constructor(eventId, pageData = null) {
		super(pageData);
		this._eventId = eventId;
	}

	get title() {
		let ev = this.data.event;
		let result = `${ev.name}`;
		return result;
	}

	get body() {
		let ev = this.data.event;
		let debut = new AgxDate(ev.startdt); 
		let fin = new AgxDate(ev.enddt); 
		let result = `<div data-event-id="${ev.id}"><h2>Événement ${ev.name}</h2><p>Le ${debut.jour_fr} à ${debut.heure_fr} (durée: ${AgxDate.duree_fr(debut, fin)})</p></div><a href="/event">Retour événements</a>`;

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
