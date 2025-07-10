const input = document.getElementById("number-input");
const result = document.getElementById("result")
function handleclichButton(el){
    console.log(el.innerText);
    const exp = `${input.value}${el.innerText}`;
    input.value = exp;
    if(["+","-","*","/","."].includes(el.innerText)) return;
    result.value = eval(exp);
}
function clearResult(){
    input.value = "";
    result.value = "";
}