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

let createObject = () => {
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
console.log(cat)
}