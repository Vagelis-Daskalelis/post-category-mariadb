const typeorm = require('typeorm');

const CategoryEntity = require('./model/Category').
CategoryEntity;

const PostEntity = require('./model/Post').
PostEntity;

const dataSource = new typeorm.DataSource({
    type: "mariadb",
    host: process.env.HOST,
    port: 3306,
    username: process.env.DBUSER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    synchronize: true,
    entities: [CategoryEntity, PostEntity]
});

dataSource
     .initialize()
     .then( function() {
        console.log("Connected to database")
     })
     .catch(function(error){
        console.log("Problem connecting to databse", error)
     })

module.exports = {dataSource}     