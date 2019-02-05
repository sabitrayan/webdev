/*
 * Programming Quiz: Build A Triangle (5-3)
 */

// creates a line of * for a given length
function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.


// test your code by uncommenting the following line
//console.log(buildTriangle(10));

function buildTriangle(height){
    var ans = "";
    for(var i = 1; i <= height; i++){
        ans += makeLine(i);
    }
    return ans;
    
}

console.log(buildTriangle(10));