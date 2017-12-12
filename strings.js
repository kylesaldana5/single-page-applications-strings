let input = document.getElementById("input")
let button = document.getElementById("button")
let reverse = document.getElementById("rev")
let alpha = document.getElementById("alph")
let pal = document.getElementById("pal")
var testString = "";

button.addEventListener("click", functionevents => validateString())


function validateString() { 
    if (input.value.match([0-9])) {
        alert("No numbers")
    } else {
        reversal();
        alphabits();
        palindrome();   
    }
}


function reversal(testString) {
    testString = input.value;
    let newString = testString.split("").reverse().join("").toString()
    reverse.innerHTML = `${newString} This is your reversal`;


}

function alphabits(testString) {
    testString = input.value;
    let newalpha = testString.split("").sort().join("")
    alpha.innerHTML = `${newalpha} This is your entery alphabetized`

}

function palindrome(testString) {
    testString = input.value;
    if (testString === testString.split("").reverse().join("")){  
        pal.innerHTML = "Your entery is a palindrome";
    } 
    else {
        pal.innerHTML = "Your entery is not a palindrome";
    }

}

