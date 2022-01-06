function showGreetings(){
    let name = prompt("Как тебя зовут?", '');
    if (name !=null){
    alert(`Привет, ${name}!`);
    }
    else {
        alert(`До встречи! :)`)
    }
}