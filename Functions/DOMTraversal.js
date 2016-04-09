/**
 * Created by Go6koy on 2/20/2016.
 */
function traverse(selector){
    var startNode=document.querySelector(selector);

    recursiveTraverse(startNode,'');

    function recursiveTraverse(node,indent){
        var line = indent + node.nodeName.toLowerCase() + ":";
        var i=0;
        for(i ; i < node.attributes.length; i++){
            line += node.attributes[i].name + '"' + node.attributes[i].value + '"';
        }

        console.log(line);

        for(i;i < node.childNodes.length;i++){
            var child=node.childNodes[i];
            if(child.nodeType===1){
                recursiveTraverse(child, indent + "\t")
            }
        }
    };

};

var selector = ".birds";
traverse(selector);
