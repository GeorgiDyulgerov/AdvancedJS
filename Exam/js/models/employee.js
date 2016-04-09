//TODO: Implement employee module
var app = app || {};

(function (app){

    function Employee(name, workHours){
        this._name = name;
        this._workHours = workHours;
    }

    Employee.prototype.getName = function(){
        return this._name;
    }
    Employee.prototype.setName = function(name){
        if(/^[A-Za-z\s]+$/.test(name)) {
            return this._name = name;
        }
        return Error();
    }
    Employee.prototype.getWorkHours = function(){
        return this._workHours;
    }
    Employee.prototype.setWorkHours = function(workHours) {
        if (typeof (workHours) === "number") {
            return this._workHours = workHours;
        }
        return Error();
    }

    app._Employee = Employee;
    app.employee = function(name, workHours){
        return  Employee(name, workHours);
    }

})(app);