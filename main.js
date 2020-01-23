// Grab values from the submitted form in the URL
const words = new URLSearchParams(window.location.search);

// Assigning the variables with values used in the status
const geschlecht = words.get('geschlecht');
const alterNumber = words.get('alter-num');
const alter = words.get('alter');
const temp = words.get('temp');
const rrSys = words.get('rr-sys');
const rrDia = words.get('rr-dia');
const herzfrequenzNum = words.get('herzfrequenz-num');
const spo2 = words.get('spo2');
const az = words.get('AZ');
const ez = words.get('EZ');
const corpus = words.get('corpus');
const fehlbildung = words.get('fehlbildung');
const pflegezustand = words.get('pflegezustand');

const kolorit = words.get('kolorit');
const koloritSonstig = words.get('kolorit-sonstig');
const turgor = words.get('turgor');
const efflKeine = words.get('effl-keine');
const effloreszenzen = words.get('effloreszenzen');

const bodyOpb = words.get('body-opb');
const bodyBewegungseinschr = words.get('body-bewegungseinschr');
const bodyDs = words.get('body-ds');
const bodyRedness = words.get('body-redness');
const bodySchwellung = words.get('body-schwellung');
const bodyWarm = words.get('body-warm');
const bodyLokalisation = words.get('body-lokalisation');
const gipsOa = words.get('gips-oa');
const gipsUa = words.get('gips-ua');
const gipsOs = words.get('gips-os');
const gipsUs = words.get('gips-us');
const gipsR = words.get('gips-r');
const gipsL = words.get('gips-l');
const spineOpb = words.get('spine-opb');
const spineSkoliose = words.get('spine-skoliose');
const spineKyphose = words.get('spine-kyphose');
const spineLordose = words.get('spine-lordose');
const spineBewegungseinschr = words.get('spine-bewegungseinschr');
const spineSonstig = words.get('spine-sonstig');
const hipBeugung = words.get('hip-beugung');
const hipStreckung = words.get('hip-streckung');
const hipAussenrot = words.get('hip-aussenrot');
const hipInnenrot = words.get('hip-innenrot');
const hipSeiteR = words.get('hip-seite-r');
const hipSeiteL = words.get('hip-seite-l');
const kneeBeugung = words.get('knee-beugung');
const kneeStreckung = words.get ('knee-streckung');
const kneeAussenrot = words.get('knee-aussenrot');
const kneeInnenrot = words.get('knee-innenrot');
const kneeSeiteR = words.get('knee-seite-r');
const kneeSeiteL = words.get('knee-seite-l');
const bodyFreitext = words.get('body-freitext');

const augeOpb = words.get('auge-opb');
const isokor = words.get('isokor');
const anisokor = words. get('anisokor');
const anisoR = words.get('aniso-r');
const anisoL = words.get('aniso-l');
const lrPrompt = words.get('lr-prompt');
const lrVerz = words.get('lr-verz');
const lrVerzR = words.get('lr-verz-r');
const lrVerzL = words.get('lr-verz-l');
const bulbusFrei = words.get('bulbus-frei');
const bulbusEingeschr = words.get("bulbus-eingeschr");
const konjR = words.get('konj-r');
const konjL = words.get('konj-l');
const augeFreitext = words.get('auge-freitext');

const ohrOpb = words.get('ohr-opb');
const ohrOutsideKeine = words.get('ohr-outside-keine');
const ohrOutsideSonstig = words.get('ohr-outside-sonstig');
const tfOpb = words.get('tf-opb');
const tfRot = words.get('tf-rot');
const tfRotR = words.get('tf-rot-r');
const tfRotL = words.get('tf-rot-l');
const tfErguss = words.get('tf-erguss');
const tfErgussKlar = words.get('tf-erguss-klar');
const tfErgussEitrig = words.get('tf-erguss-eitrig');
const tfSonstig = words.get('tf-sonstig');
const hearing = words.get('hearing');
const ohrFreitext = words.get('ohr-freitext');

const naseOpb = words.get('nase-opb');
const sekretionSer = words.get('sekretion-ser');
const sekretionEitrig = words.get('sekretion-eitrig');
const naseFreitext = words.get('nase-freitext');

const rachenOpb = words.get('rachen-opb');
const zsOpb = words.get('zs-opb');
const zsKaries = words.get('zs-karies');
const zsSaniert = words.get('zs-saniert');
const zsSonstig = words.get('zs-sonstig');
const schleimhautFeucht = words.get('schleimhaut-feucht');
const schleimhautTrocken = words.get('schleimhaut-trocken');
const schleimhautAphten = words.get('schleimhaut-aphten');
const schleimhautSonstig = words.get('schleimhaut-sonstig');
const tonsOpb = words.get('tons-opb');
const tonsRed = words.get('tons-red');
const tonsHypertroph = words.get('tons-hypertroph');
const tonsBelegt = words.get('tons-belegt');
const tonsSonstig = words.get('tons-sonstig');

const lkOpb = words.get('lk-opb');
const lkCerv = words.get('lk-cerv');
const lkIngui = words.get('lk-ingui');
const lkAxill = words.get('lk-axill');
const lkSupraclav = words.get('lk-supraclav');
const lkSonstig = words.get('lk-sonstig');
const lkBeschr = words.get('lk-beschr');

const pulmoOpb = words.get('pulmo-opb');
const thoraxform = words.get('thoraxform');
const thoraxformSonstig = words.get('thoraxform-sonstig');
const atmungEupnoe = words.get('atmung-eupnoe');
const atmungDyspnoe = words.get('atmung-dyspnoe');
const atmungTachypnoe = words.get('atmung-tachypnoe');
const atmungOrthopnoe = words.get('atmung-orthopnoe');
const atmungFrequenz = words.get('atmung-frequenz');
const atemgerStgl = words.get('atemger-stgl');
const atemgerSchwach = words.get('atemger-schwach');
const atemgerSchwachR = words.get('atemger-schwach-r');
const atemgerSchwachL = words.get('atemger-schwach-l');
const stridorInsp = words.get('stridor-insp');
const stridorExsp = words.get('stridor-exsp');
const obstrPfeifen = words.get('obstr-pfeifen');
const obstrGiemen = words.get('obstr-giemen');
const obstrBrummen = words.get('obstr-brummen');
const obstrLokal = words.get('obstr-lokal');
const rasselnFb = words.get('rasseln-fb');
const rasselnMb = words.get('rasseln-mb');
const rasselnGb = words.get('rasseln-gb');
const rasselnLokal = words.get('rasseln-lokal');
const einziehungenSubc = words.get('einziehungen-subc');
const einziehungenJug = words.get('einziehungen-jug');
const einziehungenNf = words.get('einziehungen-nf');
const pulmoFreitext = words.get('pulmo-freitext');

const corOpb = words.get('cor-opb');
const htRein = words.get('ht-rein');
const htGespalten = words.get('ht-gespalten');
const htSonstig = words.get('ht-sonstig');
const herzaktion = words.get('herzaktion');
const herzfrequenz = words.get('herzfrequenz');
const murmurOpb = words.get('murmur-opb');
const murmurSys = words.get('murmur-sys');
const murmurDia = words.get('murmur-dia');
const pulsstatus = words.get('pulsstatus');
const corFreitext = words.get('cor-freitext');

const abdOpb = words.get('abd-opb');
const abdniveau = words.get('abdniveau');
const abddsOpb = words.get('abdds-opb');
const abddsReub = words.get('abdds-reub');
const abddsPeriumb = words.get('abdds-periumb');
const abddsSonstig = words.get('abdds-sonstig');
const appzeichenOpb = words.get('appzeichen-opb');
const appzeichenLanz = words.get('appzeichen-lanz');
const appzeichenKs = words.get('appzeichen-ks');
const appzeichenPsoas = words.get('appzeichen-psoas');
const appzeichenKlls = words.get('appzeichen-klls');
const appzeichenJump = words.get('appzeichen-jump');
const aws = words.get('aws');
const peritonismus = words.get('peritonismus');
const nierenlagerOpb = words.get('nierenlager-opb');
const nierenlagerKs = words.get('nierenlager-ks');
const nierenlagerKsR = words.get('nierenlager-ks-r');
const nierenlagerKsL = words.get('nierenlager-ks-l');
const hsmOpb = words.get('hsm-opb');
const hepatomeg = words.get('hepatomeg');
const splenomeg = words.get('splenomeg');
const abdFreitext = words.get('abd-freitext');

