/**
 * @module App
 */
import Settings from "./Settings";

export default class App {

    static _settings = new Settings();

    /**
     * Getter settings
     */
    static get settings() {
        return this._settings;
    }

    /**
     * Méthode principale, appelée au chargement de la page.
     */
    static event() {
        const API_URL = `https://gpenissard.webdev.cmaisonneuve.qc.ca/agendax/api/event`;
        $.getJSON(API_URL, function (data) {
            console.log(data);
            var items = [];
            $.each(data, function (key, val) {
                console.log(val);
                items.push("<li id='" + key + "'>" + val.name + "</li>");
            });

            $("<ul/>", {
                "class": "my-new-list",
                html: items.join("")
            }).appendTo("#app");
            $("<button/>", {
                text: "Mettre à jour evenement 3"
            })
            .appendTo("#app")
            .click((evt)=>{
                const API_URL_MODIFIER = `https://gpenissard.webdev.cmaisonneuve.qc.ca/agendax/api/event/3`;
                $.ajax({
                    url: API_URL_MODIFIER,
                    type: 'put',
                    data: JSON.stringify({
                        "name":"événement hop",
                        "startdt":"2020-07-01 13:30:00",
                        "enddt":"2020-07-01 14:30:00"
                        }),
                    headers: {
                        "Content-Type": "application/json"
                    },
                    dataType: 'json',
                    complete: ()=>{
                        console.log("Evenement mis à jour");
                    },
                })
            }); 
        });
    }

    /**
     * Méthode principale, appelée au chargement de la page.
     */
    static main() {
        console.log("Application chargée");
        console.log("paramètre color:", App.settings.color);
        $(() => {
            this.event();
        });
    }
}