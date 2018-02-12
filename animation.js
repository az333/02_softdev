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

stop.onclick = function() {
    window.cancelAnimationFrame(rid);
}

circle.onclick = function(){
    clear.click();

    var radius = 0;
    var mode = "big";

    var draw = function(){
      clear.click();
      ctx.beginPath();
      ctx.arc(c.height/2, c.width/2, radius, 0, 2*Math.PI);
      ctx.fill();
      if (mode == "big"){
        if (radius <= 249){
          radius ++;
        } else {
          radius --;
          mode = "small";
        }
      } else {
        if (radius >= 1) {
          radius --;
        } else {
          radius ++;
      		mode = "big";
        }
      }
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


clear.addEventListener('click', clearCanvas);
