/**
 * @module Page
 */

export default class Page {

	/**
	 * À surcharger dans les descendants
	 */
	get title() {
		let result = "Agendax";
		return result;
	}

	/**
	 * À surcharger dans les descendants
	 * Abstraite
	 */
	get body() {
		let result = "";
		return result;
	}
	
	/**
	 * 
	 */
	get contents() {
		let result = `
        <div class='container'>
            <header>
                <h1>${this.title}</h1>
            </header>
            <!-- Page specific content -->
            <div id='page-content'>${this.body}</div>
         </div>`;
		return result;
	}

	/**
	 * Méthode principale, appelée par l'objet App dans la promesse de chargement
	 * Abstraite: À surcharger dans les descendants
	 */
	main() {
	}

	/**
	 * Chargement de la page et de ses données
	 * Abstraite: À surcharger dans les descendants
	 * @returns {Promise} La promesse résolue après chargement
	 */
	load() {
	}
}