const stadiumM = words.get('stadium-m');
const descensusOpb = words.get('descensus-opb');
const descensusPath = words.get('descensus-path');
const descensusPathR = words.get('descensus-path-r');
const descensusPathL = words.get('descensus-path-l');
const stadiumWB = words.get('stadium-wb');
const stadiumWP = words.get('stadium-wp');
const pimmelFreitext = words.get('pimmel-freitext');

const neuroOpb = words.get('neuro-opb');
const vigilanz = words.get('vigilanz');
const orientOpb = words.get('orient-opb');
const orientAlter = words.get('orient-alter');
const orientNicht = words.get('orient-nicht');
const orientPerson = words.get('orient-person');
const orientOrt = words.get('orient-ort');
const orientZeit = words.get('orient-zeit');
const meninOpb = words.get('menin-opb');
const meninNacken = words.get('menin-nacken');
const meninLasegue = words.get('menin-lasegue');
const meninKniekuss = words.get('menin-kniekuss');
const meninSonstig = words.get('menin-sonstig');
const tonus = words.get('tonus');
const tonusLokal = words.get('tonus-lokal');
const kraft = words.get('kraft');
const koordOpb = words.get('koord-opb');
const koordAtaxie = words.get('koord-ataxie');
const koordFallneigung = words.get('koord-fallneigung');
const koordFallneigungR = words.get('koord-fallneigung-r');
const koordFallneigungL = words.get('koord-fallneigung-l');
const koordSonstig = words.get('koord-sonstig');
const sensibOpb = words.get('sensib-opb');
const sensibParaesth = words.get('sensib-paraesth');
const sensibDysaesth = words.get('sensib-dysaesth');
const sensibLokal = words.get('sensib-lokal');
const hirnnerven = words.get('hirnnerven');
const mer = words.get('mer');
const neuroFreitext = words.get('neuro-freitext');

const zusatz = words.get('zusatz')

// Function remove the last word of status
function removeLastWord () {
  var res = status.split(" ");  //split by space
  res.pop();  //remove last element
  status = res.join(" ");
}

// ERSTE ZEILE, STATUS PRAESENS

let status = `${alterNumber} ${alter}`

geschlecht === 'männlich' ? status = status + 'er Patient in' : status = status + 'e Patientin in';
az !== null ? status = status + ` ${az} AZ` : '';
ez !== null ? status = status + `, ${ez} EZ` : '';
pflegezustand !== null ? status = status + `, ${pflegezustand} Pflegezustand` : '';
corpus !== null ? status = status + ` und ${corpus} Körperbau` : '';
fehlbildung !== '' ? status = status + `, Fehlbildungen: ${fehlbildung}` : '';
status = status + '. ';
temp !== null ? status += `Temperatur: ${temp} °C` : status += `Temperatur:   °C`;
rrSys !== null & rrDia !== null ? status += `, RR ${rrSys}/${rrDia} mmHg` : status += `, RR   mmHg`;
herzfrequenzNum !== null ? status += `, Herzfrequenz ${herzfrequenzNum} bpm` : status += `, Herzfrequenz:   bpm`;
spo2 !== null ? status += `, Sauerstoffsättigung: ${spo2} %.` : status += `, Sauerstoffsättigung:   %.`

// HAUT

if (kolorit !== null && koloritSonstig !== '') {
  status = status + `Hautkolorit ${kolorit}, ${koloritSonstig}`;
} else if (kolorit !== null) {
  status = status + `Hautkolorit ${kolorit}`;
} else if (koloritSonstig !== ''){
  status = status + `Hautkolorit ${koloritSonstig}`;
};

turgor !== null ? (status.endsWith('. ') ? status = status + `Turgor ${turgor}` : status = status + `, Turgor ${turgor}`) : '';
efflKeine !== null ? (status.endsWith('. ') ? status = status + `keine Hauteffloreszenzen` : status = status + `, keine Hauteffloreszenzen`) : '';
effloreszenzen !== '' ? (status.endsWith('. ') ? status = status + `${effloreszenzen}` : status = status + `, ${effloreszenzen}`) : '';
if(kolorit !== null || koloritSonstig  !== '' || turgor  !== null || efflKeine !== null || effloreszenzen !== '') {
  status = status + '. ';
}


// SKELETT UND BEWEGUNGSAPPARAT

// check if anthing is clicked
if (bodyOpb !== null || bodyBewegungseinschr !== null || bodyDs !== null || bodyRedness !== null || bodySchwellung !== null || bodyWarm !== null || bodyLokalisation !== '' || gipsOa !== null ||
gipsUa !== null || gipsOs !== null || gipsUs !== null || gipsR !== null || gipsL !== null || spineOpb !== null || spineSkoliose !== null || spineKyphose !== null || spineLordose !== null || spineBewegungseinschr
!== null || spineSonstig !== '' || hipBeugung !== null || hipStreckung !== null || hipAussenrot !== null || hipInnenrot !== null || hipSeiteR !== null || hipSeiteL !== null || kneeBeugung !== null
|| kneeStreckung !== null || kneeAussenrot !== null || kneeInnenrot !== null || kneeSeiteR !== null || kneeSeiteL !== null || bodyFreitext !== '') {
  status = status + 'Skelett- und Bewegungsapparat: ';
}

// allgemein
bodyOpb !== null ? status = status + `${bodyOpb}` : '';
bodyBewegungseinschr !== null ? (status.endsWith(': ') ? status = status + `${bodyBewegungseinschr}` : status = status + ` und ${bodyBewegungseinschr}`) : '';
bodyDs !== null ? (status.endsWith(': ') ? status = status + `${bodyDs}` : status = status + ` und ${bodyDs}`) : '';
bodyRedness !== null ? (status.endsWith(': ') ? status = status + `${bodyRedness}` : status = status + ` und ${bodyRedness}`) : '';
bodySchwellung !== null ? (status.endsWith(': ') ? status = status + `${bodySchwellung}` : status = status + ` und ${bodySchwellung}`) : '';
bodyWarm !== null ? (status.endsWith(': ') ? status = status + `${bodyWarm}` : status = status + `und ${bodyWarm}`) : '';
bodyLokalisation !== '' ? status = status + ` ${bodyLokalisation}` : '';

// gips
if (gipsUa !== null || gipsOa !== null || gipsOs !== null || gipsUs !== null || gipsR !== null || gipsL !== null) {
  if (status.endsWith(': ')) {
    status = status + 'Gipsschiene '
  } else {
    status = status + ', Gipsschiene '
  }
}

gipsOa !== null ? (status.endsWith('Gipsschiene ') ? status = status + `${gipsOa}` : status = status + ` und ${gipsOa}`) : '';
gipsUa !== null ? (status.endsWith('Gipsschiene ') ? status = status + `${gipsUa}` : status = status + ` und ${gipsUa}`) : '';
gipsOs !== null ? (status.endsWith('Gipsschiene ') ? status = status + `${gipsOs}` : status = status + ` und ${gipsOs}`) : '';
gipsUs !== null ? (status.endsWith('Gipsschiene ') ? status = status + `${gipsUs}` : status = status + ` und ${gipsUs}`) : '';
if (gipsR !== null && gipsL !== null) {
  status = status + ` beidseits`
} else if (gipsR !== null) {
  status = status + ` ${gipsR}`
} else if (gipsL !== null) {
  status = status + ` ${gipsL}`
}

// wirbelsäule
if (spineOpb !== null || spineSkoliose !== null || spineKyphose !== null || spineLordose !== null || spineBewegungseinschr !== null || spineSonstig !== '') {
  if (status.endsWith(': ')) {
    status = status + 'Wirbelsäule'
  } else {
    status = status + ', Wirbelsäule'
  }
}

