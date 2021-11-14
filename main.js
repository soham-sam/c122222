function setup() {
    video= createCapture(VIDEO);
    video.size(550,500);

    canvas= createCanvas(550,550);
    canvas.position(560,150);
    poseNet =ml5.poseNet(video,modelLoad);
    poseNet.on('pose',gotPoses);
}

function draw()
{
    background('#969A97');
    document.getElementById("sqare_side").innerHTML="width and height of a sqare will be"+difference+"px"
    Fill('#F90093');
    stroke('#F90093');
    square(noseY,noseX,difference);
}

function modelLoaded() {
    console.log('poseNet is intialized!');
}

function gotPoses(results) 
{
    if(results.length>0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX="+noseX+"noseY="+noseY);

        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
       difference=floor (leftWristX-rightWristX);
       console.log("leftWristX=" +leftWristX+"rightWrist="+rightWristX+"difference"+difference);
    }
}

noseX=0;
noseY=0;

difference=0;
rightWristX=0;
leftWristX=0;








