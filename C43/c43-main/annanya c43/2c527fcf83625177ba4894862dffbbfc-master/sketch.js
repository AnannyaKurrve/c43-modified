var clock;
var hourHand,minuteHand,secondsHand;
var minuteAngle,secondsAngle,hourAngle;

function setup(){
    createCanvas(400,400);
    angleMode(DEGREES);
}

function draw(){
    background("black");
    translate(200,200);
    rotate(-90);
    minuteHand=minute();
    hourHand=hour();
    secondsHand=second();
    minuteAngle=map(minuteHand,0,60,0,360);
    hourAngle=map(hourHand%12,0,12,0,360);
    secondsAngle=map(secondsHand,0,60,0,360);


    push();
    rotate(secondsAngle);
    stroke("red");
    strokeWeight(7);
    line(0,0,100,0);
    pop();

    push();
    rotate(minuteAngle);
    stroke("blue");
    strokeWeight(7);
    line(0,0,75,0);
    pop();

    push();
    rotate(hourAngle);
    stroke("green");
    strokeWeight(7);
    line(0,0,50,0);
    pop();

    stroke(255,0,255);
    point(0,0);
    strokeWeight(10);
    noFill();


    stroke("red");
    arc(0,0,300,300,0,secondsAngle);
    stroke("blue");
    arc(0,0,280,280,0,minuteAngle);
    stroke("green");
    arc(0,0,260,260,0,hourAngle);
}