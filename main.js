song="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
scoreLeftWrist="";

function setup(){
    canvas=createCanvas(600,500);
    canvas.center;

    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
image(video ,0,0,600,500);
fill("#fc3b2d");
stroke("#64d9a2");


circle(leftWristX,leftWristY,20);
InNumberleftwristY=Number(leftWristY);
remove_decimals=floor(InNumberleftwristY);
volume=remove_decimals/500;
leftWristY_divide_1000=remove_decimals/1000;
volume=leftWristY_divide_1000*2;
document.getElementById("volume").innerHTML="Volume = "+ volume;
song.setVolume(volume);

}

function preload(){
    song=loadSound("We Rollin (Official Audio) - Shubh.mp3");

}

function play(){
    song.play();
    song.rate(1);
    song.setVolume(1);
}

function modelLoaded(){
    console.log("poseNet model loaded");

}

function gotPoses(results){
if(results.length>0)
{
    console.log(results);
    scoreLeftWrist=results[0].pose.keypoints[9].score;
    console.log("scoreLeftWrist = " + scoreLeftWrist);

    leftWristX=results[0].pose.leftWrist.x;
    leftWristY=results[0].pose.leftWrist.y;
    console.log("leftWristX = " + leftWristX + " leftWristY = " + leftWristY);

    rightWristX=results[0].pose.rightWrist.x;
    rightWristY=results[0].pose.rightWrist.y;
    console.log("rightWristX = " + rightWristX + " rightWristY = " + rightWristY);
}
}