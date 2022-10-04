function Sum(){
    
    console.log("Calculating");
    let num1 = Number(prompt("Enter num1:"));
    let num2 = Number(prompt("Enter num2:"));
    sum(num1,num2);   
}
function Multiply(){
    
    console.log("Calculating");
    let num1 = Number(prompt("Enter num1:"));
    let num2 = Number(prompt("Enter num2:"));
    mult(num1,num2);   
}
function Divide(){
    
    console.log("Calculating");
    let num1 = Number(prompt("Enter num1:"));
    let num2 = Number(prompt("Enter num2:"));
    div(num1,num2);   
}
function Subtract(){
    
    console.log("Calculating");
    let num1 = Number(prompt("Enter num1:"));
    let num2 = Number(prompt("Enter num2:"));
    sub(num1,num2);   
}

function sum(a,b){
    let total = a + b;
    document.getElementById("sumRes").innerHTML= `<p> ${a} + ${b} = ${total}</p>`;
}
function mult(a,b){
    let total = a * b;
    document.getElementByID("mulRes").innerHTML=`<P> ${a} + ${b} = ${total}</p>`;
}
function div(a,b){
    let total = a / b;
    document.getElementById("divRes").innerHTML=`<p> ${a} + ${b} = ${total}</p>`;
}
function sub(a,b){
    let total = a - b;
    document.getElementByID("subRes").innerHTML=`<p> ${a} + ${b} = ${total}</p>`;
}