spineOpb !== null ? status = status + ` ${spineOpb}` : '';
spineBewegungseinschr !== null ? (status.endsWith('ule') ? status = status + ` mit ${spineBewegungseinschr}` : status = status + `, ${spineBewegungseinschr}`) : '';
spineSonstig !== "" ? status = status + ` ${spineSonstig}` : '';
spineSkoliose !== null ? (status.endsWith('ule') ? (removeLastWord(), status = status + ` ${spineSkoliose}`) : status = status + `, ${spineSkoliose}`) : '';
spineKyphose !== null ? (status.endsWith('ule') ? (removeLastWord(), status = status + ` ${spineKyphose}`) : status = status + `, ${spineKyphose}`) : '';
spineLordose !== null ? (status.endsWith('ule') ? (removeLastWord(), status = status + ` ${spineLordose}`) : status = status + `, ${spineLordose}`) : '';

// hüfte
if (hipBeugung !== null || hipStreckung !== null || hipAussenrot !== null || hipInnenrot !== null || hipSeiteR !== null || hipSeiteL !== null) {
  if (status.endsWith(': ') === false) {
    status = status + ', '
  }
}

hipBeugung !== null ? status = status + `${hipBeugung}` : '';
hipStreckung !== null ? (status.endsWith(', ') || status.endsWith(': ') ? status = status + `${hipStreckung}` : status = status + ` und ${hipStreckung}`) : '';
hipAussenrot !== null ? (status.endsWith(', ') || status.endsWith(': ') ? status = status + `${hipAussenrot}` : status = status + ` und ${hipAussenrot}`) : '';
hipInnenrot !== null ? (status.endsWith(', ') || status.endsWith(': ') ? status = status + `${hipInnenrot}` : status = status + ` und ${hipInnenrot}`) : '';
if (hipSeiteR !== null) {
  if (hipSeiteL !== null) {
    status = status + ` in beiden Hüftgelenken`
  } else {
    status = status + ` im ${hipSeiteR} Hüftgelenk`
  }
} else {
  if (hipSeiteL !== null) {
    status = status + ` im ${hipSeiteL} Hüftgelenk`
  } else {
    ''
  }
}

// knie
if (kneeBeugung !== null || kneeStreckung !== null || kneeAussenrot !== null || kneeInnenrot !== null || kneeSeiteR !== null || kneeSeiteL !== null) {
  if (status.endsWith(': ') === false) {
    status = status + ', '
  }
}

kneeBeugung !== null ? status = status + `${kneeBeugung}` : '';
kneeStreckung !== null ? (status.endsWith(', ') || status.endsWith(': ') ? status = status + `${kneeStreckung}` : status = status + ` und ${kneeStreckung}`) : '';
kneeAussenrot !== null ? (status.endsWith(', ') || status.endsWith(': ') ? status = status + `${kneeAussenrot}` : status = status + ` und ${kneeAussenrot}`) : '';
kneeInnenrot !== null ? (status.endsWith(', ') || status.endsWith(': ') ? status = status + `${kneeInnenrot}` : status = status + ` und ${kneeInnenrot}`) : '';
if (kneeSeiteR !== null) {
  if (kneeSeiteL !== null) {
    status = status + ` in beiden Kniegelenken`
  } else {
    status = status + ` im ${kneeSeiteR} Kniegelenk`
  }
} else {
  if (kneeSeiteL !== null) {
    status = status + ` im ${kneeSeiteL} Kniegelenk`
  } else {
    ''
  }
}

// freitext und ende
bodyFreitext !== '' ? (status.endsWith(': ') ? status = status + `${bodyFreitext}` : status = status + `, ${bodyFreitext}`) : '';

if (bodyOpb !== null || bodyBewegungseinschr !== null || bodyDs !== null || bodyRedness !== null || bodySchwellung !== null || bodyWarm !== null || bodyLokalisation !== '' || gipsOa !== null ||
gipsUa !== null || gipsOs !== null || gipsUs !== null || gipsR !== null || gipsL !== null || spineOpb !== null || spineSkoliose !== null || spineKyphose !== null || spineLordose !== null || spineBewegungseinschr
!== null || spineSonstig !== '' || hipBeugung !== null || hipStreckung !== null || hipAussenrot !== null || hipInnenrot !== null || hipSeiteR !== null || hipSeiteL !== null || kneeBeugung !== null
|| kneeStreckung !== null || kneeAussenrot !== null || kneeInnenrot !== null || kneeSeiteR !== null || kneeSeiteL !== null || bodyFreitext !== '') {
status = status + '. ';
}

// AUGE
if (augeOpb !== null || isokor !== null || anisokor !== null || anisoR !== null || anisoL !== null || lrPrompt !== null || lrVerz !== null || lrVerzR !== null || lrVerzL !== null ||
bulbusFrei !== null || bulbusEingeschr !== '' || konjR !== null || konjL !== null || augeFreitext !== '') {
  status = status + `Augen: `
}

augeOpb !== null ? status = status + `${augeOpb}` : '';
isokor !== null ? status = status + `${isokor}` : '';
anisokor !== null ? status = status + `${anisokor}` : '';
anisoR !== null ? status =  status + ` ${anisoR}` : '';
anisoL !== null ? status = status + ` ${anisoL}` : '';

// lichtreaktion
if (lrPrompt !== null || lrVerz !== null || lrVerzR !== null || lrVerzL !== null) {
  if (status.endsWith(': ') === false) {
    status = status + ', '
  }
}
lrPrompt !== null ? status = status + `${lrPrompt}` : '';
if (lrVerz !== null) {
  if (lrVerzR !== null && lrVerzL !== null) {
    status = status + `Lichtreaktion beidseits verzögert`;
  } else if (lrVerzR !== null) {
    status = status + `Lichtreaktion rechts verzögert`;
  } else if (lrVerzL !== null) {
    status = status + `Lichtreaktion links verzögert`;
  } else {
    status = status + `Lichtreaktion verzögert`;
  }
}

// bulbusbeweglichkeit
if (bulbusFrei !== null || bulbusEingeschr !== '') {
  if (status.endsWith(': ') === false) {
    status = status + ', '
  }
}
bulbusFrei !== null ? status = status + `${bulbusFrei}` : '';
bulbusEingeschr !== '' ? status = status + `Bulbusbeweglichkeit eingeschränkt: ${bulbusEingeschr}` : '';

// konjunktivitis
if (konjR !== null || konjL !== null) {
  if (status.endsWith(': ') === false) {
    status = status + ', '
  }
}
if (konjR !== null && konjL !== null) {
  status = status + `Konjunktivitis beidseits`;
} else if (konjR) {
  status = status + `Konjunktivitis rechts`;
} else if (konjL) {
  status = status + `Konjunktivitis links`;
}

// freitext und ende
augeFreitext !== '' ? (status.endsWith(': ') || status.endsWith(', ') ? status = status + `${augeFreitext}` : status = status + `, ${augeFreitext}`) : '';

if (augeOpb !== null || isokor !== null || anisokor !== null || anisoR !== null || anisoL !== null || lrPrompt !== null || lrVerz !== null || lrVerzR !== null || lrVerzL !== null ||
bulbusFrei !== null || bulbusEingeschr !== '' || konjR !== null || konjL !== null || augeFreitext !== '') {
status = status + '. ';
}

// OHR
if (ohrOpb !== null || ohrOutsideKeine !== null || ohrOutsideSonstig !== '' || tfOpb !== null || tfRot !== null || tfRotR !== null || tfRotL !== null || tfErguss !== null || tfErgussKlar !== null ||
tfErgussEitrig !== null || tfSonstig !== '' || hearing !== null || ohrFreitext !== '') {
  status = status + `Ohren: `
}
ohrOpb !== null ? status = status + `${ohrOpb}` : '';
ohrOutsideKeine !== null ? status = status + `${ohrOutsideKeine}` : '';
ohrOutsideSonstig !== '' ? status = status + `${ohrOutsideSonstig}` : '';

