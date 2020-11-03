var line;
while (line = readline()) {
    var nums = line.split(' ');
    var n = parseInt(nums[0]);
    var h = parseInt(nums[1]);
    var v = parseInt(nums[2]);

    valore1= Math.max(h, n-h);
    valore2= Math.max(v, n-v);
    ris= (valore1 * valore2)*4;

    print(ris);
}
