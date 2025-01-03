let timer = new Date().getFullYear();

let inpyear = document.querySelector(".year");
let inpmonth = document.querySelector(".month");
let inpday = document.querySelector(".day");


let allinpu = document.querySelectorAll('input')

let pyear = document.querySelector(".year");
let pmonth = document.querySelector(".pmonth");
let pday = document.querySelector(".pday");


//verificar se ta tudo preenchido 
let emptySite = Array.from(allinpu).every(inp => inp.value.length==0)

function acharano() {
    if(inpyear.value>=0 && inpyear.value<=timer) {
        return timer-inpyear.value
    } 
}

function acharMes() {
    if(inpmonth.value<=12) {
        
    }
}