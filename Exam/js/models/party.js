//TODO: Implement party module
var app = app || {};

(function (app){
    function Party(title, type, duration, date, isCatered, isBirthday, organiser){
        app._Event.call(this, arguments);
        this._isCatered = isCatered;
        this._isBirthday = isBirthday;
        this._organiser = organiser;
    }

    Party.extend(app._Event);

    Party.prototype.getIsCatered = function(){
        return this._isCatered;
    }
    Party.prototype.setIsCatered = function(isCatered){
        if(typeof(isCatered) === "boolean") {
            return this._trainer = trainer;
        }
        return Error();
    }
    Party.prototype.getIsBirthday = function(){
        return this._isBirthday;
    }
    Party.prototype.setIsBirthday = function(isBirthday){
        if(typeof(isBirthday) === "boolean") {
            return this._isBirthday = isBirthday;
        }
        return Error();
    }
    Party.prototype.getOrganiser = function(){
        return this._organiser;
    }
    Party.prototype.setOrganiser = function(organiser){
        if(organiser instanceof Employee) {
            return this._organiser = organiser;
        }
        return Error();
    }

    app.party = function (title, type, duration, date, isCatered, isBirthday, organiser){
        return Party(title, type, duration, date, isCatered, isBirthday, organiser);
    }

})(app);