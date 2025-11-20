let length;
let width;

let grocery2;
let grocery1;
let grocery3;

function calculateArea(){
    length = parseFloat(document.getElementById("length").value);
    width = parseFloat(document.getElementById("width").value);

    let area = length * width;

    document.getElementById("result").innerText = `the area of the rec is: ${area}`;
     
}

function grocerytotal(){
    grocery1 = parseFloat(document.getElementById("grocery1").value);
    grocery2 = parseFloat(document.getElementById("grocery2").value);
    grocery3 = parseFloat(document.getElementById("grocery3").value);

    let total = grocery1 + grocery2 + grocery3;

    document.getElementById("result2").innerText = `total amount for groceries is: ${total}`;
}