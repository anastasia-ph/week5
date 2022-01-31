

let sumInput = () => {
    
    let sortedPlaceholder = document.getElementById("sortedPlaceholder")
    let sumPlaceholder = document.getElementById("sumPlaceholder")
    let numbers = [];
    let sum = 0;

for (;;){
    let value = +prompt("Введите число", '');
    if (!value) break
    extractValue(value);
    sum = inputSum(value);
    
    
    }
    numbers = BubbleSort(numbers);
    sortedPlaceholder.innerHTML = '['+numbers+']';
    sumPlaceholder.innerHTML = sum;


function inputSum(Value){
    sum += Value;
    return sum;
}
function extractValue(Value){
    numbers.push(Value)
}    


function BubbleSort(Mass){  
    let n = Mass.length;
    for (let i = 0; i < (n-1); i++){
        for (let j = 0; j < (n-1-i); j++){
                if (Mass[j+1] < Mass[j]){
                        let t = Mass[j+1]; 
                        Mass[j+1] = Mass[j]; 
                        Mass[j] = t; 
                }
        }
     }
        return Mass; 
    }
}