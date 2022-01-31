let firstElement = function(){
    const array = ['js', 'css', 'html'];
    let firstElement = document.getElementById("firstElement");
    firstElement.innerHTML = `1. Первый элемент массива: ${array[0]}`
}

let arrayFilter = function(){
    let arrayFilter = document.getElementById("filteredArray");
    const array = [0, 1, false, 2, undefined, '', 3, null];
    const filteredArray = array.filter(value=> (value!=0) && (value!=undefined) && (value!=null));

    arrayFilter.innerHTML = `2. Отфильтрованный массив: ${filteredArray}`;
}

let arrayLenght = function(){
    const array = [[1,2], [1,2,3], [1,2,3,4]];
    let arrayLenght = document.getElementById("arrayLenght");
    array.forEach((item, index, value) =>{
        if (item.length>3){
            arrayLenght.innerHTML = (`3. Длина элемента ${item} больше 3 и имеет индекс ${index}` )
        };
    });
}

let arrayManipulations = function(){
    firstElement();
    arrayFilter();
    arrayLenght();
}

window.onload = arrayManipulations();