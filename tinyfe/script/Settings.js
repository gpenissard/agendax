/**
 * @module Settings
 */

const LS_KEY = "LS_KEY";

export default class Settings {
	constructor () {
		this._color = "#b62fa0"; // une donnée string
		this.load();
		//console.log(this.color);
		window.addEventListener("unload", () => {
			this.save();
		});
	}

	/**
	 * Getter vs
	 * @returns {string}
	 */
	get color() {
		return this._color;
	} 
	
	/**
	 * Setter vs
	 */
	set color(val){
		this._color = val;
	}

	/**
	 * 
	 */
	save() {
        console.log("Settings.save");
		let settingsStr = JSON.stringify(this);
		console.log(settingsStr);
        localStorage.setItem(LS_KEY, settingsStr);
	}

	load() {
        console.log("App.load");
		let storedData = localStorage.getItem(LS_KEY);
		let props = {};
        if (null !== storedData) {
            try {
                props = JSON.parse(storedData);
            }
            catch (err){
                console.error(err);
            }
		}
		// Assigner les propriétés une par une
		for (let o in props) {
			//console.log(o, props[o]);
			this[o] = props[o];
		}
 	}
}
