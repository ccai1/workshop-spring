// getting variables in order
var c = document.getElementById("slate");
var ctx = c.getContext("2d");
var toggle = document.getElementById("toggle");
var mode = "box";
var clear = document.getElementById("clear");

// toggle the mode
toggle.addEventListener('click', function(e){

    // change mode state variable
    if (mode == "box") {
      mode = "dot";
    }
    else {
      mode = "box";
    }
}
)

// clear the canvas
clear.addEventListener('click', function(e){
    e.preventDefault()
    ctx.clearRect(0, 0, 600, 600)
}
)

// draw the box or dot
c.addEventListener('click', function(e){

    //getting coordinates of mouse click
    var xcor = e.offsetX;
    var ycor = e.offsetY;

    // draw box
    if (mode == "box") {
      ctx.fillRect(xcor, ycor, 50, 50);
    }

    //draw dot
    else {
      ctx.fillStyle = "black";
      ctx.beginPath();
      ctx.ellipse(xcor, ycor, 5, 5, Math.PI / 4, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.fill();
    }

  }
)
