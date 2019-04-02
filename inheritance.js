const functionalLanguage = {
    paragim: 'Functional'
}

const scheme = {
    name: 'Scheme',
    year: 1975,
    __proto__: functionalLanguage
}

const javascript = {
    name: 'Javascript',
    year: 1995,
    __proto__: functionalLanguage
}

const book1 = {
    name: "Ref",
    author:"Martin"
};

const book2 = {
    author:"Martin",
    name: "Ref",
   
};
console.log(JSON.stringify(book1) === JSON.stringify(book2));

//console.log(scheme);
//console.log(javascript);

