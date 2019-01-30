var c = document.getElementById("slate");
var ctx = c.getContext("2d");
var toggle = document.getElementById("toggle");
var mode = document.getElementById("mode");
var clear = document.getElementById("clear");

toggle.addEventListener('click', function(e){
    if (mode.innerHTML == "box") {
      mode.innerHTML = "dot"
    }
    else {
      mode.innerHTML = "box"
    }
}
)

clear.addEventListener('click', function(){
    console.log("clear")
    ctx.clearRect(0, 0, 600, 600)
}
)

c.addEventListener('click', function(e){
    var xcor = e.clientX;
    var ycor = e.clientY;
    if (mode.innerHTML == "box") {
      ctx.fillRect(xcor, ycor, 50, 50);
    }
    else {
      ctx.fillStyle = "black";
      ctx.beginPath();
      ctx.ellipse(xcor, ycor, 5, 5, Math.PI / 4, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.fill();
    }

  }
)
