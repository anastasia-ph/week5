
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
        let userMail = document.getElementById("userEmail").value;
        let regExp = new RegExp(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/);
        if (userMail == ''){
            errorForm.innerHTML += "Пожалуйста, введите email! <br>";
            return;
        }
        else if(!regExp.test(userMail)) {
            errorForm.innerHTML +="Некорректный email адрес! <br>"
            return;
        }

    };

    let isPasswordSecure = () => {
        let userPassword = document.getElementById("userPassword").value;
        let regExp = new RegExp (/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/);
        if (userPassword == ''){
            errorForm.innerHTML += "Пожалуйста, введите пароль! ";
            return;
        }
        else if (userPassword.length < 8){
            errorForm.innerHTML +="Слишком короткий пароль! "
            return;
        }
        else if(!regExp.test(userPassword)){
            errorForm.innerHTML +="Пароль ненадёжен! </br>"
        }
    }

    let isPhoneNumberAdded =() =>{
        let userPhoneNumber = document.getElementById("userPhoneNumber").value;
        let regExp = new RegExp(/^\+(380)([1-9]{9})$/)
        if (userPhoneNumber == ''){
            errorForm.innerHTML +="Пожалуйста, введите номер телефона! "
        }
        else if(!regExp.test(userPhoneNumber)){
            errorForm.innerHTML +="Неверный формат номера! </br>"
        }
    }
    let isBirthDateSet = () => {
        let userBirthDate = document.getElementById("userBirthDate").value;
        if (userBirthDate == ''){
            errorForm.innerHTML += "Пожалуйсте, укажите дату рождения! "
        }
    }

    let isErrorDisplayed = () => {

        if(errorForm.innerHTML == '' && greetingForm.innerHTML == '') {
            let userName = document.getElementById("userName").value;
            greetingForm.innerHTML +=`Добро пожаловать, ${userName}!`
        }
    }

    let clearErrorForm = () => {
        errorForm.innerHTML = ''
    }

    let startValidation = () =>{
        clearErrorForm();
        isNameCorrect();
        isMailCorrect();
        isPasswordSecure();
        isPhoneNumberAdded();
        isBirthDateSet();
        isErrorDisplayed();
    }

    button.addEventListener("click", startValidation)