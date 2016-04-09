//TODO: Implement hall module
var app = app || {};

(function (app){
    function Hall(name, capacity){
        this._name = name;
        this._capacity = capacity;
        this.parties = [];
        this.lectures = [];
    }

    Hall.prototype.getName = function(){
        return this._name;
    }
    Hall.prototype.setName = function(name){
        if(/^[A-Za-z\s]+$/.test(name)) {
            return this._name = name;
        }
        return Error();

    }
    Hall.prototype.getCapacity = function(){
        return this._capacity;
    }
    Hall.prototype.setCapacity = function(capacity) {
        if (typeof (capacity) === "number") {
            return this._capacity = capacity;
        }
        return Error();
    }


    Hall.prototype.addEvent = function(event){
        if(event.name === "Lecture")
        {
            this.lectures.push(event);
        }
        else if(event.name === "Party"){
            this.parties.push(event);
        }
        else {
            return Error();
        }
    }

    app.hall = function (name, capacity){
        return  Hall(name, capacity);
    }
    return app.hall();
})(app);