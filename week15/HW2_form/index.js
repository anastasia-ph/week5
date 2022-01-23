
let errorForm = document.getElementById("errorForm");
let greetingForm = document.getElementById("greetingForm");
errorForm.value = '';
greetingForm.value = '';
let button = document.getElementById("button")


    let isNameCorrect = () => {
        let numbers = [1,2,3,4,5,6,7,8,9,0]
        let userName = document.getElementById("userName").value;
        
        
        if(userName != ''){
            for (let i=0; i<numbers.length; i++){

            if(userName.includes(numbers[i])){
                errorForm.innerHTML +="Имя не может содержать цифр! ";
                break;
            };
        };
    }
        else if(userName == '') {
            errorForm.innerHTML +="Пожалуйста, введите имя! ";
            }
        
        };



    let isMailCorrect = () => {
        const atSymbol = "@";
        let userMail = document.getElementById("userEmail").value;

        if((userMail!= '') && (!userMail.includes(atSymbol))) {
            errorForm.innerHTML +="Некорректный email адрес! "
        }
        else if(userMail == ''){
            errorForm.innerHTML += "Пожалуйста, введите email! "
        };

    };

    let isPasswordSecure = () => {
        let userPassword = document.getElementById("userPassword").value;

        if ((userPassword!='') && (userPassword.length < 8)){
            errorForm.innerHTML +="Слишком короткий пароль! "
        }
        else if (userPassword == ''){
            errorForm.innerHTML += "Пожалуйста, введите пароль! "
        }
    }

    let isPhoneNumberAdded =() =>{
        let userPhoneNumber = document.getElementById("userPhoneNumber").value;
        if (userPhoneNumber == ''){
            errorForm.innerHTML +="Пожалуйста, введите номер телефона! "
        }
    }
    let isBirthDateSet = () => {
        let userBirthDate = document.getElementById("userBirthDate").value;
        if (userBirthDate == ''){
            errorForm.innerHTML += "Пожалуйсте, укажите дату рождения! "
        }
    }

    let isErrorDisplayed = () => {

        if(errorForm.innerHTML == '') {
            let userName = document.getElementById("userName").value;
            greetingForm.innerHTML +=`Добро пожаловать, ${userName}!`
        }
    }

    let clearErrorForm = () => {
        errorForm.innerHTML = ''
    }

    button.addEventListener("click", clearErrorForm)
    button.addEventListener("click", isNameCorrect)
    button.addEventListener("click", isMailCorrect)
    button.addEventListener("click", isPasswordSecure)
    button.addEventListener("click", isPhoneNumberAdded)
    button.addEventListener("click", isBirthDateSet)
    button.addEventListener("click", isErrorDisplayed)