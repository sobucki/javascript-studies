const frameworks = [
    {
        name: "Angular.js",
        contributors: 1548
    },
    {
        name: "Ember.js",
        contributors: 746
    },
    {
        name: "Vue.js",
        contributors: 240
    }];

// frameworks.forEach((framework) => console.log(framework))


const result = frameworks.filter(function (framework) {
    return framework.contributors < 1000
})

const resultFind = frameworks.find(function (framework) {
    return framework.name === "Angular.js"
})

const resultSome = frameworks.some(function (framework) {
    return framework.name.includes("js")
})

const resultEvery = frameworks.every(function (framework) {
    return framework.contributors > 1000
})

const resultMap = frameworks.map(function (framework) {
    return framework.name
})


const resultReduce = frameworks.reduce(function (total, framework) {
    return total + framework.contributors;
}, 0)

console.log(resultReduce);


