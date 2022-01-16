let showGreetings = () => {
    username = document.getElementById("username-input__name").value;
    if (username !=""){
    document.getElementById("username-output").innerHTML =
    `Привет, ${username}!`;

    }
    else {
        document.getElementById("username-output").innerHTML =`До встречи! :)`;
    }
}