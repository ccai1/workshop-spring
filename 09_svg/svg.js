// Cathy Cai
// SoftDev2 pd6
// K #09: Connect the Dots
// 2019-03-12

var pic = document.getElementById("vimage");
var clear = document.getElementById("clear");
var last = null;

var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");

clear.addEventListener('click', function(e){
  while (pic.lastChild) {
    pic.removeChild(pic.lastChild);
    last = null;
}
});

pic.addEventListener('click', function(e) {
  var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  var xcor = e.offsetX
  var ycor = e.offsetY
  c.setAttribute("cx", xcor);
  c.setAttribute("cy", ycor);
  c.setAttribute("r", "5");
  c.setAttribute("fill", "red");
  c.setAttribute("stroke", "black");
  pic.appendChild(c);
  if(last){
    var a = document.createElementNS("http://www.w3.org/2000/svg", "line");
    a.setAttribute("x1", last.x);
    a.setAttribute("y1", last.y);
    a.setAttribute("x2", xcor);
    a.setAttribute("y2", ycor);
    a.setAttribute("stroke", "black");
    pic.appendChild(a);
  }
  last = {x: xcor, y: ycor};
}
);



// c.setAttribute("cx", 0);
// c.setAttribute("cy", 0);
// c.setAttribute("r", "100");
// c.setAttribute("fill", "red");
// c.setAttribute("stroke", "black");
//
// pic.appendChild(c);
