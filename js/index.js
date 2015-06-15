$(document).ready(function() {
    return $("#fullpage").fullpage({
        css3: !0,
        slidesNavigation: !0,
        menu: "#menu",
        anchors: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        continuousVertical: !0,
        responsiveHeight: 850,
        responsiveWidth: 1200
    })
});
var UvCQuarte, UvCQuinte, UvCSeconde, UvCSeptieme, UvCSixte, UvCTierce, audio, body, btnGenerateur, btnJouer, calculFrequenceEnNote, div, e, frequenceAccord, frequenceQuarte, frequenceQuinte, frequenceSeconde, frequenceSeptieme, frequenceSixte, frequenceTierce, frequenceTonal, frequenceTonalOctave, fullPageDiv, generateur, generateurAccord, getRandomInt, getURLParameter, i, j, k, l, limite, menuDiv, n, nombreDePage, noteAccordEn, noteAccordFr, noteAnglais, noteFrancais, noteHz, noteQuarteEn, noteQuarteFr, noteQuinteEn, noteQuinteFr, noteSecondeEn, noteSecondeFr, noteSeptiemeEn, noteSeptiemeFr, noteSixteEn, noteSixteFr, noteTierceEn, noteTierceFr, noteTonalEn, noteTonalFr, noteUvCQuarteEn, noteUvCQuarteFr, noteUvCQuinteEn, noteUvCQuinteFr, noteUvCSecondeEn, noteUvCSecondeFr, noteUvCSeptiemeEn, noteUvCSeptiemeFr, noteUvCSixteEn, noteUvCSixteFr, noteUvCTierceEn, noteUvCTierceFr, o, p, page, play, q, ref, ref1, ref2, s, t, tempo, tempoMs, tempoS, u, v;
for (getURLParameter = function(e) {
        var n, t, o, r, i, c;
        for (r = decodeURIComponent(window.location.search.substring(1)), c = r.split("&"), i = void 0, n = t = 0, o = c.length; o >= 0 ? o > t : t > o; n = o >= 0 ? ++t : --t)
            if (i = c[n].split("="), i[0] === e) return void 0 === i[1] ? !0 : i[1]
    }, calculFrequenceEnNote = function(hz, mode) {
        var diff, diff_hz, herz, j, n;
        if (null == mode && (mode = "fr"), hz >= 55 && 4186 >= hz) {
            for (herz = eval(Math.round(hz)), j = 0; noteHz[j] <= herz;) j++;
            if (n = j - 1, diff = (noteHz[j] - noteHz[n]) / 2, diff_hz = noteHz[j] - herz, "fr" === mode) return diff >= diff_hz ? noteFrancais[j] : diff_hz > diff ? noteFrancais[n] : !1;
            if ("en" === mode) return diff >= diff_hz ? noteAnglais[j] : diff_hz > diff ? noteAnglais[n] : !1
        }
    }, getRandomInt = function(e, n) {
        return Math.floor(Math.random() * (n - e + 1)) + e
    }, play = function(note, tempo) {
        var e, n;
        return n = "audio" + note + ".play();", e = eval(n), setTimeout(function() {
            var m, r;
            return m = "audio" + note + ".load();", r = eval(m)
        }, tempo)
    }, generateurAccord = function(e) {
        return 4 >= e ? 1 : 7 >= e ? 4 : 10 >= e ? 5 : 13 >= e ? 6 : 15 >= e ? 2 : 17 >= e ? 3 : 18 >= e ? 7 : void 0
    }, generateur = function() {
        var e, n, t, o;
        return e = generateurAccord(getRandomInt(1, 17)), n = generateurAccord(getRandomInt(1, 17)), t = generateurAccord(getRandomInt(1, 17)), o = generateurAccord(getRandomInt(1, 17)), $("#accord1").html(e), $("#accord2").html(n), $("#accord3").html(t), $("#accord4").html(o), [null, e, n, t, o]
    }, noteHz = [55, 58, 62, 65, 69, 73, 78, 82, 87, 92, 98, 104, 110, 117, 123, 131, 139, 147, 156, 165, 175, 185, 196, 208, 220, 233, 247, 262, 277, 294, 311, 330, 349, 370, 392, 415, 440, 466, 494, 523, 554, 587, 622, 659, 698, 740, 784, 831, 880, 932, 988, 1046, 1109, 1175, 1245, 1319, 1397, 1480, 1568, 1661, 1760, 1865, 1976, 2093, 2217, 2349, 2489, 2637, 2794, 2960, 3136, 3322, 3520, 3729, 3951, 4186], noteFrancais = ["LA", "LA#", "SI", "DO", "DO#", "RE", "RE#", "MI", "FA", "FA#", "SOL", "SOL#", "LA", "LA#", "SI", "DO", "DO#", "RE", "RE#", "MI", "FA", "FA#", "SOL", "SOL#", "LA", "LA#", "SI", "DO", "DO#", "RE", "RE#", "MI", "FA", "FA#", "SOL", "SOL#", "LA", "LA#", "SI", "DO", "DO#", "RE", "RE#", "MI", "FA", "FA#", "SOL", "SOL#", "LA", "LA#", "SI", "DO", "DO#", "RE", "RE#", "MI", "FA", "FA#", "SOL", "SOL#", "LA", "LA#", "SI", "DO", "DO#", "RE", "RE#", "MI", "FA", "FA#", "SOL", "SOL#", "LA", "LA#", "SI", "DO"], noteAnglais = ["A1", "Bb1", "B1", "C2", "Db2", "D2", "Eb2", "E2", "F2", "Gb2", "G2", "Ab2", "A2", "Bb2", "B2", "C3", "Db3", "D3", "Eb3", "E3", "F3", "Gb3", "G3", "Ab3", "A3", "Bb3", "B3", "C4", "Db4", "D4", "Eb4", "E4", "F4", "Gb4", "G4", "Ab4", "A4", "Bb4", "B4", "C5", "Db5", "D5", "Eb5", "E5", "F5", "Gb5", "G5", "Ab5", "A5", "Bb5", "B5", "C6", "Db6", "D6", "Eb6", "E6", "F6", "Gb6", "G6", "Ab6", "A6", "Bb6", "B6", "C7", "Db7", "D7", "Eb7", "E7", "F7", "Gb7", "G7", "Ab7", "A7", "Bb7", "B7", "C8"], audio = ["A2", "A3", "A4", "Bb2", "Bb3", "Bb4", "B2", "B3", "B4", "C2", "C3", "C4", "Db2", "Db3", "Db4", "D2", "D3", "D4", "Eb2", "Eb3", "Eb4", "E2", "E3", "E4", "F2", "F3", "F4", "Gb2", "Gb3", "Gb4", "G2", "G3", "G4", "Ab2", "Ab3", "Ab4"], i = k = 0, ref = audio.length - 1; ref >= 0 ? ref >= k : k >= ref; i = ref >= 0 ? ++k : --k) n = "audio" + audio[i] + " = new Audio('audio/" + audio[i] + ".ogg');", e = eval(n);
