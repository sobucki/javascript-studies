import DatabaseError from './databaseError'
import Parser from './parser'


export default class Database {
    constructor() {
        this.tables = {};
        this.parser = new Parser();
    }
    createTable(parsedStatement) {

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
    }
    insert(parsedStatement) {

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
    }
    select(parsedStatement) {

        let [, columns, tableName, whereClause] = parsedStatement;
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

    }
    delete(parsedStatement) {

        let [, tableName, whereClause] = parsedStatement;

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

    }
    execute(statement) {
        const result = this.parser.parse(statement);
        if (result) {
            return this[result.command](result.parsedStatement);
        }

        throw new DatabaseError(statement, `Syntax error: '${statement}'`)
    }
}