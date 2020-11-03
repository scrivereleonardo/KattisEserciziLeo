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
   
   

    function reverse(stringaGirata){
        return stringaGirata.split("").reverse().join("");
    }
    binarioInvertito = reverse(binario);
    binarioInvertito = Number(binarioInvertito);
    var risultato = parseInt(binarioInvertito, 2);
    

    console.log(binario);
    console.log(binarioInvertito);
    console.log(risultato);





});