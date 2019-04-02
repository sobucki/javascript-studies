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

frameworks.forEach((framework) => console.log(framework))


const result = frameworks.filter(function (framework) {
    return framework.contributors < 1000
})


console.log(result);

// frameworks.filter()