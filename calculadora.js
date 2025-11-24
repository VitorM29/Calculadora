let form = document.querySelector(".form");
let calc = "";
let result = "";
const lim = 10;
let htmlResult = document.querySelector(".htmlResult");

form.addEventListener("submit", (event) => {
    event.preventDefault()

    let submitter = event.submitter.name

    if (submitter == "=") {
        result = eval(calc);
        if (String(result).length > lim) {
            result = String(result).slice(0, lim);
        }
        htmlResult.innerHTML = `${result}`
    } else if (submitter == "C") {
        calc = " ";
        htmlResult.innerHTML = `${calc}`
    } else if (submitter == "del") {
        calc = calc.slice(0, -1);
        htmlResult.innerHTML = `${calc}`
    } else if (submitter == "%") {
        calc = calc + "/100*";
        htmlResult.innerHTML = calc;
    } else if (calc.length > lim) {
        alert("EXCEDEU O LIMITE DE CARACTERES")
    } else{
        calc = calc + submitter;
        htmlResult.innerHTML = `${calc}`
    }
})
