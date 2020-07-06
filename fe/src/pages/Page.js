/**
 * @module Page
 */

 /**
  * @class Page
  * Gère la vue (code HTML) avec des données de page
  */
export default class Page {

	constructor(pageData = null) {
		this._data = pageData;
	}

	/**
	 * Getter donnée de page
	 */
	get data() {
		return this._data;
	}

	/**
	 * Titre de page
	 * À surcharger dans les descendants
	 * Abstraite
	 */
	get title() {
		throw new Error("Méthode abstraite");
	}

	/**
	 * Code HTML du body
	 * À surcharger dans les descendants
	 * Abstraite
	 */
	get body() {
		throw new Error("Méthode abstraite");
	}
	
	/**
	 * Script à ajouter à la fin
	 * À surcharger dans les descendants
	 * Abstraite
	 */
	get script() {
		throw new Error("Méthode abstraite");
	}

	/**
	 * Assemble le HTML global de la page (n'affiche rien) 
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

}