for (frequenceTonal = getURLParameter("frequencetonal"), tempo = getURLParameter("tempo"), void 0 === frequenceTonal && (frequenceTonal = 130), void 0 === tempo && (tempo = 30), frequenceTonalOctave = 2 * frequenceTonal, noteTonalFr = calculFrequenceEnNote(frequenceTonal, "fr"), noteTonalEn = calculFrequenceEnNote(frequenceTonal, "en"), tempoS = 60 / tempo, tempoMs = 1e3 * tempoS, frequenceSeconde = frequenceTonal * Math.pow(1.06, 2), frequenceTierce = frequenceTonal * Math.pow(1.06, 4), frequenceQuarte = frequenceTonal * Math.pow(1.06, 5), frequenceQuinte = frequenceTonal * Math.pow(1.06, 7), frequenceSixte = frequenceTonal * Math.pow(1.06, 9), frequenceSeptieme = frequenceTonal * Math.pow(1.06, 11), limite = frequenceQuinte, frequenceSeconde > limite && (frequenceSeconde /= 2), frequenceTierce > limite && (frequenceTierce /= 2), frequenceQuarte > limite && (frequenceQuarte /= 2), frequenceQuinte > limite && (frequenceQuinte /= 2), frequenceSixte > limite && (frequenceSixte /= 2), frequenceSeptieme > limite && (frequenceSeptieme /= 2), noteSecondeFr = calculFrequenceEnNote(frequenceSeconde, "fr"), noteTierceFr = calculFrequenceEnNote(frequenceTierce, "fr"), noteQuarteFr = calculFrequenceEnNote(frequenceQuarte, "fr"), noteQuinteFr = calculFrequenceEnNote(frequenceQuinte, "fr"), noteSixteFr = calculFrequenceEnNote(frequenceSixte, "fr"), noteSeptiemeFr = calculFrequenceEnNote(frequenceSeptieme, "fr"), noteSecondeEn = calculFrequenceEnNote(frequenceSeconde, "en"), noteTierceEn = calculFrequenceEnNote(frequenceTierce, "en"), noteQuarteEn = calculFrequenceEnNote(frequenceQuarte, "en"), noteQuinteEn = calculFrequenceEnNote(frequenceQuinte, "en"), noteSixteEn = calculFrequenceEnNote(frequenceSixte, "en"), noteSeptiemeEn = calculFrequenceEnNote(frequenceSeptieme, "en"), UvCSeconde = 1.5 * frequenceSeconde, UvCTierce = 1.5 * frequenceTierce, UvCQuarte = 1.5 * frequenceQuarte, UvCQuinte = 1.5 * frequenceQuinte, UvCSixte = 1.5 * frequenceSixte, UvCSeptieme = 1.5 * frequenceSeptieme, UvCSeconde > limite && (UvCSeconde /= 2), UvCTierce > limite && (UvCTierce /= 2), UvCQuarte > limite && (UvCQuarte /= 2), UvCQuinte > limite && (UvCQuinte /= 2), UvCSixte > limite && (UvCSixte /= 2), UvCSeptieme > limite && (UvCSeptieme /= 2), noteUvCSecondeFr = calculFrequenceEnNote(UvCSeconde, "fr"), noteUvCTierceFr = calculFrequenceEnNote(UvCTierce, "fr"), noteUvCQuarteFr = calculFrequenceEnNote(UvCQuarte, "fr"), noteUvCQuinteFr = calculFrequenceEnNote(UvCQuinte, "fr"), noteUvCSixteFr = calculFrequenceEnNote(UvCSixte, "fr"), noteUvCSeptiemeFr = calculFrequenceEnNote(UvCSeptieme, "fr"), noteUvCSecondeEn = calculFrequenceEnNote(UvCSeconde, "en"), noteUvCTierceEn = calculFrequenceEnNote(UvCTierce, "en"), noteUvCQuarteEn = calculFrequenceEnNote(UvCQuarte, "en"), noteUvCQuinteEn = calculFrequenceEnNote(UvCQuinte, "en"), noteUvCSixteEn = calculFrequenceEnNote(UvCSixte, "en"), noteUvCSeptiemeEn = calculFrequenceEnNote(UvCSeptieme, "en"), frequenceAccord = [
        [],
        [null, frequenceTonal, frequenceTierce, frequenceQuinte],
        [null, frequenceSeconde, frequenceQuarte, UvCSeconde],
        [null, frequenceTierce, frequenceQuinte, UvCTierce],
        [null, frequenceQuarte, frequenceSixte, UvCQuarte],
        [null, frequenceQuinte, frequenceSeptieme, UvCQuinte],
        [null, frequenceSixte, frequenceTonal, UvCSixte],
        [null, frequenceSeptieme, frequenceSeconde, frequenceQuarte]
    ], noteAccordFr = [
        [],
        [null, noteTonalFr, noteTierceFr, noteQuinteFr],
        [null, noteSecondeFr, noteQuarteFr, noteUvCSecondeFr],
        [null, noteTierceFr, noteQuinteFr, noteUvCTierceFr],
        [null, noteQuarteFr, noteSixteFr, noteUvCQuarteFr],
        [null, noteQuinteFr, noteSeptiemeFr, noteUvCQuinteFr],
        [null, noteSixteFr, noteTonalFr, noteUvCSixteFr],
        [null, noteSeptiemeFr, noteSecondeFr, noteQuarteFr]
    ], noteAccordEn = [
        [],
        [null, noteTonalEn, noteTierceEn, noteQuinteEn],
        [null, noteSecondeEn, noteQuarteEn, noteUvCSecondeEn],
        [null, noteTierceEn, noteQuinteEn, noteUvCTierceEn],
        [null, noteQuarteEn, noteSixteEn, noteUvCQuarteEn],
        [null, noteQuinteEn, noteSeptiemeEn, noteUvCQuinteEn],
        [null, noteSixteEn, noteTonalEn, noteUvCSixteEn],
        [null, noteSeptiemeEn, noteSecondeEn, noteQuarteEn]
    ], nombreDePage = 10, body = $("body"), body.append("<ul id='menu'></ul> <div id='fullpage'></div>"), menuDiv = $("#menu"), i = l = 1, ref1 = nombreDePage; ref1 >= 1 ? ref1 >= l : l >= ref1; i = ref1 >= 1 ? ++l : --l) menuDiv.append("<li data-menuanchor='" + i + "'><a href='#" + i + "'>" + i + "</a></li>");
