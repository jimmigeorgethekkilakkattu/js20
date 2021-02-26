alert("largest element and switch example")
let a=100; b=200;c=20;
//conditional statement
if (a>b&&a>c){
    console.log(a,"is the largest element");
}
else if(b>c)
{
    console.log(b,"is the largest element");
}
else{
    console.log(c,"is the largest element");
}
//conditional switch
console.log("switch example");
let choice="+";
switch(choice){
    case "+":
    {
        console.log(a+b);
        break;
    }
    case "-":
        {
            console.log(a-b);
            break;
        }
        default:
            {
                console.log("invalid operation.....")
            }
}