# README #

*Description*

Save the RESTFULL data in the table without implementing anything to do a CRUD with the REST Verbs Post, Put, Update and Delete

Install
```
$ npm install
```
**For use exemplo:**

 1. Create a table in data base for exemplo

 **Creating database and table**
```
USE namedatabase
CREATE TABLE persons (
    PersonID int,
    LastName varchar(255),
    FirstName varchar(255),
    Address varchar(255),
    City varchar(255)
);
```
 2. Config a data base connect in dbconnection.js

```
var mysql = require('mysql');
var connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
  database: 'namedatabase'
});
module.exports = connection;
```
 3. Start aplication
Into folter project make **npm run dev**
Test http://localhost:3000/up
Will show info time the server

 4. Test with your table
http://localhost:3000/api/v1/crud?t=persons

Where **t** = **table** of the your data base

Thanks!
