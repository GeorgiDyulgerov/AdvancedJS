/**
 * Created by Go6koy on 2/20/2016.
 */
var domModule = (function(){
    function appendChild(){

    }
})();

var liElement = document.createElement("li");
// Appends a list item to ul.birds-list
domModule.appendChild(liElement,".birds-list");
// Removes the first li child from the bird list
domModule.removeChild("ul.birds-list","li:first-child");
// Adds a click event to all bird list items
domModule.addHandler("li.birds", 'click', function(){ alert("I'm a bird!") });
// Retrives all elements of class "bird"
var elements = domModule.retrieveElements(".bird");
