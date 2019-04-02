const [name, classification, color] = "Banana;Fruit;yellow".split(";");
console.log(name, classification, color);

const sportive = {
    nameCar: "Ferrari",
    type: "Sport"
};

const {nameCar: n, type: t} = sportive;
console.log(n, t);


const sum = function({a, b}) {
    return a + b;
}

console.log(sum({a:2, b:3}));
