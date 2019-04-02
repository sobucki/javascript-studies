function shapeArea(n) {
    if (n === 0) return n;
    return Math.pow(n,2) + Math.pow(n-1,2)
}

for (let index = 0; index < 100; index++) {
    console.log(index + ": " + shapeArea(index));
    
}