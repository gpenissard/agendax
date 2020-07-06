/**
 * @module EventsPage
 */
import Page from "./Page.js";

 /**
  * @class EventsPage
  * Vue des événements
  */
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
		// result += `<br><a href="/event/add">Ajouter event</a>`;
		result += `<br><button id="add_event">Ajouter event</button>`;
		return result;
	}

	get script() {
		let result = `
		console.log("test");
		import App from "/src/App.js";
		document.getElementById("add_event").addEventListener("click", ()=>{
				console.log("click pour ajout événement");
				App.controller.addEvent({
					name:"Nouvel événement",
					startdt:"2020-07-01 08:00:00",
					enddt:"2020-07-01 09:45:00"
				});
			});
		`;
		return result;
	}


}
