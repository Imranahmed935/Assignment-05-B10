function getInputValue(id){
const inputValue = document.getElementById(id).value;
const inputReceive = parseFloat(inputValue);
return inputReceive;
}

function getTextValue(id){
const textValue = document.getElementById(id).innerText;
const textConvert = parseFloat(textValue);
return textConvert;
}

function getTitleValue(id){
 const titleValue = document.getElementById(id).innerText;
 return titleValue;
}
