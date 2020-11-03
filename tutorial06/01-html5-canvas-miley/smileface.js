window.onload=function() {
    var smile = document.getElementById("smileface1");
    var context = smile.getContext("2d");

    context.fillStyle = "rgb(144,238,143)";
    context.fillRect(0,0,600,600)
    
    context.beginPath();
    context.arc(300,300,200,0,2*Math.PI);
    context.fillStyle = "rgb(255,254,205)";
    context.fill();
    context.fillStroke = "black";
    context.lineWidth = 1;
    context.stroke();
    context.closePath();

    context.beginPath();
    context.arc(200,250,30,0,2*Math.PI);
    context.fillStyle = "black";
    context.fill();
    context.closePath();

    context.beginPath();
    context.arc(400,250,30,0,2*Math.PI);
    context.fillStyle = "black";
    context.fill();
    context.closePath();

    context.beginPath();
    context.moveTo(300,300)
    context.lineTo(300,350)
    lineWidth = 3;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();

    context.beginPath();
    context.arc(300,350,75,(1/9)*Math.PI,(8/9)*Math.PI,false);
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();

    context.beginPath();
    context.textAlign = "center";
    context.font = "35pt Calibri";
    context.strokeText("The canvas brought me to life",300,550);
    context.fillStyle = "black";
    context.fill();
    context.closePath();
   
}