/**
 * @module EventController
 */

import Controller from "./Controller";
import EditEventPage from "../pages/EditEventPage";
import EventsPage from "../pages/EventsPage";

/**
 * @class EventController
 * Contrôleur des requêtes portant sur les événements
 */
export default class EventController extends Controller {
	
	constructor() {
		super();
	}

	/**
	 * Traite toutes les requêtes du contrôleur (fait le tri)
	 * Utilise l'objet de routage
	 */
	process() {
		const RE_EVENT = /^\/event\/?$/gi;
		const RE_EVENT_ID = /^\/event\/(\d+)$/gi;
		const RE_ADD_EVENT = /^\/event\/add\/?$/gi;
		let res = null; // Promesse de chargement du controleur 
		if (window.location.pathname.match(RE_EVENT)){
			res = this.events();
		} else if (window.location.pathname.match(RE_EVENT_ID)) {
			let eventId = RE_EVENT_ID.exec(window.location.pathname)[1];
			res = this.editEvent(eventId);
		} else if (window.location.pathname.match(RE_ADD_EVENT)) {
			res = this.addEvent();
		} else {
			// throw new Error("Invalid path in EventController");
			res = this.events();
		}
		return res;
	}

	/**
	 * Traite la requête de listage des événement
	 */
	events() {
		const URL_EVENTS = 'http://agendax.api/event';
		console.log("Fetching events");
		return fetch(URL_EVENTS)
			.then(response=>response.json())
			.then(respData=>{
				console.log("Events fetched");
				this.data = respData;
				this._page = new EventsPage({
					events: respData,
				});
			});
	}	

	/**
	 * Traite la requête de récupération d'un événement particulier
	 */
	editEvent(eventId) {
		const URL_EVENT_ID = 'http://agendax.api/event/'+eventId;
		console.log(`Fetching event n°${eventId}`);
		return fetch(URL_EVENT_ID)
			.then(response=>response.json())
			.then(respData=>{
				console.log(`Event n°${eventId} fetched`, respData);
				this.data = respData;
				this._page = new EditEventPage(eventId, {
					event:respData[0],}
				);
			});
	}

	/**
	 * Traite la requête de récupération d'un événement particulier
	 */
	addEvent() {
		const URL_EVENT_ID = 'http://agendax.api/event/';
		console.log(`Posting new event`);
		let data = JSON.stringify({
			name:"Nouvel événement",
			startdt:"2020-07-01 08:00:00",
			enddt:"2020-07-01 09:45:00"
		});
		console.log(data);
		return fetch(URL_EVENT_ID, {
				method: "POST",
				body: data,
			})
			.then(response=>response.json())
			.then(respData=>{
				console.log(`Event added`, respData);
				this.redirect();
			});
	}
}
