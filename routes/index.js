let express = require('express');
let router = express.Router();
let path = require('path');
/* Home Page*/
router.get('/', (req, res) => res.sendFile(path.join(__dirname, '../views', 'home.html')));
/* Customer Page*/
router.get('/customer', (req, res) => res.render('customer.ejs', { NewCustomer: NewCustomer }));
let Customer = require('../database/customer').Customer       //Define a new customer with initial values to show in form.
let NewCustomer = new Customer('name', 'address');
router.post('/customer', (req, res) => {
    NewCustomer.ID = req.body.ID;
    NewCustomer.Name = req.body.Name;
    NewCustomer.Address = req.body.Address;
    res.render('customer.ejs', { NewCustomer: NewCustomer })
});
/* Employee Page*/
router.get('/employee', (req, res) => res.sendFile(path.join(__dirname, '../views', 'employee.html')));
router.post('/employee', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});
module.exports = router;