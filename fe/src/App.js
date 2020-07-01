/**
 * @module App
 */
import Settings from "./Settings.js";
import EventController from "./controllers/EventController.js";

export default class App {

	static _settings = new Settings();
	static _controller = null; // Controller

	static get settings() {
		return this._settings;
	}

	static get controller() {
		return this._controller;
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
	}

	/**
	 * Exécute une fonction donnée après le DOM chargé
	 * @returns {Promise} La promesse résolue après chargement DOM
	 */
	static load() {
		// Routage: Il faudrait créer un petit objet de routage ici
		console.log("window.location.pathname:", window.location.pathname);
		if (true /*window.location.pathname.match(/\/event/gi)*/){
			this._controller = new EventController(); // Controller
		}
		this.controller.process();

		return new Promise(resolve => {
			document.addEventListener("DOMContentLoaded", () => {
				resolve();
			});
		});
	}
}