// trommelfell
if (tfOpb !== null || tfRot !== null || tfRotR !== null || tfRotL !== null || tfErguss !== null || tfErgussKlar !== null || tfErgussEitrig !== null || tfSonstig!== '') {
  if (status.endsWith(': ') === false) {
    status = status + ', '
  }
}
tfOpb !== null ? status = status + `${tfOpb}` : '';
if (tfRot !== null && tfRotR !== null && tfRotL !== null) {
  if (status.endsWith(': ') || status.endsWith(', ')) {
    status = status + 'Trommelfelle beidseits gerötet'
  } else {
    status = status + ', Trommelfelle beidseits. gerötet'
  }
} else if (tfRot !== null && tfRotR !== null) {
  if (status.endsWith(': ') || status.endsWith(', ')) {
    status = status + 'rechtes Trommelfell gerötet'
  } else {
    status = status + ', rechtes Trommelfell gerötet'
  }
} else if (tfRot !== null && tfRotL !== null) {
  if (status.endsWith(': ') || status.endsWith(', ')) {
    status = status + 'linkes Trommelfell gerötet'
  } else {
    status = status + ', linkes Trommelfell gerötet'
  }
}
if (tfErguss !== null && tfErgussKlar !== null && tfRotL !== null && tfRotR !== null) {
  if (status.endsWith(': ') || status.endsWith(', ')) {
    status = status + 'beidseits klarer Erguss'
  } else {
    status = status + ', beidseits klarer Erguss'
  }
} else if (tfErguss !== null && tfErgussKlar && tfRotR !== null) {
  if (status.endsWith(': ') || status.endsWith(', ')) {
    status = status + 'klarer Erguss rechts'
  } else {
    status = status + ', klarer Erguss rechts'
  }
} else if (tfErguss !== null && tfErgussKlar && tfRotL !== null) {
  if (status.endsWith(': ') || status.endsWith(', ')) {
    status = status + 'klarer Erguss links'
  } else {
    status = status + ', klarer Erguss links'
  }
}
if (tfErguss !== null && tfErgussEitrig !== null && tfRotL !== null && tfRotR !== null) {
  if (status.endsWith(': ') || status.endsWith(', ')) {
    status = status + 'beidseits eitriger Erguss'
  } else {
    status = status + ', beidseits eitriger Erguss'
  }
} else if (tfErguss !== null && tfErgussEitrig && tfRotR !== null) {
  if (status.endsWith(': ') || status.endsWith(', ')) {
    status = status + 'eitriger Erguss rechts'
  } else {
    status = status + ', eitriger Erguss rechts'
  }
} else if (tfErguss !== null && tfErgussEitrig && tfRotL !== null) {
  if (status.endsWith(': ') || status.endsWith(', ')) {
    status = status + 'eitriger Erguss links'
  } else {
    status = status + ', eitriger Erguss links'
  }
}
tfSonstig !== '' ? (status.endsWith(': ') || status.endsWith(', ') ? status = status + `${tfSonstig}` : status = status + `, ${tfSonstig}`) : '';

// hörvermögen
hearing !== null ? (status.endsWith(': ') || status.endsWith(', ') ? status = status + `Hörvermögen ${hearing}` : status = status + `, Hörvermögen ${hearing}`) : '';
ohrFreitext !== '' ? (status.endsWith(': ') || status.endsWith(', ') ? status = status + `${ohrFreitext}` : status = status + `, ${ohrFreitext}`) : '';

if (ohrOpb !== null || ohrOutsideKeine !== null || ohrOutsideSonstig !== '' || tfOpb !== null || tfRot !== null || tfRotR !== null || tfRotL !== null || tfErguss !== null || tfErgussKlar !== null ||
tfErgussEitrig !== null || tfSonstig !== '' || hearing !== null || ohrFreitext !== '') {
status = status + '. ';
}

// NASE

if (naseOpb !== null || sekretionSer !== null || sekretionEitrig !== null || naseFreitext !== '') {
  status = status + `Nase: `
}

if (naseOpb !== null) {
  status = status.slice(0, -2);
  status = status + `natmung ${naseOpb}`
}


if (sekretionSer !== null && sekretionEitrig !== null) {
  if (status.endsWith(': ') || status.endsWith(', ')) {
    status = status + 'seröse und eitrige Sekretion'
  } else {
    status = status + ', seröse und eitrige Sekretion'
  }
} else if (sekretionSer !== null) {
  if (status.endsWith(': ') || status.endsWith(', ')) {
    status = status + 'seröse Sekretion'
  } else {
    status = status + ', seröse Sekretion'
  }
} else if (sekretionEitrig !== null) {
  if (status.endsWith(': ') || status.endsWith(', ')) {
    status = status + 'eitrige Sekretion'
  } else {
    status = status + ', eitrige Sekretion'
  }
}

naseFreitext !== '' ? (status.endsWith(': ') || status.endsWith(', ') ? status = status + `${naseFreitext}` : status = status + `, ${naseFreitext}`) : '';

if (naseOpb !== null || sekretionSer !== null || sekretionEitrig !== null || naseFreitext !== '') {
status = status + '. ';
}

// RACHEN

if (rachenOpb !== null || zsOpb !== null || zsKaries !== null || zsSaniert !== null || zsSonstig !== '' || schleimhautFeucht !== null || schleimhautTrocken !== null ||
schleimhautAphten !== null || schleimhautSonstig !== '' || tonsOpb !== null || tonsRed !== null || tonsHypertroph !== null || tonsBelegt !== null || tonsSonstig !== '') {
  status = status + 'Rachen: '
}

rachenOpb !== null ? status = status + `${rachenOpb}` : '' ;

if ((zsOpb !== null || zsKaries !== null || zsSaniert !== null || zsSonstig !== '') && status.endsWith(': ') === false) {
  status = status + ', '
}
zsOpb !== null ? (status.endsWith(': ') || status.endsWith(', ') ? status = status + `${zsOpb}` : status = status + `, ${zsOpb}`) : '';
zsKaries !== null ? (status.endsWith(': ') || status.endsWith(', ') ? status = status + `${zsKaries}` : status = status + `, ${zsKaries}`) : '';
zsSaniert !== null ? (status.endsWith(': ') || status.endsWith(', ') ? status = status + `${zsSaniert}` : status = status + `, ${zsSaniert}`) : '';
zsSonstig !== '' ? (status.endsWith(': ') || status.endsWith(', ') ? status = status + `${zsSonstig}` : status = status + `, ${zsSonstig}`) : '';

if ((schleimhautFeucht !== null || schleimhautTrocken !== null || schleimhautAphten !== null || schleimhautSonstig !== '') && status.endsWith(': ') === false) {
  status = status + ', '
}
schleimhautFeucht !== null ? (status.endsWith(': ') || status.endsWith(', ') ? status = status + `${schleimhautFeucht}` : status = status + `, ${schleimhautFeucht}`) : '';
schleimhautTrocken !== null ? (status.endsWith(': ') || status.endsWith(', ') ? status = status + `${schleimhautTrocken}` : status = status + `, ${schleimhautTrocken}`) : '';
schleimhautAphten !== null ? (status.endsWith(': ') || status.endsWith(', ') ? status = status + `${schleimhautAphten}` : status = status + `, ${schleimhautAphten}`) : '';
schleimhautSonstig !== '' ? (status.endsWith(': ') || status.endsWith(', ') ? status = status + `${schleimhautSonstig}` : status = status + `, ${schleimhautSonstig}`) : '';

if (tonsOpb !== null || tonsRed !== null || tonsHypertroph !== null || tonsBelegt !== null || tonsSonstig !== '') {
  if (status.endsWith(': ') === false) {
    status = status + ', Tonsillen '
  } else {
    status = status + 'Tonsillen '
  }
}
tonsOpb !== null ? (status.endsWith(': ') || status.endsWith('len ') ? status = status + `${tonsOpb}` : status = status + `, ${tonsOpb}`) : '';
tonsRed !== null ? (status.endsWith(': ') || status.endsWith('len ') ? status = status + `${tonsRed}` : status = status + `, ${tonsRed}`) : '';
tonsHypertroph !== null ? (status.endsWith(': ') || status.endsWith('len ') ? status = status + `${tonsHypertroph}` : status = status + `, ${tonsHypertroph}`) : '';
tonsBelegt !== null ? (status.endsWith(': ') || status.endsWith('len ') ? status = status + `${tonsBelegt}` : status = status + `, ${tonsBelegt}`) : '';
tonsSonstig !== '' ? (status.endsWith(': ') || status.endsWith('len ') ? status = status + `${tonsSonstig}` : status = status + `, ${tonsSonstig}`) : '';

