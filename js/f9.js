//string function
let s="123"
let i=100;
let j=i.toString();
console.log(j,typeof j);
let data1=String("hello");
console.log(data1,typeof data1);
let data2=Number(111);
console.log(data2,typeof data2);
let s1="hello world"
console.log(s1)
console.log(typeof s1);
let s2= new String("hello world");
console.log(s2)
console.log(typeof s2)
console.log(s2.length);
let s3=s2.toUpperCase()
console.log(s3);
console.log(s1.startsWith("h"))
console.log(s1.endsWith("d"))
console.log(s1.indexOf("o"))
console.log(s1.lastIndexOf("o"))
let  s4= " hello all";
console.log(s4);
console.log(s4.trim());
console.log(s4.concat(" how are you"))
console.log(s4.substr(2,5));
console.log(s4.substring(2,5));
console.log(s4.charAt(4));
console.log(s4.charCodeAt(4));
for(letter of s4){
    console.log(letter);
}