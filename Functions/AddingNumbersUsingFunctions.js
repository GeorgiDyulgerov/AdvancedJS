/**
 * Created by Go6koy on 2/20/2016.
 */
function add(a){

    var sum=a;

    function moreAdd(b){
        if(arguments.length===0){
            b=0;
        }
        sum+=b;
        return moreAdd;
    }
    moreAdd.toString =function() { return sum}
    return moreAdd ;
};
var number=add(327);
console.log(add(2)(3)(5)(656).toString());
console.log(number(6).toString());