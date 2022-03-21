class Cat {
    constructor(catName, ownerName, ownerMail, ownerNumber, animalBreed, foodType, animalGender){
        this.catName = catName;
        this.ownerName = ownerName;
        this.ownerMail = ownerMail;
        this.ownerNumber = ownerNumber;
        this.animalBreed = animalBreed;
        this.foodType = foodType;
        this.animalGender = animalGender
    }
}
let cat = {
    catName: null,
    ownerName: null,
    ownerMail: null,
    ownerNumber: null,
    animalBreed: null,
    foodType: null

}
const button = document.getElementById("submitButton")

let isPhoneNumberCorrect =() =>{
    let userPhoneNumber = document.getElementById("ownerNumber").value;
    let regExp = new RegExp(/^\+(380)([1-9]{9})$/)
    if(!regExp.test(userPhoneNumber)){
        return false
    }
    return true
}

let createObject = () => {

let catNameValue = document.getElementById("catName").value;
let ownerNameValue = document.getElementById("ownerName").value;
let ownerMailValue = document.getElementById("ownerMail").value;
let ownerNumberValue = document.getElementById("ownerNumber").value
if(catNameValue == ""|| ownerNameValue == ""|| ownerMailValue == "" || ownerNumberValue == ""){
    alert("Заполните все обязательные поля!")
    return false;
}
else if (!isPhoneNumberCorrect()){
    alert("Номер телефона не соответствует формату!")
    return false;
}
else{
catName = document.getElementById("catName").value;
ownerName = document.getElementById("ownerName").value;
ownerMail = document.getElementById("ownerMail").value;
ownerNumber = document.getElementById("ownerNumber").value;
animalBreed = document.getElementById("animalBreed").value;
animalGender = document.querySelector('input[name="gender"]:checked').value
foodTypeChecked = document.querySelectorAll('input[type="checkbox"]:checked');
foodType=[]
for(food of foodTypeChecked){
    foodType.push(food.value);
}
foodType = foodType.join(', ')

cat = new Cat(catName, ownerName, ownerMail, ownerNumber, animalBreed, foodType, animalGender);
}
return true
};

button.addEventListener("click", function(e){
    e.preventDefault();
    if (createObject()){
    let newCat = {
        "catName":`${cat.catName}`,
        "ownerName":`${cat.ownerName}`,
        "ownerMail":`${cat.ownerMail}`,
        "ownerNumber":`${cat.ownerNumber}`,
        "animalBreed":`${animalBreed}`,
        "animalGender":`${cat.animalGender}`,
        "foodType":`${cat.foodType}`
    }
        fetch('https://httpbin.org/post',{
                method: "POST",
                body:JSON.stringify(newCat)
})
        .then(response=>response.json())
        .then(user=>console.log(user))
        .catch(error=>console.log(error))
    }
}
)


