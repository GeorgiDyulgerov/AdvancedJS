//TODO: Implement course module
var app = app || {};

(function (app){
    function Course(name, numberOfLectures){
        this._name = name;
        this._numberOfLectures = numberOfLectures;
    }

    Course.prototype.getName = function(){
        return this._name;
    }
    Course.prototype.setName = function(name){
        if(/^[A-Za-z\s]+$/.test(name)) {
            return this._name = name;
        }
        return Error();

    }
    Course.prototype.getNumberOfLectures = function(){
        return this._numberOfLectures;
    }
    Course.prototype.setNumberOfLectures = function(numberOfLectures){
        if(typeof (numberOfLectures) === "number"){
            return this._numberOfLectures = duration;
        }
        return Error();
    }

    app.course = function (name, numberOfLectures){
        return  Course(name, numberOfLectures);
    };

})(app);