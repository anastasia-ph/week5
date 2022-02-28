let userName = document.getElementById("userNameProfile")
let userPicture = document.getElementById("userAvatarProfile")
let errorMessage = document.getElementById("errorMessage")





let postComment = () =>{
    let commentContent = document.getElementById("commentBox").value;
    let newComments = document.getElementById("uploadedComments")
    if(localStorage.getItem('login')!=null){
        errorMessage.innerHTML=''
    let newCommentValue = localStorage.getItem('login')+ ":"+ checkSpam(commentContent)+"<br />";
    newComments.innerHTML += newCommentValue;
    let previousComments = localStorage.getItem('comments');
    previousComments+=newCommentValue
    localStorage.setItem('comments', previousComments)
    document.getElementById("commentBox").value = '';
    }
    else{
        errorMessage.innerHTML="Пожалуйста, введите логин сначала"
    }
}

let checkSpam = (text) =>{
    let forbiddenWords = ["viagra", "xxx"]
    let filteredText = text;
    let lowCaseText = text.toLowerCase();
    for (word of forbiddenWords){
        if (lowCaseText.indexOf(word)!=-1)
        {
            let regex = new RegExp (word, 'ig')
            filteredText = filteredText.replace(regex, "***")
        }
    }
    return filteredText;
}

let saveUserInfo = () => {
    let result = false
    let userName = document.getElementById("inputUserName").value;
    let userPicture = document.getElementById("inputUserAvatar").value;

    if (userName && userPicture){
        localStorage.setItem('login', userName)
        localStorage.setItem('imageLink', userPicture)
        document.getElementById("inputUserName").value = '';
        document.getElementById("inputUserAvatar").value='';
        errorMessage.innerHTML='';
        result=true;
    }

    else if ((localStorage.getItem('login')!=null) || (localStorage.getItem('imageLink')!=null)){
        if (userName!=''){
            localStorage.setItem('login', userName);
            document.getElementById("inputUserName").value='';
            errorMessage.innerHTML = '';
        }
        else if(userPicture!=''){
            localStorage.setItem('imageLink', userPicture)
            document.getElementById("inputUserAvatar").value='';
            errorMessage.innerHTML = '';
        }

        else {
            errorMessage.innerHTML = "Заполните поле, которое хотите обновить"
        }
    result=true
    }

    else {
        errorMessage.innerHTML="Пожалуйста, заполните оба поля"
    }
    return result
}

let setValuesFromStorage = () =>{
    
    if (saveUserInfo()) {
        

        userName.innerHTML = localStorage.getItem('login')
        userPicture.src = localStorage.getItem('imageLink')
        userPicture.classList.remove("user-avatar_invisible-default")
    }
    else {
        return
    }
}

document.addEventListener("DOMContentLoaded", function(event){
    if ((localStorage.getItem("login") && localStorage.getItem("imageLink"))!=null){
    userName.innerHTML = localStorage.getItem('login');
    userPicture.src = localStorage.getItem('imageLink');
    userPicture.classList.remove("user-avatar_invisible-default")
    }
    localStorage.getItem('comments')==null ? localStorage.setItem('comments', []) : document.getElementById("uploadedComments").innerHTML = localStorage.getItem('comments')
    
})