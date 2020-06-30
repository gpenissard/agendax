/**
 * @module Settings
 */
export default class Settings {
	constructor () {
		this.vi = 145; // une donnée nombre
		this.vb = true; // une donnée booléenne
		this.vs = "param"; // une donnée string
		this.vo = {
			haut:5,
			long:25,
		}; // une donnée objet
	}

	/**
	 * Getter vi
	 * @returns {number}
	 */
	get vi() {
		return this._vi;
	} 
	
	/**
	 * Setter vi
	 */
	set vi(val){
		this._vi = val;
	}

	/**
	 * Getter vb
	 * @returns {boolean}
	 */
	get vb() {
		return this._vb;
	} 
	
	/**
	 * Setter vb
	 */
	set vb(val){
		this._vb = val;
	}

	/**
	 * Getter vs
	 * @returns {string}
	 */
	get vs() {
		return this._vs;
	} 
	
	/**
	 * Setter vs
	 */
	set vs(val){
		this._vs = val;
	}

	/**
	 * Getter vo
	 * @returns {Object}
	 */
	get vo() {
		return this._vo;
	} 
	
	/**
	 * Setter vo
	 */
	set vo(val){
		if (! (val instanceof Object) || ! val.hasOwnProperty('haut') || ! val.hasOwnProperty('long')) {
			throw new TypeError("Objet invalide");
		}
		this._vo = val;
	}
}
