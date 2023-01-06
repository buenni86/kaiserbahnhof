import { bootstrapExtra } from "@workadventure/scripting-api-extra";
import { } from "https://unpkg.com/@workadventure/scripting-api-extra@^1";

var currentPopup = undefined;
var isCoWebSiteOpened =  false;
var urlEmperorWilhelm = "https://de.wikipedia.org/wiki/Wilhelm_II._(Deutsches_Reich)";
var urlEmperorStation = "https://de.wikipedia.org/wiki/Bahnhof_Potsdam_Park_Sanssouci#Kaiserbahnhof";
var urlDbAcademy = "https://db-planet.deutschebahn.com/pages/db-akademie-2/apps/content/kurs-dialog-angebote";
var urlTrain = "https://de.wikipedia.org/wiki/Hofzug";
var urlEmperorNikolaus = "https://de.wikipedia.org/wiki/Nikolaus_II._(Russland)";

function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}

var zoneEmperor = "kaiser";
var zonePictureOne = "bild1";
var zonePictureTwo = "bild2";
var zonePictureThree = "fireplaceInfo";
var zoneTrain = "train";

var popUpTrain = "popUpTrain";
var popUpEmperorWilhelm = "popUpEmperorWilhelm";
var popUpFireplace = "popUpFireplace";

var labelOk = "OK";
var labelTrain = "Mehr zum Hofzug";
var labelEmperorNikolaus = "Mehr zu Zar Nikolaus II.";

var msgTrain = "Zwei historische Reisezugwagen aus der Zeit der Königlich Preußischen Eisenbahnverwaltung findest du im Kaiserbahnhof in Potsdam. Heute sind dies vier moderne Konferenzräume:\n\n" +
"1. Hofsalonwagen der Kaiserin Auguste Viktoria (1851-1921), der Gattin Kaiser Wilhelm II. von 1901\n" +
"2. Preußischer Schnellzugwagen von 1912. Er wurde als 2. Klasse-Wagen im Personenverkehr eingesetzt";
var msgEmperorWilhelm = "Wilhelm II. von Preußen (* 27. Januar 1859 in Berlin; † 4. Juni 1941 in Doorn, Niederlande), aus dem Haus Hohenzollern war von 1888 bis 1918 letzter Deutscher Kaiser und König von Preußen."
var msgFireplace = "Wusstest du, das dieser Kamin im Kaisersaal des Kaiserbahnhofs in Potsdam zu finden ist. Wenn du das nächste Mal dort bist, wirf doch einmal einen Blick darauf. Der Kamin ist ein Nachbau. Der ursprüngliche Kamin war ein Gastgeschenk des Zar Nikolaus II., der 1910 mit einem Hofzug an der Station empfangen wurde."

WA.room.onEnterLayer(zoneTrain).subscribe(() => {
  currentPopup =  WA.ui.openPopup(popUpTrain, msgTrain, [
  {
  label: labelOk,
    callback: (popup => {
      closePopUp();
    })
  }]);
})

WA.room.onLeaveLayer(zoneTrain).subscribe(() => {
  closePopUp();

  if (isCoWebSiteOpened) {
    WA.nav.closeCoWebSites();
    isCoWebSiteOpened = false;
  }
})

WA.room.onEnterLayer(zonePictureThree).subscribe(() => {
  currentPopup =  WA.ui.openPopup(popUpFireplace, msgFireplace, [
  {
  label: labelOk,
    callback: (popup => {
      closePopUp();
    })
  },
  {
  label: labelTrain,
    callback: (popup => {
      WA.nav.openTab(urlTrain);
      isCoWebSiteOpened = true;
    })
  },
  {
  label: labelEmperorNikolaus,
    callback: (popup => {
      WA.nav.openTab(urlEmperorNikolaus);
      isCoWebSiteOpened = true;
    })
  }]);
})

WA.room.onLeaveLayer(zonePictureThree).subscribe(() => {
  closePopUp();

  if (isCoWebSiteOpened) {
    WA.nav.closeCoWebSites();
    isCoWebSiteOpened = false;
  }
})

WA.room.onEnterLayer(zonePictureOne).subscribe(() => {
  currentPopup =  WA.ui.openPopup(popUpEmperorWilhelm, msgEmperorWilhelm, [
  {
    label: labelOk,
    callback: (popup => {
      closePopUp();
    })
  }]);
})

WA.room.onLeaveLayer(zonePictureOne).subscribe(() => {
  closePopUp();
})