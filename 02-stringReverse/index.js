const str = "JavaScript is awesome"

function reverseAString(str) {
    // write your solution here
if(str.length>0){
    return Array.from(str).reverse().join().replaceAll(",","");
}
    return str;
}

console.log(`Reversed string is: ${reverseAString(str)}`)
