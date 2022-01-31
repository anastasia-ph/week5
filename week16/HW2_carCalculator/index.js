



document.getElementById("carLabels").onchange = () => {
    const labelSelected = document.getElementById("carLabels").value; 
    const Citroen = [[12945,'C1'], [15775,'C3'], [29415,'Grand C4 Spacetourer']];
    const Lexus = [[39850, 'IS'], [56725, 'NX Phev'], [56700, 'GX']];
    const Porsche =[[54998, 'Porsche Panamera'], [44998, 'Porsche Macan'], [56998, 'Porsche Boxter S']];

    const carModels = document.getElementById("carModels");
    carModels.innerHTML = '';
    let values = [];

    if (labelSelected==0){
        carModels.disabled = true;
        return
    }
    else if (labelSelected==1){
        values = [...Citroen];
    }
    else if (labelSelected==2){
        values=[...Lexus];
    }
    else if (labelSelected==3){
        values=[...Porsche]
    }
    carModels.disabled = false;
    for (const value of values){
        let option = document.createElement("option");
        option.value = value[0];
        option.text= value[1];
        carModels.appendChild(option);
    }
}

let costEngine = 0;
document.getElementById("carEngine").onchange = () =>{
    const carEngine = document.getElementById("carEngine").value;
    costEngine = carEngine * 15
    return costEngine;
}


let calcCarOptions =() => {
    let optionsSum = 0;
    let optionsChecked = document.querySelectorAll("input[name=carOptions]:checked");
    for (let option of optionsChecked){
         optionsSum += Number(option.value);
    }
    return optionsSum;
}

let calcFinalSum = (carModel, carAge, carEngine, carOptions) => {
    finalSum = Number(carModel) - Number(carAge) + Number(carEngine) + Number(carOptions)
    return finalSum;
}


document.getElementById("button").onclick = () => {
    
    const carEngine = document.getElementById("carEngine").value;
    const carAge = document.querySelectorAll('input[name=carAge]:checked')[0].value;
    const labelSelected = document.getElementById("carLabels").value; 
    const errorForm = document.getElementById("errorForm"); 
    if (labelSelected==0){
        document.getElementById("finalOutput").innerHTML = ""
        errorForm.innerHTML = "Пожалуйста, выберите марку и модель машины!"
    }
    else if(carEngine==0 && labelSelected!=0){
        document.getElementById("finalOutput").innerHTML = ""
        errorForm.innerHTML = "Пожалуйста, заполните данные об объеме двигателя корректно"
    }
    else {
        errorForm.innerHTML = ""
        const carModel = document.getElementById("carModels").value;
        
        finalSum = calcFinalSum (carModel, carAge, costEngine, calcCarOptions());
        document.getElementById("finalOutput").innerHTML = `Итоговая сумма: ${finalSum}$`
    }

    // else if(
    //     carEngine==0
    // )
}