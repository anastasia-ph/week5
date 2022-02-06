const container = document.getElementById("container")

function randomNumbers() {
let random = []
for (let i=0; i<10; i++){
    random.push(Math.round(Math.random()*(10 +10) -10));
}
container.innerHTML = ''
container.innerHTML += "Сгенерированные числа:" + random+"<br/>";
container.innerHTML +="Наибольшее число:" + Math.max(...random)+"<br/>";
container.innerHTML +="Наименьшее число:" + Math.min(...random)+"<br/>";
container.innerHTML +="Среднее арифметическое чисел:" + (sumOfRandoms(random) / (random.length))+"<br/>";
container.innerHTML +="Сумма чисел:" + sumOfRandoms(random)+"<br/>";
container.innerHTML +="Произведение чисел:" + multOfRandoms(random)+"<br/>";




}

function sumOfRandoms (array){
    let arraySum = 0;
    for (let i=0; i<array.length; i++){
        arraySum+=array[i];
    }
    return arraySum;
}
function multOfRandoms (array){
    let arrayMult = 1;
    for (let i=0; i<array.length; i++){
        arrayMult *= array[i];
    }
    return arrayMult;
}
