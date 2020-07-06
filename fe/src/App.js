/**
 * @module App
 */
import Settings from "./Settings.js";
import EventController from "./controllers/EventController.js";

export default class App {

	static _settings = new Settings();
	static _controller = null; // Controller

	/**
	 * Getter settings
	 */
	static get settings() {
		return this._settings;
	}

	/**
	 * Getter controller
	 */
	static get controller() {
		return this._controller;
	}

	/**
	 * Méthode à exécuter après le chargement du DOM, réalisant l'affichage via le contrôleur.
	 */
	static domTime() {
		console.log("Application chargée: Accès au DOM");
		this.controller.displayContents();
	}

	/**
	 * Réalise le chargement de l'application. Renvoie une promesse combinant les promesses suivantes:
	 * 	- La promesse de traitement de la requête par le contrôleur
	 *  - La promesse de chargement du DOM
	 * @returns {Promise} La promesse combinant instanciation du contrôleur et chargement du DOM
	 */
	static load() {
		console.log("paramètre vi:", App.settings.vi);
		console.log("paramètre vb:", App.settings.vb);
		console.log("paramètre vs:", App.settings.vs);
		console.log("paramètre vo:", App.settings.vo);

		// Routage: Il faudrait créer un petit objet de routage ici
		console.log("window.location.pathname:", window.location.pathname);
		if (true /*window.location.pathname.match(/\/event/gi)*/){
			this._controller = new EventController(); // Controller
		}
		// Promesses de traitement de la requête par le contrôleur
		let controllerLoad = this.controller.process();
		let DOMLoaded = new Promise(resolve => {
			document.addEventListener("DOMContentLoaded", () => {
				resolve();
		})});
		return Promise.all([controllerLoad,DOMLoaded]);
	}
}
