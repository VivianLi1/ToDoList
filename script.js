var addItem = function addItem(s){
    var l = document.getElementById("list");
    var n = document.createElement("li");
    n.innerHTML=s;
    l.appendChild(n);
};

var removeItem = function(n){
    n.remove();
};

var highlight = function(n){
    n.fontcolor = "red";
}

var buttonCallback = function buttonCallback(e){
    console.log(e);
    console.log(this);
    addItem(document.getElementById("textbox").value);
    document.getElementById("textbox").value = "";
};

var highlightCallback = function highlightCallback(e){
    console.log(e);
    console.log(this);
    var list = document.getElementById("list");
    var items = list.children;
    var counter = 0;
    if(counter < items.length){
	highlight(items[counter]);
	counter++;
    } else{
	counter = 0;
    }
}
    

function removeFunction(event) {
    var x = event.target;
    removeItem(x);
}

var button = document.getElementById('b1');
b1.addEventListener('click', buttonCallback);

var button2 = document.getElementById('b2');
b2.addEventListener('click', highlightCallback);

var list = document.getElementById("list");
var items=list.children;
console.log(items);

for (var i=0;i<items.length;i++){
    addListEvents();
};
