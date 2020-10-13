
function ge1id(eml) {
    return document.getElementById(eml);
}
 
function ge1class(eml) {
    return document.getElementsByClassName(eml);
}

var ba1 = ge1class("bar1");
var cro = ge1class("cross1");

console.log(ba1);
if (ba1 != null) {
   
    ba1[0].addEventListener('click', function () {
        var link1b = ge1class("link-box");
        console.log(link1b);
        console.log(link1b[0].classList);
        link1b[0].classList.toggle("bloc"); 
        ba1[0].classList.toggle("non1");
        cro[0].classList.toggle("bloc");   
     });

}

if (cro != null) {
    cro[0].addEventListener('click', function () {
        var link1b = ge1class("link-box");
        console.log(link1b);
        console.log(link1b[0].classList);
        link1b[0].classList.toggle("bloc");
        ba1[0].classList.toggle("non1");
        cro[0].classList.toggle("bloc"); 
        
    }); 

}

//ending of dynamic navbar;

