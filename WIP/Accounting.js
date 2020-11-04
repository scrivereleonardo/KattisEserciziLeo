var line = readline()
var nums1 = line.split(' ');
var numeroPersone = parseInt(nums1[0]);
var numeroComandi = parseInt(nums1[1]);


function costruttorePersone(valorePersona) {
    return obj = {
        valore: valorePersona,
        needToChange: false
    }
}
var listaPersone = []; ///Lista di tutte le persone
var idSettati = []; //lista di tutti gli ID delle persone che hanno ricevuto un SET
var iteratoreIdSettati = 0;




var line2 = [];

// function assegnaATuttiValore(array, valore) {
//     for (let index = 0; index < numeroPersone+1; index++) {
//         array[index] = valore;

//     }
// }

var checkRESTART = 0;
var checkRESTARTPrecedente;
var setDaResettare = false;
//assegnaATuttiValore(listaPersone, 0);

for (let index = 0; index < numeroComandi; index++) {
    line2[index] = readline()

    if (line2[index].includes("SET")) {
        comandiSET = line2[index].split(" ")
        var parteStringaSET = comandiSET[0];
        var idNumericoPersona = parseInt(comandiSET[1]);
        var valoreKronersPersona = parseInt(comandiSET[2])

        listaPersone[idNumericoPersona] = costruttorePersone(valoreKronersPersona);
        idSettati[iteratoreIdSettati]=idNumericoPersona //aggiunge la posizione nell array della persona
        iteratoreIdSettati++;

    } else if (line2[index].includes("PRINT")) {
        comandiPRINT = line2[index].split(" ")
        var parteStringaPRINT = comandiPRINT[0];
        var idPersonaStampata = parseInt(comandiPRINT[1]);
        // if ((listaPersone[idPersonaStampata] == null) || (listaPersone[idPersonaStampata] == checkRESTARTPrecedente)) { ///Una persona mai stata toccata
        //     listaPersone[idPersonaStampata] = checkRESTART;
        // }
        if (listaPersone[idPersonaStampata] === null) { 
            listaPersone[idPersonaStampata] = costruttorePersone(checkRESTART);
        }
        console.log(listaPersone[idPersonaStampata].valore)
        console.log(index)
        if ((listaPersone[idPersonaStampata].valore == checkRESTARTPrecedente) || listaPersone[idPersonaStampata].needToChange) {
            listaPersone[idPersonaStampata].valore=checkRESTART;
        }
        console.log(listaPersone[idPersonaStampata].valore);
    } else if (line2[index].includes("RESTART")) {
        comandiRESTART = line2[index].split(" ")
        var parteStringaRESTART = comandiRESTART[0];
        var valoreKronersTutti = parseInt(comandiRESTART[1]);
        checkRESTARTPrecedente = checkRESTART;
        checkRESTART = valoreKronersTutti;
       for (let index = 0; index <iteratoreIdSettati; index++) {
            listaPersone[idSettati[index]].needToChange=true;
           
       }
       
        // assegnaATuttiValore(listaPersone, valoreKronersTutti);

    }


}
