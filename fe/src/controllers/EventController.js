/**
 * @module EventController
 */

import Controller from "./Controller";
import EventPage from "../pages/EventPage";
import EventsListPage from "../pages/EventsListPage";

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
		const RE_GET_EVENT = /^\/event\/(\d+)$/gi;
		const RE_ADD_EVENT = /^\/event\/add\/?$/gi;
		let res = null; // Promesse de chargement du controleur 
		if (window.location.pathname.match(RE_EVENT)){
			res = this.getEventsList();
		} else if (window.location.pathname.match(RE_GET_EVENT)) {
			let eventId = RE_GET_EVENT.exec(window.location.pathname)[1];
			res = this.getEvent(eventId);
		} else if (window.location.pathname.match(RE_ADD_EVENT)) {
			res = this.addEvent();
		} else {
			// throw new Error("Invalid path in EventController");
			res = this.getEventsList();
		}
		return res;
	}

	/**
	 * Traite la requête de listage des événement
	 */
	getEventsList() {
		const URL_EVENTS = 'http://agendax.api/event';
		console.log("Fetching events");
		return fetch(URL_EVENTS)
			.then(response=>response.json())
			.then(respData=>{
				console.log("Events fetched");
				this.data = respData;
				this._page = new EventsListPage({
					events: respData,
				});
			});
	}	

	/**
	 * Traite la requête de récupération d'un événement particulier
	 */
	getEvent(eventId) {
		const URL_EVENT_ID = 'http://agendax.api/event/'+eventId;
		console.log(`Fetching event n°${eventId}`);
		return fetch(URL_EVENT_ID)
			.then(response=>response.json())
			.then(respData=>{
				console.log(`Event n°${eventId} fetched`, respData);
				this.data = respData;
				this._page = new EventPage(eventId, {
					event:respData[0]
				}
				);
			});
	}

	/**
	 * Traite la requête de modification d'un événement particulier
	 */
	editEvent(eventId, data=null) {
		const URL_EVENT_ID = 'http://agendax.api/event/'+eventId;
		console.log(`Editing event n°${eventId}`);
		if (data === null) {
			data = {
				name:"Événement (modifié)",
				startdt:"2020-07-01 08:00:00",
				enddt:"2020-07-01 09:45:00"
			};
		}
		return fetch(URL_EVENT_ID, {
			method: "PUT",
			body: JSON.stringify(data),
		})
			.then(response=>response.json())
			.then(respData=>{
				//console.log(`Event n°${eventId} edited successfully`, respData);
				this.redirect();
			});
	}

	/**
	 * Traite la requête de suppression d'un événement particulier
	 */
	deleteEvent(eventId) {
		const URL_EVENT_ID = 'http://agendax.api/event/'+eventId;
		console.log(`Deleting event n°${eventId}`);
		return fetch(URL_EVENT_ID, {
			method: "DELETE"
		})
			.then(response=>response.json())
			.then(respData=>{
				//console.log(`Event n°${eventId} edited successfully`, respData);
				this.redirect();
			});
	}

	/**
	 * Traite la requête de récupération d'un événement particulier
	 */
	addEvent(data = null) {
		const URL_EVENT_ID = 'http://agendax.api/event/';
		console.log(`Posting new event`);
		if (data === null) {
			data = {
				name:"Nouvel événement automatique de test",
				startdt:"2020-07-01 08:00:00",
				enddt:"2020-07-01 09:45:00"
			};
		}
		console.log(data);
		return fetch(URL_EVENT_ID, {
				method: "POST",
				body: JSON.stringify(data),
			})
			.then(response=>response.json())
			.then(respData=>{
				//console.log(`Event added`, respData);
				this.redirect();
			});
	}
}
