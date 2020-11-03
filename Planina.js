var line;

while (line = readline()) {
    var nums = line.split(' ');
    var a = parseInt(nums[0]);

    /*Solve the test case and output the answer*/

    var b = Math.pow(2, a) + 1;

    print(b*b);


}