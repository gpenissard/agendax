/**
 * @module Page
 */

export default class Page {

	/**
	 * À surcharger dans les descendants
	 */
	get title() {
		throw new Error("Méthode abstraite");
	}

	/**
	 * À surcharger dans les descendants
	 * Abstraite
	 */
	get body() {
		throw new Error("Méthode abstraite");
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
		throw new Error("Méthode abstraite");
	}

	/**
	 * Chargement de la page et de ses données
	 * Abstraite: À surcharger dans les descendants
	 * @returns {Promise} La promesse résolue après chargement
	 */
	load() {
		throw new Error("Méthode abstraite");
	}
}