if (rachenOpb !== null || zsOpb !== null || zsKaries !== null || zsSaniert !== null || zsSonstig !== '' || schleimhautFeucht !== null || schleimhautTrocken !== null ||
schleimhautAphten !== null || schleimhautSonstig !== '' || tonsOpb !== null || tonsRed !== null || tonsHypertroph !== null || tonsBelegt !== null || tonsSonstig !== '') {
status = status + '. ';
}

// LYMPHKNOTEN

if (lkOpb !== null || lkCerv !== null || lkIngui !== null || lkAxill !== null || lkSupraclav !== null || lkSonstig !== '' || lkBeschr !== '') {
  status = status + 'Lymphknoten: '
}
lkOpb !== null ? status = status + `${lkOpb}` : '';
lkCerv !== null ? (status.endsWith(': ') || status.endsWith(', ') ? status = status + `${lkCerv}` : status = status + `, ${lkCerv}`) : '';
if (lkIngui !== null) {
  if (status.endsWith(': ')) {
    status = status + `${lkIngui}`
  } else if (status.endsWith('vergrößert') && (lkAxill !== null || lkSupraclav !== null || lkSonstig !== '')) {
    removeLastWord();
    status = status + `, ${lkIngui}`;
  } else if (status.endsWith('vergrößert')) {
    removeLastWord();
    status = status + ` und ${lkIngui}`;
  }
}
if (lkAxill !== null) {
  if (status.endsWith(': ')) {
    status = status + `${lkAxill}`
  } else if (status.endsWith('vergrößert') && (lkSupraclav !== null || lkSonstig !== '')) {
    removeLastWord();
    status = status + `, ${lkAxill}`;
  } else if (status.endsWith('vergrößert')) {
    removeLastWord();
    status = status + ` und ${lkAxill}`;
  }
}
if (lkSupraclav !== null) {
  if (status.endsWith(': ')) {
    status = status + `${lkSupraclav}`
  } else if (status.endsWith('vergrößert') && lkSonstig !== '') {
    removeLastWord();
    status = status + `, ${lkSupraclav}`;
  } else if (status.endsWith('vergrößert')) {
    removeLastWord();
    status = status + ` und ${lkSupraclav}`;
  }
}
if (lkSonstig !== '') {
  if (status.endsWith(': ')) {
    status = status + `${lkSupraclav}`
  } else if (status.endsWith('vergrößert')) {
    removeLastWord();
    status = status + ` und ${lkSupraclav}`;
  }
}
if (lkBeschr !== '' && status.endsWith('vergrößert')) {
  removeLastWord();
  status = status + ` ${lkBeschr}`
}

if (lkOpb !== null || lkCerv !== null || lkIngui !== null || lkAxill !== null || lkSupraclav !== null || lkSonstig !== '' || lkBeschr !== '') {
status = status + '. ';
}

// PULMO

if (pulmoOpb !== null || thoraxform !== null || thoraxformSonstig !== '' || atmungEupnoe !== null || atmungDyspnoe !== null || atmungTachypnoe !== null || atmungOrthopnoe !== null ||
atmungFrequenz !== '' || atemgerStgl !== null || atemgerSchwach !== null || atemgerSchwachL !== null || atemgerSchwachR !== null || stridorExsp !== null || stridorInsp !== null || obstrPfeifen
 !== null || obstrGiemen !== null || obstrBrummen !== null || obstrLokal !== '' || rasselnFb !== null || rasselnGb !== null || rasselnMb !== null || rasselnLokal !== '' || einziehungenSubc
 !== null || einziehungenJug !== null || einziehungenNf !== null || pulmoFreitext !== '') {
   status = status + 'Pulmo: '
 }
pulmoOpb !== null ? status = status + `${pulmoOpb}` : '';


thoraxform !== null ? (status.endsWith(': ') || status.endsWith(', ') ? status = status + `Thoraxform ${thoraxform}` : status = status + `, Thoraxform ${thoraxform}`) : '';
thoraxformSonstig !== '' ? (status.endsWith(': ') || status.endsWith(', ') ? status = status + `${thoraxformSonstig}` : status = status + `, ${thoraxformSonstig}`) : '';


atmungEupnoe !== null ? (status.endsWith(': ') || status.endsWith(', ') ? status = status + `${atmungEupnoe}` : status = status + `, ${atmungEupnoe}`) : '';
if (atmungDyspnoe !== null && atmungTachypnoe !== null) {
  if (status.endsWith(': ') || status.endsWith(', ')) {
    status = status + 'Tachydyspnoe'
  } else {
    status = status + ', Tachydyspnoe'
  }
} else if (atmungDyspnoe !== null) {
  if (status.endsWith(': ') || status.endsWith(', ')) {
    status = status + 'Dyspnoe'
  } else {
    status = status + ', Dyspnoe'
  }
} else if (atmungTachypnoe !== null) {
  if (status.endsWith(': ') || status.endsWith(', ')) {
    status = status + 'Tachypnoe'
  } else {
    status = status + ', Tachypnoe'
  }
}
atmungOrthopnoe !== null ? (status.endsWith(': ') || status.endsWith(', ') ? status = status + `${atmungOrthopnoe}` : status = status + `, ${atmungOrthopnoe}`) : '';
atmungFrequenz !== '' ? (status.endsWith(': ') || status.endsWith(', ') ? status = status + `Atemfrequenz ${atmungFrequenz} bpm` : status = status + `, Atemfrequenz ${atmungFrequenz} bpm`) : '';


atemgerStgl !== null ? (status.endsWith(': ') || status.endsWith(', ') ? status = status + `${atemgerStgl} belüftet` : status = status + `, ${atemgerStgl} belüftet`) : '';
if (atemgerSchwach !== null) {
  if (atemgerSchwachR !== null && atemgerSchwachL !== null) {
    if (status.endsWith(': ') || status.endsWith(', ')) {
      status = status + 'Atemgeräusch beidseits abgeschwächt'
    } else {
      status = status + ', Atemgeräusch beidseits abgeschwächt'
    }
  } else if (atemgerSchwachR !== null) {
    if (status.endsWith(': ') || status.endsWith(', ')) {
      status = status + 'Atemgeräusch rechts abgeschwächt'
    } else {
      status = status + ', Atemgeräusch rechts abgeschwächt'
    }
  } else if (atemgerSchwachL !== null) {
    if (status.endsWith(': ') || status.endsWith(', ')) {
      status = status + 'Atemgeräusch links abgeschwächt'
    } else {
      status = status + ', Atemgeräusch links abgeschwächt'
    }
  } else {
    if (status.endsWith(': ') || status.endsWith(', ')) {
      status = status + 'Atemgeräusch abgeschwächt'
    } else {
      status = status + ', Atemgeräusch abgeschwächt'
    }
  }
}


if (stridorInsp !== null && stridorExsp !== null) {
  if (status.endsWith(': ') || status.endsWith(', ')) {
    status = status + 'inspiratorischer und exspiratorischer Stridor'
  } else {
    status = status + ', inspiratorischer und exspiratorischer Stridor'
  }
} else if (stridorInsp !== null) {
  if (status.endsWith(': ') || status.endsWith(', ')) {
    status = status + 'inspiratorischer Stridor'
  } else {
    status = status + ', inspiratorischer Stridor'
  }
} else if (stridorExsp !== null) {
  if (status.endsWith(': ') || status.endsWith(', ')) {
    status = status + 'exspiratorischer Stridor'
  } else {
    status = status + ', exspiratorischer Stridor'
  }
}


obstrPfeifen !== null ? (status.endsWith(': ') || status.endsWith(', ') ? status = status + `${obstrPfeifen}` : status = status + `, ${obstrPfeifen}`) : '';
if (obstrGiemen !== null) {
  if (status.endsWith('Pfeifen')) {
    if (obstrBrummen !== null) {
      status = status + `, ${obstrGiemen}`
    } else {
      status = status + ` und ${obstrGiemen}`
    }
  } else {
    status = status + `${obstrGiemen}`
  }
}
if (obstrBrummen !== null) {
  if (status.endsWith('Pfeifen') || status.endsWith('Giemen')) {
    status = status + ` und ${obstrBrummen}`
  } else {
    status = status + `${obstrBrummen}`
  }
}
obstrLokal !== '' ? (status.endsWith(': ') || status.endsWith(', ') ? status = status + `${obstrLokal}` : status = status + ` ${obstrLokal}`) : '';