for (fullPageDiv = $("#fullpage"), i = o = 1, ref2 = nombreDePage; ref2 >= 1 ? ref2 >= o : o >= ref2; i = ref2 >= 1 ? ++o : --o) fullPageDiv.append("<div class='section' id='page" + i + "'></div>");
for (page = 1, div = $("#page" + page), div.append("<h1>TPE SSI 1°8</h1> <div>Algorithme créé par Alexandre.H et aidé par Vincent.S</div>"), page += 1, div = $("#page" + page), div.append("<div>Modifiez ici ou dans l'URL les differentes variables</div> <form action='index.html' method='GET'> <label>Entrez le tempo ici :</label> <input type='number' name='tempo' value='" + tempo + "' autocomplete='off'/> <label>Entrez la fréquence de la tonale ici :</label> <input type='number' name='frequencetonal' value='" + frequenceTonal + "' autocomplete='off'/> <button>Clique ici pour valider</button> </form>"), page += 1, div = $("#page" + page), div.append("<h2>Fréquences :</h2> <div>Tonal = " + Math.round(frequenceTonal) + "</div> <div>Seconde = " + Math.round(frequenceSeconde) + "</div> <div>Tierce = " + Math.round(frequenceTierce) + "</div> <div>Quarte = " + Math.round(frequenceQuarte) + "</div> <div>Quinte = " + Math.round(frequenceQuinte) + "</div> <div>Sixte = " + Math.round(frequenceSixte) + "</div> <div>Septieme = " + Math.round(frequenceSeptieme) + "</div>"), page += 1, div = $("#page" + page), div.append("<h2>Notes (notation française)</h2> <div>Tonal = " + noteTonalFr + "</div> <div>Seconde = " + noteSecondeFr + "</div> <div>Tierce = " + noteTierceFr + "</div> <div>Quarte = " + noteQuarteFr + "</div> <div>Quinte = " + noteQuinteFr + "</div> <div>Sixte = " + noteSixteFr + "</div> <div>Septieme = " + noteSeptiemeFr + "</div>"), page += 1, div = $("#page" + page), div.append("<h2>Notes (notation anglaise)</h2> <div>Tonal = " + noteTonalEn + "</div> <div>Seconde = " + noteSecondeEn + "</div> <div>Tierce = " + noteTierceEn + "</div> <div>Quarte = " + noteQuarteEn + "</div> <div>Quinte = " + noteQuinteEn + "</div> <div>Sixte = " + noteSixteEn + "</div> <div>Septieme = " + noteSeptiemeEn + "</div>"), page += 1, div = $("#page" + page), i = p = 1; 7 >= p; i = ++p)
    for (div.append("<div class='slide' id='page" + page + "-" + i + "'></div>"), div = $("#page" + page + "-" + i), div.append("<h2>Fréquence des notes des accords</h2>"), div.append("<div>Accord numéro " + i + " :</div>"), j = q = 1; 3 >= q; j = ++q) div.append("<div>" + Math.round(frequenceAccord[i][j]) + "</div>");
