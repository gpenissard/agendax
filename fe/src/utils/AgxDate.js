/**
 * @module AgxDate
 */

const MOIS_FR = ['janvier','février','mars','avril','mai','juin','juillet','avril','janvier','février','mars','avril'];

export default class AgxDate extends window.Date {
    /**
     * DateTime
     * @param {*} dt 
     */
	constructor(dt) {
        super(dt.replace(/-/g,"/"));
    }

    get jour_fr() {
        return `${this.getDate()} ${MOIS_FR[this.getMonth()-1]} ${this.getFullYear()}`;
    }

    get heure_fr() {
        return `${this.getHours()}H${this.getMinutes()}`;
    }

    /**
     * 
     * @param {AgxDate} debut 
     * @param {AgxDate} fin 
     */
    static duree_fr(debut, fin) {
        let diffSec = (fin.getTime() - debut.getTime()) / 1000;
        let heures = Math.floor(diffSec / 3600);
        let minutes = Math.floor((diffSec - heures * 3600) / 60);
        let res = '';
        if (heures > 0) {
            res+= `${heures} heure${(heures>1)?'s':''}`;
        }
        if (minutes > 0) {
            if (heures > 0) {
                res+= ` et `;
            }
            res+= `${minutes} minute${(minutes>1)?'s':''}`;
        }
        return res;
    }
}
