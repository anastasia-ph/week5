let postComment = () =>{
    let commentContent = document.getElementById("commentBox").value;
    document.getElementById("uploadedComments").innerHTML+=checkSpam(commentContent)+"<br />";
    document.getElementById("commentBox").value = '';
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