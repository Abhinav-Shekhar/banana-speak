var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("error occured!", error)
    alert("Something went wrong with the server. Please try again after some time")
}

btnTranslate.addEventListener("click", function clickEventHandler() {

    var InputTxt = txtInput.value;
    fetch(getTranslationURL(InputTxt))
        .then(response => response.json())
        .then(json => {
            outputDiv.innerText = json.contents.translated;
        })
        .catch(errorHandler)
})