var btntranslate = document.querySelector("#btn-translate");
var txtinput = document.querySelector("#txt-input");
var outputdiv = document.querySelector("#output");

var serverurl = "https://api.funtranslations.com/translate/minion.json"


function getTranslationurl(text) {
  return serverurl + "?" + "text=" + text
}

function errorhandler(error) {
  console.log(error)
  console.log("error occured")
  alert('something wrong with the server!try again after some time')
}


function clickhandler() {
  outputdiv.innerText = txtinput.value;
  var inputText = txtinput.value;
  fetch(getTranslationurl(inputText))
    .then(response => response.json())
    .then(json => {
      console.log(json)
      var translatedText = jsoq1n.contents.translated;
      outputdiv.innerText = translatedText;
    })
    .catch(errorhandler)


};

btntranslate.addEventListener("click", clickhandler)