
//COME CAZZO DI METTONO PIU LINEE DI INPUT CHE CAZZO DI PROBLEMI HA QUESTOISFJOIDSJFOIJFOIJ

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    var nums1 = line.split(' ');
    var nums2 = line.split(' ');
    var nums3 = line.split(' ');
    var x1 = parseInt(nums1[0]);
    var y1 = parseInt(nums1[1]);
    var x2 = parseInt(nums2[0]);
    var y2 = parseInt(nums2[1]);
    var x3 = parseInt(nums3[0]);
    var y3 = parseInt(nums3[1]);

    

    if (x1 == x2) {
        if (y3 == y2) {
            x4 = x3;
            y4 = y1;
            

        }
        else {
            x4 = x3;
            y4 = y2;
            
            

        }
    }
    else if (x2 == x3) {
        if (y1 == y2) {
            x4 = x1;
            y4 = y3;
           
            

        }
        else {
            x4 = x1;
            y4 = y2;
          
            
        }
    }
    else if (x1 == x3) {
        if (y2 == y3) {
            x4 = x2;
            y4 = y1;
            
           
        }
        else {
            x4 = x2;
            y4 = y3;
          
        }
    }
    console.log(x4+" "+y4);
});



    


/* var line ;
var x4=0;
var y4=0;


while (line = readline()) {
    
    var nums1 = line.split(' ');
    var nums2 = line.split(' ');
    var nums3 = line.split(' ');
    var x1 = parseInt(nums1[0]);
    var y1 = parseInt(nums1[1]);
    var x2 = parseInt(nums2[0]);
    var y2 = parseInt(nums2[1]);
    var x3 = parseInt(nums3[0]);
    var y3 = parseInt(nums3[1]);


    if (x1 == x2) {
        if (y3 == y2) {
            x4 = x3;
            y4 = y1;
           

        }
        else {
            x4 = x3;
            y4 = y2;
            

        }
    }
    else if (x2 == x3) {
        if (y1 == y2) {
            x4 = x1;
            y4 = y3;
            

        }
        else {
            x4 = x1;
            y4 = y2;
            
        }
    }
    else if (x1 == x3) {
        if (y2 == y3) {
            x4 = x2;
            y4 = y1;
           
        }
        else {
            x4 = x2;
            y4 = y3;
            
        }
    }
}
print(x4+""+y4);
*/