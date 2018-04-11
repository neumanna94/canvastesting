let newBalloon = {
  score: 0,
  content: `Those who maintain the Homeric poems to have been written from the
beginning, rest their case, not upon positive.`,
  lifetime: 10
};
let newBalloon2 = {
  score: 0,
  content: `Testing this balloon number two`,
  lifetime: 20
};
let newBalloon3 = {
  score: 0,
  content: `Testing this balloon number two`,
  lifetime: 1
};


// width = 1500 height = 800
function drawBalloon(c, balloon, i, w, h,t){
  c.fillStyle = "#ffffff"
  c.beginPath();
  c.arc(w/10 + w/5*i,h-(w/10)-(t/balloon.lifetime*(h-w/5)),(w/10)-10,0,2*Math.PI);
  // c.arc(150+300*i,650,140,0,2*Math.PI);
  c.stroke();
  c.closePath();
  c.fill();
  c.fillStyle = "#000000"
  c.font = (w/100).toString()+'px Courier';
  c.textAlign = 'center';
  generateBalloonText(c, balloon, i, w, h,t);
  // c.fillText(balloon.content.slice(0,19),w/10 + w/5*i,(h-(w/10)+(w/200) - 4*w/75)-(t/balloon.lifetime*(h-w/5)));
  // //Length = 23;
  // c.fillText(balloon.content.slice(0,22),w/10 + w/5*i,h-(w/10)+(w/200) - 3*w/75-(t/balloon.lifetime*(h-w/5)));
  // //Length = 25;
  // c.fillText(balloon.content.slice(0,24),w/10 + w/5*i,h-(w/10)+(w/200) - 2*w/75-(t/balloon.lifetime*(h-w/5)));
  // //Length = 27;
  // c.fillText(balloon.content.slice(0,26),w/10 + w/5*i,h-(w/10)+(w/200) - w/75-(t/balloon.lifetime*(h-w/5)));
  // //Length = 28;
  // c.fillText(balloon.content.slice(0,27),w/10 + w/5*i,h-(w/10)+(w/200)-(t/balloon.lifetime*(h-w/5)));
  // //Length = 27;
  // c.fillText(balloon.content.slice(0,26),w/10 + w/5*i,h-(w/10)+(w/200) + w/75 -(t/balloon.lifetime*(h-w/5)));
  // //Length = 25;
  // c.fillText(balloon.content.slice(0,24),w/10 + w/5*i,h-(w/10)+(w/200) + 2*w/75-(t/balloon.lifetime*(h-w/5)));
  // //Length = 23;
  // c.fillText(balloon.content.slice(0,22),w/10 + w/5*i,h-(w/10)+(w/200) + 3*w/75-(t/balloon.lifetime*(h-w/5)));
  // //Length = 20;
  // c.fillText(balloon.content.slice(0,19),w/10 + w/5*i,h-(w/10)+(w/200) + 4*w/75-(t/balloon.lifetime*(h-w/5)));
}

function generateBalloonText(c, balloon, i, w, h, t){
  let contentLength = balloon.content.length;
  if(contentLength > 180){
    console.log("content too long");
    return false;
  }
  let totalLines = Math.ceil(contentLength/20);
  let firstIndex = 0;
  let lastIndex = 20;
  for(let j = -((totalLines-1)/2); j <= ((totalLines-1)/2); j ++){
    c.fillText(balloon.content.slice(firstIndex, lastIndex),w/10 + w/5*i,h-(w/10)+(w/200)+ j*(w/75) -(t/balloon.lifetime*(h-w/5)));
    firstIndex += 20;
    lastIndex = Math.min(lastIndex+20, balloon.content.length)
  }

}

function redrawBalloons(c){
  let t=0;
  setInterval(function() {
    c.clearRect(0, 0, 1500, 800);
    drawBalloon(c, newBalloon, 0, 1500, 800, t/100);
    drawBalloon(c, newBalloon2, 1, 1500, 800, t/100);
    drawBalloon(c, newBalloon3, 2, 1500, 800, t/100);
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