if (rasselnFb !== null || rasselnGb !== null || rasselnMb !== null || rasselnLokal !== '') {
  if (status.endsWith(': ') === false || status.endsWith(', ') === false) {
    status = status + ', '
  }
}
if (rasselnFb !== null && rasselnMb !== null) {
  status = status + 'fein- bis mittelblasige Rasselgeräusche'
} else if (rasselnMb !== null && rasselnGb !== null) {
  status = status + 'mittel- bis grobblasige Rasselgeräusche'
} else if (rasselnFb !== null) {
  status = status + `${rasselnFb} Rasselgeräusche`
} else if (rasselnMb !== null) {
  status = status + `${rasselnMb} Rasselgeräusche`
} else if (rasselnGb !== null) {
  status = status + `${rasselnGb} Rasselgeräusche`
}
rasselnLokal !== '' ? (status.endsWith(': ') || status.endsWith(', ') ? status = status + `${rasselnLokal}` : status = status + ` ${rasselnLokal}`) : '';


if ((einziehungenSubc !== null || einziehungenJug !== null || einziehungenNf !== null) && (status.endsWith(': ') === false || status.endsWith(', ') === false)) {
  status = status + ', '
}
einziehungenSubc !== null ? status = status + `${einziehungenSubc} Einziehungen` : '';
if (einziehungenJug !== null && status.endsWith('Einziehungen')) {
  removeLastWord();
  status = status + ` und ${einziehungenJug} Einziehungen`
} else if (einziehungenJug !== null) {
  status = status + `${einziehungenJug} Einziehungen`
}
einziehungenNf !== null ? (status.endsWith(', ') ? status = status + `${einziehungenNf}` : status = status + `, ${einziehungenNf}`) : '';


pulmoFreitext !== '' ? (status.endsWith(': ') || status.endsWith(', ') ? status = status + `${pulmoFreitext}` : status = status + `, ${pulmoFreitext}`) : '';

if (pulmoOpb !== null || thoraxform !== null || thoraxformSonstig !== '' || atmungEupnoe !== null || atmungDyspnoe !== null || atmungTachypnoe !== null || atmungOrthopnoe !== null ||
atmungFrequenz !== '' || atemgerStgl !== null || atemgerSchwach !== null || atemgerSchwachL !== null || atemgerSchwachR !== null || stridorExsp !== null || stridorInsp !== null || obstrPfeifen
 !== null || obstrGiemen !== null || obstrBrummen !== null || obstrLokal !== '' || rasselnFb !== null || rasselnGb !== null || rasselnMb !== null || rasselnLokal !== '' || einziehungenSubc
 !== null || einziehungenJug !== null || einziehungenNf !== null || pulmoFreitext !== '') {
status = status + '. ';
}

// COR

if (corOpb !== null || htRein !== null || htGespalten !== null || htSonstig !== '' || herzaktion !== null || herzfrequenz !== null || murmurOpb !== null || murmurSys !== '' ||
murmurDia !== '' || (pulsstatus !== null && pulsstatus !== '') || corFreitext !== '') {
  status = status + 'Cor: '
}
corOpb !== null ? status = status + `${corOpb}` : '';

herzfrequenz !== null ? (status.endsWith(': ') || status.endsWith(', ') ? status = status + `${herzfrequenz}` : status = status + `, ${herzfrequenz}`) : '';

if ((htRein !== null || htGespalten !== null || htSonstig !== '') && status.endsWith(': ') === false) {
  status = status + ', ';
}
htRein !== null ? status = status + 'Herztöne rein' : '';
htGespalten !== null ? status = status + 'Herztöne gespalten' : '';
htSonstig !== '' ? (status.endsWith(', ') ? status = status + `${htSonstig}` : status = status + ` ${htSonstig}`) : '';


herzaktion !== null ? (status.endsWith(': ') || status.endsWith(', ') ? status = status + `Herzaktion ${herzaktion}` : status = status + `, Herzaktion ${herzaktion}`) : '';


if (murmurOpb !== null || murmurSys !== '' || murmurDia !== '') {
  status = status + ', ';
}
murmurOpb !== null ? status = status + `${murmurOpb}` : '';
murmurSys !== '' ? (status.endsWith(': ') || status.endsWith(', ') ? status = status + ` Systolikum: ${murmurSys}` : status = status + `, Systolikum: ${murmurSys}`) : '';
murmurDia !== '' ? (status.endsWith(': ') || status.endsWith(', ') ? status = status + ` Diastolikum: ${murmurDia}` : status = status + `, Diastolikum: ${murmurDia}`) : '';


if (pulsstatus !== null || pulsstatus !== '') {
  if (pulsstatus === 'an allen Extremitäten unauffällig') {
    if (status.endsWith(': ') || status.endsWith(', ')) {
      status = status + `Pulsstatus ${pulsstatus}`
    } else {
      status = status + `, Pulsstatus ${pulsstatus}`
    }
  } else if (pulsstatus !== '') {
    if (status.endsWith(': ') || status.endsWith(', ')) {
      status = status + `peripheres Pulsdefizit ${pulsstatus}`
    } else {
      status = status + `, peripheres Pulsdefizit ${pulsstatus}`
    }
  }
}


corFreitext !== '' ? (status.endsWith(': ') || status.endsWith(', ') ? status = status + `${corFreitext}` : status = status + `, ${corFreitext}`) : '';

if (corOpb !== null || htRein !== null || htGespalten !== null || htSonstig !== '' || herzaktion !== null || herzfrequenz !== null || murmurOpb !== null || murmurSys !== '' ||
murmurDia !== '' || (pulsstatus !== null && pulsstatus !== '') || corFreitext !== '') {
status = status + '. ';
}

// ABDOMEN

if (abdOpb !== null || abdniveau !== null || abddsOpb !== null || abddsReub !== null || abddsPeriumb !== null || abddsSonstig !== '' || appzeichenOpb !== null || appzeichenLanz !== null ||
appzeichenKs !== null || appzeichenPsoas !== null || appzeichenKlls !== null || appzeichenJump !== null || aws !== '' || peritonismus !== null || nierenlagerOpb !== null ||
nierenlagerKs !== null || nierenlagerKsL !== null || nierenlagerKsR !== null || hsmOpb !== null || hepatomeg !== null || splenomeg !== null || abdFreitext !== '') {
  status = status + 'Abdomen: '
}
abdOpb !== null ? status = status + `${abdOpb}` : '';
abdniveau !== null ? (status.endsWith(': ') || status.endsWith(', ') ? status = status + `${abdniveau}` : status = status + `, ${abdniveau}`) : '';


abddsOpb !== null ? (status.endsWith(': ') || status.endsWith(', ') ? status = status + `${abddsOpb}` : status = status + `, ${abddsOpb}`) : '';
if (abddsReub !== null || abddsPeriumb !== null || abddsSonstig !== '') {
  if (status.endsWith(': ') || status.endsWith(', ')) {
    status = status + 'Druckschmerz '
  } else {
    status = status + ', Druckschmerz '
  }
}
abddsReub !== null ? status = status + `${abddsReub}` : '';
if (abddsPeriumb !== null) {
  if (status.endsWith('Unterbauch') && abddsSonstig !== '') {
    status = status + `, ${abddsPeriumb}`
  } else if (status.endsWith('Unterbauch')) {
    status = status + ` und ${abddsPeriumb}`
  } else if (status.endsWith('Druckschmerz ')) {
    status = status + `${abddsPeriumb}`
  }
}
if (abddsSonstig !== '') {
  if (abddsReub !== null || abddsPeriumb !== null) {
    status = status + `, ${abddsSonstig}`
  } else {
    status = status + `${abddsSonstig}`
  }
}


