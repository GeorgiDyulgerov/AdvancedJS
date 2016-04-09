/**
 * Created by Go6koy on 2/20/2016.
 */
function printArgsInfo(){
    var i;
    for(i in arguments){
        console.log(arguments[i] +' ('+ typeof(arguments[i])+')');
    }
};
console.log("Normal");
printArgsInfo(2, 3, 2.5, -110.5564, false);
console.log("call without arg: "+printArgsInfo.call());
console.log("call with arg: "+printArgsInfo.call(undefined,2, 3, 2.5, -110.5564, false));
console.log("apply without arg: "+printArgsInfo.apply());
console.log("apply with arg: "+printArgsInfo.apply(undefined,[2, 3, 2.5, -110.5564, false]));