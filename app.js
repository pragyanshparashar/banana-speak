var btntranslate = document.querySelector('#btn-translate');
var txtinput = document.querySelector("#txt-input")
console.log(txtinput);

function clickhandler(){
        console.log("clicled!");
        console.log("input",txtinput.value);
    }
    
btntranslate.addEventListener("click",  clickhandler)

    
    
    


