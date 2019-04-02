document.addEventListener("DOMContentLoaded", function () {
    const inputSourceDecimal = document.querySelector("#source_decimal");
    const inputDestinyBinary = document.querySelector("#destiny_binary")

    const inputSourceBinary = document.querySelector("#source_binary");
    const inputDestinyDestiny = document.querySelector("#destiny_decimal")

    inputSourceDecimal.addEventListener("input", function () {
        changeInputResult(inputSourceDecimal.value, inputDestinyBinary, 10, 2)
    })

    inputSourceBinary.addEventListener("input", function () {
        changeInputResult(inputSourceBinary.value, inputDestinyDestiny, 2, 10)
    })


})

function changeInputResult(value, input, baseSource, baseDestiny) {
    
    if (baseSource === 10) {
        const valueDecimal = parseInt(value)
        input.setAttribute("value", valueDecimal.toString(baseDestiny).padStart(8, '0'))

    }

    if (baseSource === 2) {
        const convertedNumber = parseInt(value, 2)
        input.setAttribute("value", convertedNumber)
    }

    
}


function convertNumber(numValue, base) {

    return parseInt(numValue, base)
}