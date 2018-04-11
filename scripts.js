let newBalloon = {
  score: 0,
  content: 'Testing this balloon newBalloon',
  lifetime: 10
};
let newBalloon2 = {
  score: 0,
  content: `Testing this balloon number two`,
  lifetime: 20
};// width = 1500 height = 800
function drawBalloon(c, balloon, i, w, h,t){
  c.beginPath();
  c.arc(w/10 + w/5*i,h-(w/10)-(t/balloon.lifetime*(h-w/5)),(w/10)-10,0,2*Math.PI);
  // c.arc(150+300*i,650,140,0,2*Math.PI);
  c.stroke();
  c.font = (w/100).toString()+'px Courier';
  c.textAlign = 'center';
  c.fillText("01234567890123456789",w/10 + w/5*i,(h-(w/10)+(w/200) - 4*w/75)-(t/balloon.lifetime*(h-w/5)));
  c.fillText("01234567890123456789012",w/10 + w/5*i,h-(w/10)+(w/200) - 3*w/75-(t/balloon.lifetime*(h-w/5)));
  c.fillText("0123456789012345678901234",w/10 + w/5*i,h-(w/10)+(w/200) - 2*w/75-(t/balloon.lifetime*(h-w/5)));
  c.fillText("012345678901234567890123456",w/10 + w/5*i,h-(w/10)+(w/200) - w/75-(t/balloon.lifetime*(h-w/5)));
  c.fillText("0123456789012345678901234567",w/10 + w/5*i,h-(w/10)+(w/200)-(t/balloon.lifetime*(h-w/5)));
  c.fillText("012345678901234567890123456",w/10 + w/5*i,h-(w/10)+(w/200) + w/75 -(t/balloon.lifetime*(h-w/5)));
  c.fillText("0123456789012345678901234",w/10 + w/5*i,h-(w/10)+(w/200) + 2*w/75-(t/balloon.lifetime*(h-w/5)));
  c.fillText("01234567890123456789012",w/10 + w/5*i,h-(w/10)+(w/200) + 3*w/75-(t/balloon.lifetime*(h-w/5)));
  c.fillText("01234567890123456789",w/10 + w/5*i,h-(w/10)+(w/200) + 4*w/75-(t/balloon.lifetime*(h-w/5)));
}

function redrawBalloons(c){
  let t=0;
  setInterval(function() {
    c.clearRect(0, 0, 1500, 800);
    drawBalloon(c, newBalloon, 0, 1500, 800, t/100);
    drawBalloon(c, newBalloon2, 1, 1500, 800, t/100);
    drawBalloon(c, newBalloon, 2, 1500, 800, t/100);
    drawBalloon(c, newBalloon2, 3, 1500, 800, t/100);
    drawBalloon(c, newBalloon, 4, 1500, 800, t/100);
    // if(i<9){i++};
    t++;
  }, 50);
}
function createCanvas(){
  var canvas = document.getElementById("myCanvas");
  var c = canvas.getContext("2d");
  redrawBalloons(c);

}
