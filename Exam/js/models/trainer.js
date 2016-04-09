//TODO: Implement trainer module
var app = app || {};

(function (app){
    function Trainer(name, workHours){
        app.employee.call(this, arguments);
        this.courses = [];
        this.feedbacks=[];
    }

    Trainer.extend(app._Employee);

    Trainer.prototype.addFeedback = function(feedback){
        if(typeof (feedback) === "string"){
            this.feedbacks.push(feedback);
        }
        else{
            return Error();
        }
    }

    Trainer.prototype.addCourse = function(course){
        if(course instanceof app.course){
            this.courses.push(course);
        }
        else {
            return Error();
        }
    }


    app.trainer =  Trainer(name, workHours);



})(app);