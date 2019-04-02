const timeUnits = new Map([["second", 1], ["minute",60], ["hour",3600]]);

console.log(timeUnits)
console.log(timeUnits.size)

timeUnits.forEach(function (val,key) {
    console.log(val, key);
})

console.log(timeUnits.clear());
