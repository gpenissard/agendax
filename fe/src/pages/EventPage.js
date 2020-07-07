/**
 * @module EditEventPage
 */
import Page from "./Page.js";
import AgxDate from "../utils/AgxDate";

 /**
  * @class EventsPage
  * Vue d'édition d'un événement en particulier
  */
 export default class EventPage extends Page {

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
		result += `<br><button id="edit_event" data-event-id="${ev.id}">Modifier event</button>`;
		result += `<br><button id="delete_event" data-event-id="${ev.id}">Supprimer event</button>`;
		return result;
	}

	get script() {
		let result = `
		//console.log("test");
		import App from "/src/App.js";
		document.getElementById("edit_event").addEventListener("click", (evt)=>{
			let id = evt.target.dataset.eventId;
			console.log("click pour modifier l'événement n°", id);
			App.controller.editEvent(id, {
				name:"Événement au titre modifié",
				startdt:"2020-07-01 08:00:00",
				enddt:"2020-07-01 09:45:00"
			});
		});
		document.getElementById("delete_event").addEventListener("click", (evt)=>{
			let id = evt.target.dataset.eventId;
			console.log("click pour modifier l'événement n°", id);
			App.controller.deleteEvent(id);
		});
		`;
		return result;
	}

}
