function setDefaultValues(){
        let amountPreview = document.getElementById("amount");
        let termPreview = document.getElementById("term");
        let ratePrevie = document.getElementById("rate");
        
        amountPreview.value = 300000;
        termPreview.value = 25;
        ratePrevie.value = 5.25;
    }
   
function clearForm() {
        let amountPreview = document.getElementById("amount");
        let termPreview = document.getElementById("term");
        let ratePreview = document.getElementById("rate");
        let option1 = document.getElementById("o1");
        let option2 = document.getElementById("o2");

        amountPreview.value = '';
        termPreview.value = '';
        ratePreview.value = '';
        option1.checked = false; 
        option2.checked = false;

        document.getElementById("emptyView").classList.remove("hidden");
        document.getElementById("sendView").classList.add("hidden");
    }   

document.addEventListener("DOMContentLoaded", function() {
    let option1 = document.getElementById("o1");
    let option2 = document.getElementById("o2");

    option1.addEventListener("click", function() {
        if (option1.checked) {
            option2.checked = false;
        }
    });

    option2.addEventListener("click", function() {
        if (option2.checked) {
            option1.checked = false;
        }
    });
});

function sendForm(){
    let amountPreview = document.getElementById("amount");
    let termPreview = document.getElementById("term");
    let ratePreview = document.getElementById("rate");
    let option1 = document.getElementById("o1");
    let option2 = document.getElementById("o2");

    amountPreview.value = '';
    termPreview.value = '';
    ratePreview.value = '';
    option1.checked = false; 
    option2.checked = false;

    
    
    document.getElementById("emptyView").classList.add("hidden");
    document.getElementById("sendView").classList.remove("hidden");




};


document.addEventListener("DOMContentLoaded", function() {
    setDefaultValues();

    document.getElementById("clrButton").addEventListener("click", clearForm);
    document.getElementById("sendFormButton").addEventListener("click",sendForm);
});