function calculate(num1, num2, ope) {
    console.log("called function");
    let s;
    if (ope == "+") {
        s = num1 + num2;
        console.log(s)
    }
    else if (ope == "-") {
        s = num1 - num2;
        console.log(s)
    }
    else if (ope == "*") {
        s = num1 * num2;
        console.log(s)
    }
    else if (ope == "/") {
        s = num1 / num2;
        console.log(s)
    }
    return s;
}
 let output = calculate(203, 54, "+");
 console.log(output)
  calculate(234, 23, "-");
 calculate(2334, 223, "*");

calculate(200, 100, "/");
