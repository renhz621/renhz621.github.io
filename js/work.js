// var i=0;
// function start(){
//     for (;i<5;i++){
//         postMessage(i);
//         setTimeout(500,test);
//     } 

// }
// start();
var i=0;

function timedCount()
{
    i=i+1;
    postMessage(i);
    setTimeout("timedCount()",500);
}

timedCount(); 