const API = "hSvmc3dHfMweQZjjtrtIio54aIRu8rSY";
const button = document.getElementById("searchButton");
const input= document.getElementById("inputField");
const errorField = document.getElementById("errorMessage");

button.addEventListener("click", function(){
errorField.innerHTML = "";
if(input.value!=""){
    let img = ''
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${API}&limit=3&q=`;
    url = url.concat(input.value);
    fetch(url)
    .then(response =>response.json())
    .then(content=>{
        for(let i=0; i<content.data.length; i++){
            img += `<img class="img" src=${content.data[i].images.downsized.url}>` 
            document.getElementById("output").innerHTML = img;
        }
        input.value = "";
    })
    .catch(err => {
        console.error(err);
    });
}


    else {
        errorField.innerHTML = "Пожалуйста, введите запрос"
    }
}
);
