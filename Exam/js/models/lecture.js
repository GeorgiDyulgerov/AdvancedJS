//TODO: Implement lecture module
var app = app || {};

(function (app){
    function Lecture(title, type, duration, date, trainer, course){
        app._Event.apply(this, arguments);
        this._trainer = trainer;
        this._course = course;
    }

    Lecture.extend(app._Event);

    Lecture.prototype.getTrainer = function(){
        return this._trainer;
    }
    Lecture.prototype.setTitle = function(trainer){
        if(trainer instanceof Trainer) {
            return this._trainer = trainer;
        }
        return Error();
    }
    Lecture.prototype.getCourse = function(){
        return this._course;
    }
    Lecture.prototype.setCourse = function(course){
        if(course instanceof Course) {
            return this._course = course;
        }
        return Error();
    }


    app.lecture = function(title, type, duration, date, trainer, course){
        return  Lecture(title, type, duration, date, trainer, course);
    };

})(app);