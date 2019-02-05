/*
 * Programming Quiz: JuliaJames (4-1)
 */

var x = 1;

while (x<=20) {
    if(x % 3 === 0)
    {
        console.log("Julia");
    }
    else if(x % 5 === 0){
        console.log("James");
    }
    else if(x % 3 === 0 && x % 5 === 0){
        console.log("JuliaJames");
    }
    else{
        console.log(x);
    }
    x++;
    // check divisibility
    // print Julia, James, or JuliaJames
    // increment x
}
