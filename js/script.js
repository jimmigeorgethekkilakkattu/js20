alert("external java script file addition")
let i = 123; let j = "123";
if (i === j) {
    console.log("i and j are equal");
    console.log(i + j);
}else if(typeof j=="string"){
    let s=parseInt(j);
    console.log(typeof s);
}
else if(typeof i== "number")
{
    console.log(i*3);
}
else{
    console.log("after conversion");
    let sum= parseInt(j)+i;
    console.log(sum);
}
console.log("after if else  block");