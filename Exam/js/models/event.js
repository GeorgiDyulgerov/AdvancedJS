//TODO: Implement event module
var app = app || {};

(function (app){
    function Event(title, type, duration, date){
        this._title = title;
        this._type = type;
        this._duration = duration;
        this._date = date;
    }

    Event.prototype.getTitle = function(){
        return this._title;
    }
    Event.prototype.setTitle = function(title){
        if(/^[A-Za-z\s]+$/.test(title)) {
            return this._title = title;
        }
        return Error();
    }
    Event.prototype.getType = function(){
        return this._type;
    }
    Event.prototype.setType = function(type){
        if(/^[A-Za-z\s]+$/.test(type)) {
            return this._type = type;
        }
        return Error();

    }
    Event.prototype.getDuration = function(){
        return this._duration;
    }
    Event.prototype.setDuration = function(duration){
        if(typeof (duration) === "number"){
          return this._duration = duration;
        }
        return Error();
    }
    Event.prototype.getDate = function(){
        return this._date;
    }
    Event.prototype.setDate = function(date){
        if(date instanceof Date) {
            return this._date = date;
        }
        return Error;
    }

    app._Event = Event;
    app.event = function(title, type, duration, date){
        return  Event(title, type, duration, date);
    }
})(app);