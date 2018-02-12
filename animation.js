var c = document.getElementById('slate');
var ctx = c.getContext('2d')
var clear = document.getElementById("clear");
var stop = document.getElementById('stop');
var circle = document.getElementById('circle');
var dvd = document.getElementById('dvd');
var rid;

var clearCanvas = function(e){
    ctx.clearRect(0,0,500,500);
    window.cancelAnimationFrame(rid);
}

var stopAnimation = function() {
    window.cancelAnimationFrame(rid);
}

circle.onclick = function(){
    clear.click();

    var radius = 0;
    var rInc = 1;  //1 is increasing, -1 is decreasing

    var draw = function(){
      clear.click();
      ctx.beginPath();
      ctx.arc(c.height/2, c.width/2, radius, 0, 2*Math.PI);
      ctx.fill();

      if (rInc == 1){
        if (radius == 250){
          rInc = -1;
        }
      } else {
        if (radius == 0) {
          rInc = 1;
        } else {
          rInc = -1;
        }
      }
      radius += rInc;
      rid = window.requestAnimationFrame(draw);
    }
    draw();
}

dvd.onclick = function(){
  clear.click();

  var rectX = 100;
  var rectY = 50;

  var x = c.width/2;
  var y = c.height/2;

  var xInc = 2;
  var yInc = 2;

  var draw = function(){
    clear.click();
    ctx.fillRect(x, y, rectX, rectY);
    if( rectX + x == 500 || x == 0){
      xInc*=-1;
    } if (rectY + y == 500 || y == 0 ){
      yInc*=-1
    }
    x+= xInc;
    y+= yInc;
    rid = window.requestAnimationFrame(draw);
  }
  draw();
}

stop.addEventListener('click', stopAnimation);
clear.addEventListener('click', clearCanvas);
