function parseAndFormatName () {
    let inputName = document.getElementById("inputName").value;
    let formattedInput = []
    inputName = inputName.split(" ")
    if (inputName){
        for (val of inputName){
            formattedInput.push(formatUserInput(val));
        }
    }
    outputName(formattedInput);
}

function formatUserInput (string){
    string = string.trim();
    string = string.toLowerCase();
    string = string[0].toUpperCase() + string.slice(1); 
    return string;
}
function outputName(array) {
    document.getElementById("inputResult").innerHTML = `Фамилия: ${array[0]}, имя: ${array[1]}, отчество: ${array[2]}`
}
