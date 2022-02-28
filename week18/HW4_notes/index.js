let postButton = document.getElementById("notesButton");
let clearButton = document.getElementById("clearButton");


let postNote = () => {
    let noteField = document.getElementById("notesInput");
    let postedNotesArea = document.getElementById("notesArea");

    postedNotesArea.innerHTML += noteField.value + "<br />";
    let previousComments = localStorage.getItem('comments');
    previousComments += noteField.value + "<br />";
    localStorage.setItem('comments', previousComments)
    clearNote(noteField)

}

let clearNote = (note) => {
    note.value = ''
}

let clearAll = () => {
    localStorage.clear('comments')
    document.getElementById("notesArea").innerHTML = '';
}

document.addEventListener("DOMContentLoaded", function(event){
    localStorage.getItem('comments') == null ? localStorage.setItem('comments', []) : document.getElementById("notesArea").innerHTML = localStorage.getItem('comments'); 
})
postButton.addEventListener("click", postNote)
clearButton.addEventListener("click", clearAll)
