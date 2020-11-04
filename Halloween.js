const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
  
    var stringaSpooky = line;


    
    if( (stringaSpooky == "OCT 31") || (stringaSpooky == "DEC 25"))
    console.log("yup");
    else 
    console.log("nope")
});