for (page += 1, div = $("#page" + page), i = s = 1; 7 >= s; i = ++s)
    for (div.append("<div class='slide' id='page" + page + "-" + i + "'></div>"), div = $("#page" + page + "-" + i), div.append("<h2>Notation française des notes des accords</h2>"), div.append("<div>Accord numéro " + i + " :</div>"), j = t = 1; 3 >= t; j = ++t) div.append("<div>" + noteAccordFr[i][j] + "</div>");
for (page += 1, div = $("#page" + page), i = u = 1; 7 >= u; i = ++u)
    for (div.append("<div class='slide' id='page" + page + "-" + i + "'></div>"), div = $("#page" + page + "-" + i), div.append("<h2>Notation anglaise des notes des accords</h2>"), div.append("<div>Accord numéro " + i + " :</div>"), j = v = 1; 3 >= v; j = ++v) div.append("<div>" + noteAccordEn[i][j] + "<div>");
page += 1, div = $("#page" + page), div.append("<button id='btnGenerateur'>Clique ici pour generer un accord</button> <button id='btnJouer'>Clique ici pour jouer les accords</button> <div>Les accords sont : <div id='accord1'>*</div> <div id='accord2'>*</div> <div id='accord3'>*</div> <div id='accord4'>*</div> </div>"), page += 1, div = $("#page" + page), div.append("<h2>Tempo</h2> <div>Tempo = " + tempo + " bat/min</div> <div>Ou : 1 note/ " + Math.round(1e3 * tempoS) / 1e3 + " seconde" + (tempoS >= 2 ? "s" : "") + "</div>"), btnGenerateur = $("#btnGenerateur"), btnJouer = $("#btnJouer"), btnGenerateur.on("click", function() {
    return generateur()
}), btnJouer.on("click", function() {
    var e, n, t, o;
    return e = $("#accord1").html(), n = $("#accord2").html(), t = $("#accord3").html(), o = $("#accord4").html(), "*" !== e ? setTimeout(function() {
        return play(noteAccordEn[e][1], tempoMs), play(noteAccordEn[e][2], tempoMs), play(noteAccordEn[e][3], tempoMs), setTimeout(function() {
            return play(noteAccordEn[n][1], tempoMs), play(noteAccordEn[n][2], tempoMs), play(noteAccordEn[n][3], tempoMs), setTimeout(function() {
                return play(noteAccordEn[t][1], tempoMs), play(noteAccordEn[t][2], tempoMs), play(noteAccordEn[t][3], tempoMs), setTimeout(function() {
                    return play(noteAccordEn[o][1], tempoMs), play(noteAccordEn[o][2], tempoMs), play(noteAccordEn[o][3], tempoMs)
                }, tempoMs)
            }, tempoMs)
        }, tempoMs)
    }, 0) : void 0
});