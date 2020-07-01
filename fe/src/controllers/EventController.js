/**
 * @module EventController
 */

import Controller from "./Controller";
import EditEventPage from "../pages/EditEventPage";
import EventsPage from "../pages/EventsPage";

export default class EventController extends Controller {
	
	constructor() {
		super();
	}

	process() {
		const RE_EVENT = /^\/event\/?$/gi;
		const RE_EVENT_ID = /^\/event\/(\d+)$/gi;
		let res = null; // Promesse de chargement du controleur 
		if (window.location.pathname.match(RE_EVENT)){
			res = this.events();
		} else if (window.location.pathname.match(RE_EVENT_ID)) {
			let eventId = RE_EVENT_ID.exec(window.location.pathname)[1];
			res = this.editEvent(eventId);
		} else {
			// throw new Error("Invalid path in EventController");
			res = this.events();
		}
		return res;
	}

	events() {
		this._page = new EventsPage();
		return true; // Sera converti en promesse
	}	

	editEvent(EventId) {
		this._page = new EditEventPage(EventId);
		return true; // Sera converti en promesse
	}
}
