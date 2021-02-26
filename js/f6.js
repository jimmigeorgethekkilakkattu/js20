//anonymous function
let add = function (x, y) {
    return x + y;
}
console.log(add);
let result = add(1, 2);
console.log(result);
//function nesting
let i = 500;
function outer() {
    let i = 111;
    let k="hello";
    console.log("inside the outer function...");
    console.log(i);
    function inner() {
        let j = 222;
        console.log(k);
        console.log("inside the inner function...");
        console.log(j);
    }
    inner();
}
outer();
console.log(i)
