
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
                return false;
            };
        };
    }
        else if(userName == '') {
            errorForm.innerHTML +="Пожалуйста, введите имя! ";
            return false
            }
        return true
        };



    let isMailCorrect = () => {
        let userMail = document.getElementById("userEmail").value;
        let regExp = new RegExp(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/);
        if (userMail == ''){
            errorForm.innerHTML += "Пожалуйста, введите email! <br>";
            return false;
        }
        else if(!regExp.test(userMail)) {
            errorForm.innerHTML +="Некорректный email адрес! <br>"
            return false;
        }
        return true
    };

    let isPasswordSecure = () => {
        let userPassword = document.getElementById("userPassword").value;
        let regExp = new RegExp (/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/);
        if (userPassword == ''){
            errorForm.innerHTML += "Пожалуйста, введите пароль! ";
            return false;
        }
        else if (userPassword.length < 8){
            errorForm.innerHTML +="Слишком короткий пароль! "
            return false;
        }
        else if(!regExp.test(userPassword)){
            errorForm.innerHTML +="Пароль ненадёжен! </br>"
            return false
        }
        return true
    }

    let isPhoneNumberAdded =() =>{
        let userPhoneNumber = document.getElementById("userPhoneNumber").value;
        let regExp = new RegExp(/^\+(380)([1-9]{9})$/)
        if (userPhoneNumber == ''){
            errorForm.innerHTML +="Пожалуйста, введите номер телефона! "
            return false
        }
        else if(!regExp.test(userPhoneNumber)){
            errorForm.innerHTML +="Неверный формат номера! </br>"
            return false
        }
        return true
    }
    let isBirthDateSet = () => {
        let userBirthDate = document.getElementById("userBirthDate").value;
        if (userBirthDate == ''){
            errorForm.innerHTML += "Пожалуйсте, укажите дату рождения! "
            return false
        }
        return true
    }

    let greetings = () => {

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
        return (isNameCorrect()) && (isMailCorrect())&&(isPasswordSecure())&&(isPhoneNumberAdded())&&(isBirthDateSet()) 
        
    }

    button.addEventListener("click", function(e){
        e.preventDefault()
        if(startValidation()){
            let user = {
                "name":`${document.getElementById("userName").value}`,
                "mail":`${document.getElementById("userEmail").value}`,
                "password":`${document.getElementById("userPassword").value}`,
                "phone":`${document.getElementById("userPhoneNumber").value}`,
                "birthdate":`${document.getElementById("userBirthDate").value}`
            }
            fetch('https://httpbin.org/post',{
                method: "POST",
                body:JSON.stringify(user)
            })
            .then(response=>response.json())
            .then(user=>console.log(user))
            .catch(error=>console.log(error))
            greetings()
        }
    })