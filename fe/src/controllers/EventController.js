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
		if (window.location.pathname.match(RE_EVENT)){
			this.events();
		} else if (window.location.pathname.match(RE_EVENT_ID)) {
			let eventId = RE_EVENT_ID.exec(window.location.pathname)[1];
			this.editEvent(eventId);
		} else {
			// throw new Error("Invalid path in EventController");
			this.events();
		}
		this.displayContents();
	}

	events() {
		this._page = new EventsPage();
	}	

	editEvent(EventId) {
		this._page = new EditEventPage(EventId);
	}
}
