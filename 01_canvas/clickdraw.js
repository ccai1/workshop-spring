// getting variables in order
var c = document.getElementById("slate");
var ctx = c.getContext("2d");
var toggle = document.getElementById("toggle");
var mode = "box";
var clear = document.getElementById("clear");
var drawn = false
var warning = document.getElementById("warning");

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
    if (!drawn) {

      // stops the default action of the event from happening
      e.preventDefault()
      warning.innerHTML = "nothing to clear!"
    }
    else {
      warning.innerHTML = ""
      ctx.clearRect(0, 0, 600, 600)
      drawn = false;
    }

}
)

// draw the box or dot
c.addEventListener('click', function(e){

    //getting coordinates of mouse click, accounting for offset of page
    var xcor = e.offsetX;
    var ycor = e.offsetY;

    // draw box
    if (mode == "box") {
      drawn = true;
      ctx.fillRect(xcor, ycor, 50, 50);
    }

    //draw dot
    else {
      drawn = true;
      ctx.fillStyle = "black";

      // begins the path (can also reset the current path)
      ctx.beginPath();
      ctx.ellipse(xcor, ycor, 5, 5, Math.PI / 4, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.fill();
    }

  }
)
