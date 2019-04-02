document.addEventListener("DOMContentLoaded", function () {
    const spanList = document.querySelectorAll(".binary");
    const resultSpan = document.querySelector(".resultDecimal")
    
    let stringBinary = [];
    let binaryValue = "";
    const spanArray = Array.from(spanList)

    spanArray.forEach(function (span, index) {

        stringBinary[index] = span.innerText;

        span.addEventListener("click", function () {
            if (span.innerText == '0') {
                span.innerText = 1;
            } else {
                span.innerText = 0;
            }

            stringBinary[index] = span.innerText;
            binaryValue =  convertArrayToString(stringBinary)
            resultSpan.innerText = parseInt(binaryValue, 2)
        })
    })



    


})


function convertArrayToString(binaryArray) {
    let stringValue = ""

    binaryArray.forEach(value => {
        stringValue = stringValue.concat(value)
    })

    return stringValue
}