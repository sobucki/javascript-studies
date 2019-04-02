const areasCache = new WeakMap();
const rectangle1 = {
    x: 10,
    y:2
};

const rectangle2 = {
    x: 5,
    y: 3
};

const rectangle3 = {
    x: 5,
    y: 3
}

function calculateArea(rectangle) {
    if (areasCache.has(rectangle)) {
        console.log("Using cache...");
        return areasCache.get(rectangle)
    }

    const area = rectangle.x * rectangle.y;
    areasCache.set(rectangle, area)
    return area
}

console.log(calculateArea(rectangle1));
console.log(calculateArea(rectangle1));
console.log(calculateArea(rectangle2));
console.log(calculateArea(rectangle2));
