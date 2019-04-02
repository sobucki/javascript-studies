import Database from './database'
//node --experimental-modules exercise11.mjs

const database = new Database();
console.time("execute");
database.execute("create table author (id number, name string, age number, city string, state string, country string)").then(function () {
    return Promise.all([
        database.execute("insert into author (id, name, age) values (1, Douglas Crockford, 62)"),
        database.execute("insert into author (id, name, age) values (2, Linus Torvalds, 47)"),
        database.execute("insert into author (id, name, age) values (3, Martin Fowler, 54)")
    ]).then(function () {
        return database.execute("select name, age from author").then(function (result) {
            console.timeEnd("execute");
            console.log(result);
        });
    })

}).catch(function (e) {
    console.log(e.message);
});