if (appzeichenOpb !== null || appzeichenLanz !== null || appzeichenKs !== null || appzeichenPsoas !== null || appzeichenKlls !== null || appzeichenJump !== null) {
  if (status.endsWith(': ') === false || status.endsWith(', ') === false) {
    status = status + ', '
  }
}
appzeichenOpb !== null ? status = status + `${appzeichenOpb}` : '';
appzeichenLanz !== null ? (status.endsWith(': ') || status.endsWith(', ') ? status = status + `${appzeichenLanz}` : status = status + `, ${appzeichenLanz}`) : '';
appzeichenKs !== null ? (status.endsWith(': ') || status.endsWith(', ') ? status = status + `${appzeichenKs}` : status = status + `, ${appzeichenKs}`) : '';
appzeichenPsoas !== null ? (status.endsWith(': ') || status.endsWith(', ') ? status = status + `${appzeichenPsoas}` : status = status + `, ${appzeichenPsoas}`) : '';
appzeichenKlls !== null ? (status.endsWith(': ') || status.endsWith(', ') ? status = status + `${appzeichenKlls}` : status = status + `, ${appzeichenKlls}`) : '';
appzeichenJump !== null ? (status.endsWith(': ') || status.endsWith(', ') ? status = status + `${appzeichenJump}` : status = status + `, ${appzeichenJump}`) : '';


if (aws !== null || aws !== '') {
  if (aws === 'keine Abwehrspannung') {
    if (status.endsWith(': ') || status.endsWith(', ')) {
      status = status + `${aws}`
    } else {
      status = status + `, ${aws}`
    }
  } else if (aws !== '') {
    if (status.endsWith(': ') || status.endsWith(', ')) {
      status = status + `Abwehrspannung ${aws}`
    } else {
      status = status + `, Abwehrspannung ${aws}`
    }
  }
}


peritonismus !== null ? (status.endsWith(': ') || status.endsWith(', ') ? status = status + `${peritonismus}` : status = status + `, ${peritonismus}`) : '';


if (nierenlagerOpb !== null || nierenlagerKs !== null || nierenlagerKsL !== null) {
  if (status.endsWith(': ') === false || status.endsWith(', ') === false) {
    status = status + ', '
  }
}
nierenlagerOpb !== null ? status = status + `${nierenlagerOpb}` : '';
if (nierenlagerKs !== null) {
  if (nierenlagerKsR !== null && nierenlagerKsL !== null) {
    if (status.endsWith(': ') || status.endsWith(', ')) {
      status = status + `Nierenlagerklopfschmerz beidseits`
    } else {
      status = status + `, Nierenlagerklopfschmerz beidseits`
    }
  } else if (nierenlagerKsL !== null) {
    if (status.endsWith(': ') || status.endsWith(', ')) {
      status = status + `Nierenlagerklopfschmerz links`
    } else {
      status = status + `, Nierenlagerklopfschmerz links`
    }
  } else if (nierenlagerKsR !== null) {
    if (status.endsWith(': ') || status.endsWith(', ')) {
      status = status + `Nierenlagerklopfschmerz rechts`
    } else {
      status = status + `, Nierenlagerklopfschmerz rechts`
    }
  }
}


if (hsmOpb !== null || hepatomeg !== null || splenomeg !== null) {
  if (status.endsWith(': ') === false || status.endsWith(', ') === false) {
    status = status + ', '
  }
}
hsmOpb !== null ? status = status + `${hsmOpb}` : '';
if (hepatomeg !== null && splenomeg !== null) {
  if (status.endsWith(': ') || status.endsWith(', ')) {
    status = status + `Hepatosplenomegalie`
  } else {
    status = status + `, Hepatosplenomegalie`
  }
} else if (hepatomeg !== null) {
  if (status.endsWith(': ') || status.endsWith(', ')) {
    status = status + `Hepatomegalie`
  } else {
    status = status + `, Hepatomegalie`
  }
} else if (splenomeg !== null) {
  if (status.endsWith(': ') || status.endsWith(', ')) {
    status = status + `Splenomegalie`
  } else {
    status = status + `, Splenomegalie`
  }
}


abdFreitext !== '' ? (status.endsWith(': ') || status.endsWith(', ') ? status = status + `${abdFreitext}` : status = status + `, ${abdFreitext}`) : '';

if (abdOpb !== null || abdniveau !== null || abddsOpb !== null || abddsReub !== null || abddsPeriumb !== null || abddsSonstig !== '' || appzeichenOpb !== null || appzeichenLanz !== null ||
appzeichenKs !== null || appzeichenPsoas !== null || appzeichenKlls !== null || appzeichenJump !== null || aws !== '' || peritonismus !== null || nierenlagerOpb !== null ||
nierenlagerKs !== null || nierenlagerKsL !== null || nierenlagerKsR !== null || hsmOpb !== null || hepatomeg !== null || splenomeg !== null || abdFreitext !== '') {
status = status + '. ';
}

// GENITALE

if (stadiumM !== null || descensusOpb !== null || descensusPath !== null || descensusPathR !== null || descensusPathL !== null || stadiumWB !== null || stadiumWP !== null || pimmelFreitext !== '') {
  if (geschlecht !== null) {
    status = status + `Genitale: ${geschlecht}, `
  } else {
    status = status + 'Genitale: '
  }
}

stadiumM !== null ? status = status + `${stadiumM}` : '';
descensusOpb !== null ? (status.endsWith(': ') || status.endsWith(', ') ? status = status + `${descensusOpb}` : status = status + `, ${descensusOpb}`) : '';
if (descensusPath !== null) {
  if (descensusPathR !== null && descensusPathL !== null) {
    if (status.endsWith(': ') || status.endsWith(', ')) {
      status = status + 'Hodenhochstand beidseits'
    } else {
      status = status + ', Hodenhochstand beidseits'
    }
  } else if (descensusPathR !== null) {
    if (status.endsWith(': ') || status.endsWith(', ')) {
      status = status + 'Hodenhochstand rechts'
    } else {
      status = status + ', Hodenhochstand rechts'
    }
  } else if (descensusPathL !== null) {
    if (status.endsWith(': ') || status.endsWith(', ')) {
      status = status + 'Hodenhochstand links'
    } else {
      status = status + ', Hodenhochstand links'
    }
  }
}
stadiumWB !== null ? (status.endsWith(': ') || status.endsWith(', ') ? status = status + `${stadiumWB}` : status = status + `, ${stadiumWB}`) : '';
stadiumWP !== null ? (status.endsWith(': ') || status.endsWith(', ') ? status = status + `${stadiumWP}` : status = status + `, ${stadiumWP}`) : '';
pimmelFreitext !== '' ? (status.endsWith(': ') || status.endsWith(', ') ? status = status + `${pimmelFreitext}` : status = status + `, ${pimmelFreitext}`) : '';

if (stadiumM !== null || descensusOpb !== null || descensusPath !== null || descensusPathR !== null || descensusPathL !== null || stadiumWB !== null || stadiumWP !== null || pimmelFreitext !== '') {
  status = status + '. ';
}

// NEURO

