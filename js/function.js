function greetings(msg)
{
    console.log(msg)
    console.log("function called");
    console.log(`hello all ${msg}`);
}
greetings("good morning");
console.log("function calling again");
greetings("good evening");
console.log("function calling again");
greetings("good night");