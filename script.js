let btnTranslate = document.querySelector("#btn-translate");
let textInput = document.querySelector("#txtInput")
let outputDiv =document.querySelector("#output")
let serverURL = "https://api.funtranslations.com/translate/minion.json"



function getTranslationURL(text){
    return serverURL + "?" + "text=" + text;
}

function errorHandler(error){
    console.log("error occured", error);
    alert("something wrong with server, try again later")
}


function clicked(){

    let InputText=textInput.value; //taking input

    //calling server for processing
    fetch(getTranslationURL(InputText))
        .then(response => response.json())
        .then(json => {
            let translatedText= json.contents.translated
            outputDiv.innerText=translatedText})
        .catch(errorHandler)
}


btnTranslate.addEventListener("click", clicked);



//code for executing the code when you press enter

document.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        clicked()
    }
});


