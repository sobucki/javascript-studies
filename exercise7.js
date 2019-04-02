const DatabaseError = function (statement, message) {
    this.statement = statement;
    this.message = message;
};

const database = {
    tables: {

    },
    createTable(statement) {
        const regexp = /create table (\w+) \((.+)\)/;

        const parsedStatement = statement.match(regexp);
        let [, tableName, columns] = parsedStatement;
        this.tables[tableName] = {
            columns: {},
            data: []
        };

        columns = columns.split(", ");

        for (let column of columns) {
            column = column.split(" ");
            const [name, type] = column;
            this.tables[tableName].columns[name] = type;
        }
    },
    insert(statement) {
        const regexp = /insert into (\w+) \((.+)\) values \((.+)\)/;
        const parsedStatement = statement.match(regexp)
        let [, tableName, columns, values] = parsedStatement;

        columns = columns.split(", ");
        values = values.split(", ")
        let row = {};

        if (columns.length !== values.length)
            throw new DatabaseError(statement, `Number of Columns and Values dont match: Columns->${columns.length} Values->${values.length}`)

        for (let i = 0; i < columns.length; i++) {
            const column = columns[i]
            const value = values[i]
            row[column] = value
        }

        this.tables[tableName].data.push(row);
    },
    select(statement) {
        const regexp = /select (.+) from ([a-z]+)(?: where (.+))?/;
        const parsedStatement = statement.match(regexp)

        let [,columns, tableName, whereClause] = parsedStatement;
        columns = columns.split(", ")
        let rows = this.tables[tableName].data;

        if (whereClause) {
            const [columnWhere, valueWhere] = whereClause.split(" = ");
            rows = rows.filter(function (row) {
                return row[columnWhere] === valueWhere
            })
        }

        rows = rows.map(function (row) {
            let selectedRow = {};
            columns.forEach(function (column) {
               
                if (!row[column]) 
                    throw new DatabaseError(statement, `Column name not found: ${column}`)
                    
                selectedRow[column] = row[column]
            })
            return selectedRow
        });
        return rows;

    },
    delete(statement) {
        const regexp = /delete from ([a-z]+)(?: where (.+))?/;
        const parsedStatement = statement.match(regexp)
        let [,tableName, whereClause] = parsedStatement;

        if (whereClause) {
            let [columnWhere, valueWhere] = whereClause.split(" = ");

            let rows = this.tables[tableName].data;
          
            rows = rows.filter(function (row) {
                return row[columnWhere] !== valueWhere;
            })
          
            this.tables[tableName].data = rows; 
        } else {
            this.tables[tableName].data = [];
        }
              
    },
    execute(statement) {
        if (statement.startsWith("create table")) {
            return this.createTable(statement)
        }
        if (statement.startsWith("insert into")) {
            return this.insert(statement)
        }
        if (statement.startsWith("select")) {
            return this.select(statement)
        }
        if (statement.startsWith("delete")) {
            return this.delete(statement)
        }
        throw new DatabaseError(statement, `Syntax error: '${statement}'`)
    }
};


try {
    database.execute("create table author (id number, name string, age number, city string, state string, country string)");
    database.execute("insert into author (id, name, age) values (1, Douglas Crockford, 62)");
    database.execute("insert into author (id, name, age) values (2, Linus Torvalds, 47)");
    database.execute("insert into author (id, name, age) values (3, Martin Fowler, 54)");
    database.execute("delete from author where id = 2");
    database.execute("select name, age from author");
    console.log(JSON.stringify( database.execute("select id, name, age from author"), undefined, "   "));
    console.log(JSON.stringify(database, undefined, "   "));

} catch (error) {
    console.log(error.message)
}







//console.log(JSON.stringify(database, undefined, "   "));
