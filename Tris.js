const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    var nums = line.split(' ');
    var primo = parseFloat(nums[0]);
    var secondo = parseFloat(nums[1]);
    var terzo = parseFloat(nums[2]);

    if ((primo*secondo)==terzo) {
        console.log(primo+"*"+secondo+"="+terzo)
        
    } else if (((primo/secondo)==terzo)) {
        console.log(primo+"/"+secondo+"="+terzo)
        
    } else if (((primo+secondo)==terzo)) {
        console.log(primo+"+"+secondo+"="+terzo)
        
    } else if (((primo-secondo)==terzo)) {
        console.log(primo+"-"+secondo+"="+terzo)
        
    } else if ((secondo*terzo)==primo) {
        console.log(primo+"="+secondo+"*"+terzo)
        
    } else if ((secondo/terzo)==primo) {
        console.log(primo+"="+secondo+"/"+terzo)
        
    } else if ((secondo+terzo)==primo) {
        console.log(primo+"="+secondo+"+"+terzo)
        
    } else if ((secondo-terzo)==primo) {
        console.log(primo+"="+secondo+"-"+terzo)
        
    }

    

});