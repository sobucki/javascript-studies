const sum = function() {
    let total = 0;
    for (let argument in arguments){
        total += arguments[argument];
    }
    return total;
}

const sum2 = function(...numbers) {
    let total = 0;
    for (let number of numbers){
        total += number;
    }
    return total;
}
console.log(sum2(1,3,5,7,9));
