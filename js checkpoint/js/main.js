//alert("hello")
var i=0;
function tobold(){
    

if ( i==0 ) {
    var x = document.getElementById("text");
    x.style.fontWeight = "bold";
    i++
}
else if(i !==0) {
    var x = document.getElementById("text");
    x.style.fontWeight = "normal";
    console.log("normal");
    i=0;
}
}



function toitalic(){
    var str = document.getElementById("text");
    str.classList.toggle("italic");
    console.log("d5al2")

}
  

function tounderline(){
    var str = document.getElementById("text");
    str.classList.toggle("underlined");

   
}

function topolice(selectTag) {
    var listValue = selectTag.options[selectTag.selectedIndex].text;
    document.getElementById("text").style.fontFamily = listValue;
  }


function tofontsize(selectTag) {
    var listValue = selectTag.options[selectTag.selectedIndex].text;
    document.getElementById("text").style.fontSize = listValue;
}

//console.log("hello")
document.getElementsByClassName("text").innerHTML = "Just Lose it";