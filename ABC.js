const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var line = readline()
//var nums1 = [6,4,2];
var nums1 = line.split(' ');

var line2 = readline()
var ordine = line2;
//var ordine="CAB"


var arrayOrdine = ordine.split("");


nums1.sort(function (a, b) {
    return a - b;
});

var appoggio = "";

for (let index = 0; index < arrayOrdine.length; index++) {
    if (arrayOrdine[index] == "A") {

        appoggio = appoggio + nums1[0];

    } else if (arrayOrdine[index] == "B") {

        appoggio = appoggio + nums1[1];

    } else if (arrayOrdine[index] == "C") {

        appoggio = appoggio + nums1[2];

    }

    appoggio = appoggio + " ";

}

print(appoggio)