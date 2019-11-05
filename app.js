let express = require('express');                                   //Express
let app = express();                                                //Express
let indexRouter = require('./routes/index');                        //index to load the home page.
app.set('views','./views');                                         //view engine setup for EJS
app.set ('view engine', 'ejs');                                     //view engine setup for EJS
//Include body parser for post and configuring express to use body-parser as middle-ware.
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));                 //Configure the app to use bodyParser()
app.use(bodyParser.json());
//Tell Express.js where to find your Javascript files.
let path = require('path');
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//Mount routers
app.use(indexRouter);
//Create Server
app.listen(4000, () => console.log('listening on port 4000'));  //Create server

/*Connect to SQL Server
let sql = require('mssql');
let dbConfig = {
    user: 'sa',
    password: 'reallyStrongPwd123',
    server: 'localhost',
    database: 'Music',
    options:{
        encrypt: true
    }
};
 let mySql = new sql.ConnectionPool(dbConfig);
mySql
    .connect()
    .then(pool => pool.request().query("Artists_Load"))
    .then(result => {
      let rows = result.recordset;

      console.log(rows[0]);
      console.log(rows[1]);
      
      sql.close();
    })
    .catch(err => {
      res.status(500).send({ message: {err}})
      sql.close();
    });
    Connect to SQL Server. */