import { Sequelize } from "sequelize";

const {DB_NAME, DB_USERNAME, DB_PASSWORD, DB_HOST} = process.env

const dbConnection : Sequelize = new Sequelize({
    database: DB_NAME, 
    username: DB_USERNAME, 
    password: DB_PASSWORD ?? '',
    host: DB_HOST,
    port: 3306,
    dialect: 'mysql',
    define: {
        timestamps: true
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

export default dbConnection