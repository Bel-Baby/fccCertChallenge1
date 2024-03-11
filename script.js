//Declare key doc variables
const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");


/*function palindrome (str) {
    str = textInput.value;
    const toLowerCaseAndReplaceRegex = str.toLowerCase().replace(/\W|_/g,"")
    function reverse(x){
        return x.split("").reverse().join("");
    }

    const str1 = reverse(toLowerCaseAndReplaceRegex);
    const str2 = reverse(str1);
    if(str1 == str2){
        result.innerText = `${str} is palindrome`;
        result.style.display = "block";
    }else{
        result.innerText = `${str} is not palindrome`;
        result.style.display = "block";
    }
}

checkBtn.addEventListener("click",palindrome);*/


/*function reverse(content){
    return content.split("").reverse().join("");
}

function palindrome (str) {
    str = textInput.value;
    const toLowerCaseAndReplaceRegex = str.toLowerCase().replace(/\W|_/g,"")
    const str1 = reverse(toLowerCaseAndReplaceRegex);
    const str2 = reverse(str1);
    if(str == ""){
        alert("Please input a value");
    }else{
        const palindrome = str1 == str2 ? "is palindrome" : "is not palindrome";
        result.innerText = `${str} ${palindrome}`;
        result.style.display = "block";
    }
    //textInput.value = "";
}

checkBtn.addEventListener("click",palindrome);*/



//Passed with this piss of code.
function checkPalindrome(){
    const inputText = textInput.value.trim();//Trim leading spaces
    const processedInput = inputText.replace(/\W|_/g, "").toLowerCase();//Replace underscore with empty string and convert to lower case
    const palindrome = processedInput.split("").reverse().join("");

    if(inputText === ""){
        alert("Please input a value");
    }else if(processedInput === palindrome){
        result.textContent = `${inputText} is a palindrome`;
        result.style.display = "block";
    }else{
        result.textContent = `${inputText} is not a palindrome`;
        result.style.display = "block";
    }
}

checkBtn.addEventListener("click",checkPalindrome);