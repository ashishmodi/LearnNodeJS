setTimeout(function() {
    console.log("setTimeout: Hey! 3000 millisecond completed!..");
    }, 3000);

var recursive = function () {
    console.log("Hey! 1000 millisecond completed!..");
    setTimeout(recursive,1000);
}
recursive();

function welcome () { console.log("Welcome to NodeJS!"); }
var id1 = setTimeout(welcome,1000);
var id2 = setInterval(welcome,1000);
clearTimeout(id1);
// clearInterval(id2); It will terminate after one step if you use ClearInterval.

var i = 0;
console.log(i);
setInterval(function() {
    ++i;
    console.log(i);
}, 1000);