/*
 * Programming Quiz: Laugh (5-4)
 */

var laugh = function(num){
    var a = "";
    for(var i = 1; i <= num; i++){
        a += "ha";
    }
    a +="!";
    return a;
}

console.log(laugh(3));
