import { bootstrapExtra } from "@workadventure/scripting-api-extra";
import { } from "https://unpkg.com/@workadventure/scripting-api-extra@^1";

bootstrapExtra().then(() => {
    console.log('Scripting API Extra ready');
}).catch(e => console.error(e));

WA.onInit(async () => {
    var currentPopup = undefined;
    var isCoWebSiteOpened = false;
    var urlTutorial = "https://db-planet.deutschebahn.com/pages/telefonie/apps/content/workadventure-erste-schritte";

    function closePopUp() {
        if (currentPopup !== undefined) {
            currentPopup.close();
            currentPopup = undefined;
        }
    }


    var zoneEVS = "evs-info";
    var zoneIntro = "intro";
    var zoneTutorial = "tutorial";
    var zoneTutorial1 = "tutorial1";
    var zoneTutorial2 = "tutorial2";
    var zoneGuide = "guide";
    var zoneGuide1 = "guide1";
    var zoneGuide2 = "guide2";
    var zonePong = "pong";
    var Mail = "mailto:DB.Systel.CommunicationServices.EVS@deutschebahn.com";

    var evsMsg = "Du hast eine Frage zu WorkAdventure, aber wir sind gerade nicht da? Schreib uns!";

    var introMsg = "Willkommen bei unserer WorkAdventure Worldtour!\n\nZur Bewegung deines Avatar nutze einfach die Pfeiltasten der Tastatur!\n" +
        "Für weitere Infos besuche unser Tutorial oder unseren WorkAdventure-Stand!\n" +
        "Nutze die Chance und gehe auf Entdeckungstour durch unser 16-Bit Universum,\num Möglichkeiten für spontanen Austausch,\nInteraktion und Zusammenarbeiten kennenzulernen.\n" +
        "Vielleicht findet sich bei unserer virtuellen Besichtigungstour sogar der perfekten Ort des zukünftiges Wunschbüros oder eine digitale Eventlocation.\n\n" +
        "Wir wünschen viel Spaß!";

    var guideMsg = "Wegweiser\n\n" +
        "Hauptbahnhof (Norden): Stiller Bereich\n" +
        "Dicker Bulle (Nordwesten): Worms\n" +
        "Green Pub (Nordosten): Pong\n" +
        "Marktstand (Zentral): Treffpunkt\n" +
        "Cocktailbar (Südwesten): Treffpunkt & Cocktails\n" +
        "Dancehall (Südosten): Musik\n" +
        "Silberturm (Süden): Minirätsel &\n" +
        "Workadventure@DB Infostand";

    var tutorialMsg = "Möchten Sie sich das Tutorial ansehen?";

    var pongMsg = "Pong gegeneinander?\n\n1.Wählen Sie Online-Mehrspielermodus\n" +
        "2.Wählen Sie 'Beiläufig'\n3.Geben Sie eine Zimmernummer ein und klicken Sie auf 'Zimmer ändern'\n" +
        "4. Teilen Sie die Zimmernummer Ihrem Partner mit\n\n" +
        "Die Steuerung funktioniert mit den Pfeiltasten.";

    WA.room.onEnterZone(zoneIntro, () => {
        currentPopup = WA.ui.openPopup("popUpIntro", introMsg, [
            {
                label: "Weltreise\nstarten!",
                callback: (popup => {
                    closePopUp();
                })
            },
            {
                label: "Tutorial",
                className: "primary",
                callback: (popup => {
                    WA.openTab(urlTutorial);
                    isCoWebSiteOpened = true;
                    closePopUp();
                })
            }]);
        WA.onInit().then(async () => {
            var position = await WA.player.getPosition();
            WA.camera.set(position.x, position.y, 2240, 400, false, false);
        })
    })

    WA.room.onLeaveZone(zoneIntro, () => {
        closePopUp();
    })

    WA.room.onEnterZone(zoneEVS, () => {
        currentPopup = WA.ui.openPopup("popUpEVS", evsMsg, [
            {
                label: "Schließen",
                callback: (popup => {
                    isCoWebSiteOpened = false;
                    closePopUp();
                })
            },
            {
                label: "📧 Team EVS 📧",
                className: "primary",
                callback: (popup => {
                    WA.nav.openTab(Mail);
                    isCoWebSiteOpened = true;
                    closePopUp();
                })
            }]);
    })

    WA.room.onLeaveZone(zoneEVS, () => {
        closePopUp();
    })

    WA.room.onEnterZone(zoneTutorial, () => {
        currentPopup = WA.ui.openPopup("popUpTutorial", tutorialMsg, [
            {
                label: "Nein",
                callback: (popup => {
                    isCoWebSiteOpened = false;
                    closePopUp();
                })
            },
            {
                label: "Ja",
                callback: (popup => {
                    WA.openTab(urlTutorial);
                    isCoWebSiteOpened = true;
                    closePopUp();
                })
            }
        ]);
    })

    WA.room.onEnterZone(zoneTutorial1, () => {
        currentPopup = WA.ui.openPopup("popUpTutorial1", tutorialMsg, [
            {
                label: "Nein",
                callback: (popup => {
                    isCoWebSiteOpened = false;
                    closePopUp();
                })
            },
            {
                label: "Ja",
                callback: (popup => {
                    WA.openTab(urlTutorial);
                    isCoWebSiteOpened = true;
                    closePopUp();
                })
            }
        ]);
    })

    WA.room.onEnterZone(zoneTutorial2, () => {
        currentPopup = WA.ui.openPopup("popUpTutorial2", tutorialMsg, [
            {
                label: "Nein",
                callback: (popup => {
                    isCoWebSiteOpened = false;
                    closePopUp();
                })
            },
            {
                label: "Ja",
                callback: (popup => {
                    WA.openTab(urlTutorial);
                    isCoWebSiteOpened = true;
                    closePopUp();
                })
            }
        ]);
    })

    WA.room.onLeaveZone(zoneTutorial, () => {
        closePopUp();

        if (isCoWebSiteOpened) {
            WA.nav.closeCoWebSite();
            isCoWebSiteOpened = false;
        }
    })

    WA.room.onLeaveZone(zoneTutorial1, () => {
        closePopUp();

        if (isCoWebSiteOpened) {
            WA.nav.closeCoWebSite();
            isCoWebSiteOpened = false;
        }
    })

    WA.room.onLeaveZone(zoneTutorial2, () => {
        closePopUp();

        if (isCoWebSiteOpened) {
            WA.nav.closeCoWebSite();
            isCoWebSiteOpened = false;
        }
    })

    WA.room.onEnterZone(zonePong, () => {
        currentPopup = WA.ui.openPopup("popUpPong", pongMsg, [
            {
                label: "OK",
                callback: (popup => {
                    closePopUp();
                })
            }]);
    })

    WA.room.onLeaveZone(zonePong, () => {
        closePopUp();
    })

    WA.room.onEnterZone(zoneGuide, () => {
        currentPopup = WA.ui.openPopup("popUpGuide", guideMsg, [
            {
                label: "OK",
                callback: (popup => {
                    closePopUp();
                })
            }]);
    })

    WA.room.onEnterZone(zoneGuide1, () => {
        currentPopup = WA.ui.openPopup("popUpGuide1", guideMsg, [
            {
                label: "OK",
                callback: (popup => {
                    closePopUp();
                })
            }]);
    })

    WA.room.onEnterZone(zoneGuide2, () => {
        currentPopup = WA.ui.openPopup("popUpGuide2", guideMsg, [
            {
                label: "OK",
                callback: (popup => {
                    closePopUp();
                })
            }]);
    })

    WA.room.onLeaveZone(zoneGuide, () => {
        closePopUp();
    })

    WA.room.onLeaveZone(zoneGuide1, () => {
        closePopUp();
    })

    WA.room.onLeaveZone(zoneGuide2, () => {
        closePopUp();
    })
});
