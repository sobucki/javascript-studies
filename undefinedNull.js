const book = {
    title: "LOL",
    autor: {
        nome: "Fulano",
        idade: 24,
        blo: {
            flac: 23,
            cru: 'mlask',
            tre: {
                a: 'aa',
                b: 'bb'
            }
        }
    },
    coco: {
        bosta: 'merda'
    }
};
verifyObj(book)
delete book["autor"];
console.log(book);


function verifyObj(objectCon, numNest) {
    numNest = numNest || 0;
    for (let key in objectCon) {


        if (typeof objectCon[key] === 'object') {
            console.log("   ".repeat(numNest) + key);

            verifyObj(objectCon[key], numNest + 1)
        }

        else
            console.log("   ".repeat(numNest) + key + " : " + objectCon[key]);
    }
}