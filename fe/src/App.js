/**
 * @module App
 */
import Settings from "./Settings.js";
import WeekPage from "./WeekPage.js";
import EventPage from "./EventPage.js";

export default class App {

	static _settings = new Settings();
	static _page = null; // Instanciated in load()

	static get settings() {
		return this._settings;
	}

	static get page() {
		return this._page;
	}

	static displayContents() {
 		// Insertion contenu dans le DOM
		document.getElementById('app').innerHTML = this.page.contents;
	}

	/**
	 * Méthode principale, appelée après le chargement de la page.
	 */
	static main() {
		console.log("Application chargée");
		console.log("paramètre vi:", App.settings.vi);
		console.log("paramètre vb:", App.settings.vb);
		console.log("paramètre vs:", App.settings.vs);
		console.log("paramètre vo:", App.settings.vo);
		this.displayContents();
	}

	/**
	 * Exécute une fonction donnée après le DOM chargé
	 * @returns {Promise} La promesse résolue après chargement DOM
	 */
	static load() {
		// Routage: Il faudrait créer un petit objet de routage ici
		console.log("window.location.pathname:", window.location.pathname);
		let pageClass = WeekPage; 
		if (window.location.pathname.match(/\/event/gi)){
			pageClass = EventPage; 
		}	
		this._page = new pageClass();
		return new Promise(resolve => {
			document.addEventListener("DOMContentLoaded", () => {
				resolve();
			});
		});
	}
}
