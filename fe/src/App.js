/**
 * @module App
 */
import Settings from "./Settings.js";

export default class App {

	static _settings = new Settings();

	static get settings() {
		return this._settings;
	}

	static afficherContenu() {
		let contenu = `
        <div class='container'>
            <header>
                <h1>Agendax</h1>
            </header>
            <!-- Le contenu spécifique sera affiché ici -->
            <div id='page-content'></div>
         </div>`;
 		// Insertion dans le DOM
		document.getElementById('app').innerHTML = contenu;
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
		this.afficherContenu();
	}

	/**
	 * Exécute une fonction donnée après le DOM chargé
	 * @returns {Promise} La promesse résolue après chargement DOM
	 */
	static load() {
		return new Promise(resolve => {
			document.addEventListener("DOMContentLoaded", () => {
				resolve();
			});
		});
	}
}