if (neuroOpb !== null || vigilanz !== null || orientOpb !== null || orientAlter !== null || orientNicht !== null || orientPerson !== null || orientOrt !== null || orientZeit !== null || meninOpb !== null ||
meninNacken !== null || meninLasegue !== null || meninKniekuss !== null || meninSonstig !== '' || tonus !== null || tonusLokal !== '' || (kraft !== null && kraft !== '') || koordOpb !== null ||
koordAtaxie !== null || koordFallneigung !== null || koordFallneigungR !== null || koordFallneigungL !== null || koordSonstig !== '' || sensibOpb !== null || sensibParaesth !== null ||
sensibDysaesth !== null || sensibLokal !== '' || (hirnnerven !== null && hirnnerven !== '') || mer !== '' || neuroFreitext !== '') {
  status = status + 'Neurologie: '
}
neuroOpb !== null ? status = status + `${neuroOpb}` : '';
vigilanz !== null ? (status.endsWith(': ') || status.endsWith(', ') ? status = status + `${vigilanz}` : status = status + `, ${vigilanz}`) : '';
orientOpb !== null ? (status.endsWith(': ') || status.endsWith(', ') ? status = status + `${orientOpb}` : status = status + `, ${orientOpb}`) : '';
orientAlter !== null ? (status.endsWith(': ') || status.endsWith(', ') ? status = status + `${orientAlter}` : status = status + `, ${orientAlter}`) : '';
orientNicht !== null ? (status.endsWith(': ') || status.endsWith(', ') ? status = status + `${orientNicht}` : status = status + `, ${orientNicht}`) : '';
if (orientPerson !== null) {
  if (orientOrt !== null && orientZeit !== null) {
    if (status.endsWith(': ') || status.endsWith(', ')) {
      status = status + 'orientiert zu Person, Ort und Zeit'
    } else {
      status = status + ', orientiert zu Person, Ort und Zeit'
    }
  } else if (orientOrt !== null) {
    if (status.endsWith(': ') || status.endsWith(', ')) {
      status = status + 'orientiert zu Person und Ort'
    } else {
      status = status + ', orientiert zu Person und Ort'
    }
  } else if (orientZeit !== null) {
    if (status.endsWith(': ') || status.endsWith(', ')) {
      status = status + 'orientiert zu Person und Zeit'
    } else {
      status = status + ', orientiert zu Person und Zeit'
    }
  } else {
    if (status.endsWith(': ') || status.endsWith(', ')) {
      status = status + 'zur Person orientiert'
    } else {
      status = status + ', zur Person orientiert'
    }
  }
} else if (orientOrt !== null) {
  if (orientZeit !== null) {
    if (status.endsWith(': ') || status.endsWith(', ')) {
      status = status + 'orientiert zu Ort und Zeit'
    } else {
      status = status + ', orientiert zu Ort und Zeit'
    }
  } else {
    if (status.endsWith(': ') || status.endsWith(', ')) {
      status = status + 'zum Ort orientiert'
    } else {
      status = status + ', zum Ort orientiert'
    }
  }
} else if (orientZeit !== null) {
  if (status.endsWith(': ') || status.endsWith(', ')) {
    status = status + 'zur Zeit orientiert'
  } else {
    status = status + ', zur Zeit orientiert'
  }
}


meninOpb !== null ? (status.endsWith(': ') || status.endsWith(', ') ? status = status + `${meninOpb}` : status = status + `, ${meninOpb}`) : '';
if (meninNacken !== null || meninLasegue !== null || meninKniekuss !== null || meninSonstig !== '') {
  if (status.endsWith(': ') || status.endsWith(', ')) {
    status = status + 'Meningismuszeichen: '
  } else {
    status = status + ', Meningismuszeichen: '
  }
}
meninNacken !== null ? (status.endsWith(': ') || status.endsWith(', ') ? status = status + `${meninNacken}` : status = status + `, ${meninNacken}`) : '';
meninLasegue !== null ? (status.endsWith(': ') || status.endsWith(', ') ? status = status + `${meninLasegue}` : status = status + `, ${meninLasegue}`) : '';
meninKniekuss !== null ? (status.endsWith(': ') || status.endsWith(', ') ? status = status + `${meninKniekuss}` : status = status + `, ${meninKniekuss}`) : '';
meninSonstig !== '' ? (status.endsWith(': ') || status.endsWith(', ') ? status = status + `${meninSonstig}` : status = status + `, ${meninSonstig}`) : '';


tonus !== null ? (status.endsWith(': ') || status.endsWith(', ') ? status = status + `Muskeltonus ${tonus}` : status = status + `, Muskeltonus ${tonus}`) : '';
tonusLokal !== '' ? (status.endsWith(': ') || status.endsWith(', ') ? status = status + `${tonusLokal}` : status = status + ` ${tonusLokal}`) : '';


if (kraft !== null || kraft !== '') {
  if (kraft === "seitengleich und ohne Defizit") {
    if (status.endsWith(': ') || status.endsWith(', ')) {
      status = status + `grobe Kraft ${kraft}`
    } else {
      status = status + `, grobe Kraft ${kraft}`
    }
  } else if (kraft !== '') {
    if (status.endsWith(': ') || status.endsWith(', ')) {
      status = status + `grobe Kraft ${kraft}`
    } else {
      status = status + `, grobe Kraft ${kraft}`
    }
  }
}


koordOpb !== null ? (status.endsWith(': ') || status.endsWith(', ') ? status = status + `${koordOpb}` : status = status + `, ${koordOpb}`) : '';
koordAtaxie !== null ? (status.endsWith(': ') || status.endsWith(', ') ? status = status + `${koordAtaxie}` : status = status + `, ${koordAtaxie}`) : '';
if (koordFallneigung !== null) {
  if (koordFallneigungR !== null && koordFallneigungL !== null) {
    if (status.endsWith(': ') || status.endsWith(', ')) {
      status = status + 'Fallneigung nach rechts und links'
    } else {
      status = status + ', Fallneigung nach rechts und links'
    }
  } else if (koordFallneigungR !== null) {
    if (status.endsWith(': ') || status.endsWith(', ')) {
      status = status + 'Fallneigung nach rechts'
    } else {
      status = status + ', Fallneigung nach rechts'
    }
  } else if (koordFallneigungL !== null) {
    if (status.endsWith(': ') || status.endsWith(', ')) {
      status = status + 'Fallneigung nach links'
    } else {
      status = status + ', Fallneigung nach links'
    }
  }
}
koordSonstig !== '' ? (status.endsWith(': ') || status.endsWith(', ') ? status = status + `${koordSonstig}` : status = status + `, ${koordSonstig}`) : '';


sensibOpb !== null ? (status.endsWith(': ') || status.endsWith(', ') ? status = status + `${sensibOpb}` : status = status + `, ${sensibOpb}`) : '';
if (sensibParaesth !== null && sensibDysaesth !== null) {
  if (status.endsWith(': ') || status.endsWith(', ')) {
    status = status + 'Par- und Dysästhesie'
  } else {
    status = status + ', Par- und Dysästhesie'
  }
}else if (sensibParaesth !== null) {
  if (status.endsWith(': ') || status.endsWith(', ')) {
    status = status + 'Parästhesie'
  } else {
    status = status + ', Parästhesie'
  }
}else if (sensibDysaesth !== null) {
  if (status.endsWith(': ') || status.endsWith(', ')) {
    status = status + 'Dysästhesie'
  } else {
    status = status + ', Dysästhesie'
  }
}
sensibLokal !== '' ? (status.endsWith(': ') || status.endsWith(', ') ? status = status + `${sensibLokal}` : status = status + ` ${sensibLokal}`) : '';


if (hirnnerven !== null && hirnnerven !== '') {
  if (hirnnerven === "Hirnnerven beobachtend unauffällig") {
    if (status.endsWith(': ') || status.endsWith(', ')) {
      status = status + `${hirnnerven}`
    } else {
      status = status + `, ${hirnnerven}`
    }
  } else {
    if (status.endsWith(': ') || status.endsWith(', ')) {
      status = status + `Hirnnerven: ${hirnnerven}`
    } else if (hirnnerven !== '') {
      status = status + `, Hirnnerven: ${hirnnerven}`
    }
  }
}


mer !== '' ? (status.endsWith(': ') || status.endsWith(', ') ? status = status + `Reflexe: ${mer}` : status = status + `, Reflexe: ${mer}`) : '';
neuroFreitext !== '' ? (status.endsWith(': ') || status.endsWith(', ') ? status = status + `${neuroFreitext}` : status = status + `, ${neuroFreitext}`) : '';

if (neuroOpb !== null || vigilanz !== null || orientOpb !== null || orientAlter !== null || orientNicht !== null || orientPerson !== null || orientOrt !== null || orientZeit !== null || meninOpb !== null ||
meninNacken !== null || meninLasegue !== null || meninKniekuss !== null || meninSonstig !== '' || tonus !== null || tonusLokal !== '' || (kraft !== null && kraft !== '') || koordOpb !== null ||
koordAtaxie !== null || koordFallneigung !== null || koordFallneigungR !== null || koordFallneigungL !== null || koordSonstig !== '' || sensibOpb !== null || sensibParaesth !== null ||
sensibDysaesth !== null || sensibLokal !== '' || (hirnnerven !== null && hirnnerven !== '') || mer !== '' || neuroFreitext !== '') {
status = status + '.'
}

if (zusatz !== '') {
  status += ` ${zusatz}`
}

// Grabbing the story element
document.getElementById("status").innerHTML = status;
