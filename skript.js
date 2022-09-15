import { bootstrapExtra } from "@workadventure/scripting-api-extra";
import { } from "https://unpkg.com/@workadventure/scripting-api-extra@^1";

bootstrapExtra().then(() => {
    console.log('Scripting API Extra ready');
}).catch(e => console.error(e));

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
var zoneTutorial = "tutorial";
var zoneTutorial1 = "tutorial1";
var zoneTutorial2 = "tutorial2";
var Mail = "mailto:DB.Systel.CommunicationServices.EVS@deutschebahn.com";

var evsMsg = "Du hast eine Frage zu WorkAdventure, aber wir sind gerade nicht da? Schreib uns!";

var tutorialMsg = "Möchten Sie sich das Tutorial ansehen?";


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
