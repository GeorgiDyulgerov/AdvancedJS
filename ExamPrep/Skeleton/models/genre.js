var  html = html || {};

(function(scope){
    var id=0;
    function Gender(name){
        this._id=++id;
        this.name=name;
        this._movies=[];
    }

    Gender.prototype.addMovie = function(movie){
        this._movies.push(movie);
    }

    Gender.prototype.deleteMovie = function(movie){
        var index = this._movies.indexOf(movie);
        tnis._movies.splice(index)
    }

    Gender.prototype.deleteMovieById = function(id){
        var movie = this._movies.filter(function(movie){
            return movie._id === id;
        });
        this.deleteMovie(movie);

    }
/////////
    scope.getGenre = function(name){
        return new Gender(name);
    }
})(html);