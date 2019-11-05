class Customer{
    constructor(name,address){
        this.ID = null;             //unique ID assigned by database
        this.Name = name;           //customer name
        this.Address = address;     //customer address
        
    }
};
module.exports = {
    Customer: Customer
}