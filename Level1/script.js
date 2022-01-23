console.log("Hello");

let inputValue = document.querySelector("#number");
let displayOut = document.querySelector("#output");

inputValue.addEventListener("input", function counter(){
    let counter = inputValue.value.length;
    displayOut.innerText = counter;
});

