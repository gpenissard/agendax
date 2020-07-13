"use strict";

const BASE_API = "https://gpenissard.webdev.cmaisonneuve.qc.ca/agendax/api/event";

$(()=>{
    console.log("jQuery party");
    $.getJSON(BASE_API, (data)=>{
        console.log(data);
        let items = ""; // Le HTML des LI s 
        $.each(data, (index, val)=>{
            items += `<li data-event-id=${val.id}><a href="#">${val.name}</a><button class="suppr">X</button></li>`;
        })
        $("<ul/>")
        .html(items)
        .appendTo("#app");
        $(".suppr").click((evt)=>{
            // id de l'event dans le li parent
            let idEvent = $(evt.target).parent().data("event-id");
            console.log(`Supprimer événement id=${idEvent}`);
            const API_SUPPRIMER = BASE_API + "/" + idEvent;
            $.ajax({
                url: API_SUPPRIMER,
                type: "delete",
                data: '',
                headers: {
                    "Content-Type":"application/json"
                },
                dataType: 'json',
                complete: (data)=>{
                    console.log("Evenement supprimé", data);
                    location.reload();
                }
            });
        });
    });
    $("<button>")
        .text("Mettre à jour événement")
        .appendTo("#app")
        .click(()=>{
            const API_MODIFIER = BASE_API + "/2";
            $.ajax({
                url: API_MODIFIER,
                type: "put",
                data: JSON.stringify({
                        "name":"Gilles modifie",
                        "startdt":"2020-07-01 10:00:00",
                        "enddt":"2020-07-01 11:30:00"
                        }),
                headers: {
                    "Content-Type":"application/json"
                },
                dataType: 'json',
                complete: (data)=>{
                    console.log("Evenement mis à jour", data);
                    location.reload();
                }
            });
        });

    // Ajout d'événement
    $("#btnAjoutEvent").click(evt=>{
        // Event data
        let eventData = {
            name: $("input[name=eventname]").val(),
            startdt:$("input[name=eventstartdate]").val(),
            enddt:$("input[name=eventenddate]").val(),
        }
        console.log("Ajouter evenement", eventData);
        const API_AJOUTER = BASE_API;
        $.ajax({
            url: API_AJOUTER,
            type: "post",
            data: JSON.stringify(eventData),
            headers: {
                "Content-Type":"application/json"
            },
            dataType: 'json',
            complete: (data)=>{
                console.log("Evenement ajouté", data);
                location.reload();
            }
        });
});
});


