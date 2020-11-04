///CHE PROBLEMI HA QUESTOOOOOOOOOOOOOOOOOO , VA TUTTO BENE 

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    var nums = line.split(' ');
    var numero = parseInt(nums[0]);

    /*Solve the test case and output the answer*/


    var binario = numero.toString(2);



    function reverse(stringaGirata) {
        var array = [];
        var arrayApp = [];
        var j = 0;
        array = stringaGirata.split("");
        for (let index = array.length - 1; index >= 0; index--) {
            arrayApp[j] = array[index];
            j++;

        }
        return arrayApp.join("");
    }

    binarioInvertito = reverse(binario);
   
    var risultato = parseInt(binarioInvertito, 2);


    console.log(binario);
    console.log(binarioInvertito);
    console.log(risultato);





});





    // var line;

    // var numero = parseInt(line);

    // var binario = numero.toString(2);


    // function reverse(stringaGirata) {
    //     return stringaGirata.split("").reverse().join("");
    // }
    // var binarioInvertito = reverse(binario);
    // var risultato = parseInt(binarioInvertito, 2);


    // console.log(binario);
    // console.log(binarioInvertito);
    // console.log(risultato);

