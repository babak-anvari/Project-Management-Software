class Project {
    constructor(name, address, type, engineeringHours, manufacturingHours, installationHours, commissioningHours) {
        this.ID = null;                     //unique ID assigned by MSSQL
        this.Name = name;                   //name of the project
        this.Address = address;             //address of the project
        this.Type = type;                   //type of the freezer
        this.EngHours = engineeringHours;   //Hours allocated to engineering
        this.ManHours = manufacturingHours; //Hours allocated to manufacturing
        this.InsHours = installationHours;  //Hours allocated to installation
        this.ComHours = commissioningHours; //Hours allocated to commissioning
    }
};
module.exports = {
    Project: Project
}