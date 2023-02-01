function start() {
var buttonCalculateImc = document.querySelector('#button-calculate-imc');
buttonCalculateImc.addEventListener('click',handleButtonClick);
}
function calculateImc(weight, height){
return weight/ (height * height)
}

function handleButtonClick(){
    var inputWeight = document.querySelector('#input-weight');
    var inputHight = document.querySelector('#input-hight');
   var imcResult = document.querySelector('#imc-result');
    var weight = inputWeight.value;
    var hight = inputHight.value;
    
    var imc = calculateImc(weight, hight);
    var formattedImc = imc.toFixed(2);
    imcResult.textContent = formattedImc;
}

start ();