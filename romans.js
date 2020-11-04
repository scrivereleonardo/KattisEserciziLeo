const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    var nums = line.split(' ');
    var numero = parseFloat(nums[0]);


    
    risposta = Math.round(numero * 1000 * 5280 / 4854);
    console.log(risposta);
});