song1="music.mp3";
song2="Theme song.mp3";

leftWristX = 0;
leftWristY = 0;

RightWristX = 0;
RightWristY = 0;

function setup(){
canvas = createCanvas(600, 600);
    canvas.position(230,255);
    video = createCapture(VIDEO);
    video.hide();    
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses );
    }

    function preload(){
        song1 = loadSound("music.mp3");
    song2 = loadSound("Theme song.mp3")
  
    }

    function draw(){
        image(video,0,0,600,600);
    }

    function gotPoses(results){

        if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + " leftWristY = " + leftWristY);
        
        RightWristX = results[0].pose.rightWrist.x;
        RightWristY = results[0].pose.rightWrist.y;
        console.log("RightWristX = " + RightWristX + " RightWristY = " + RightWristY);
        }
        
        }

        function play(){
            song.play();
            song.setVolume(1);
        song.rate(1);
        }
        
        function modelLoaded(){
            console.log('poseNet is Initialized');
        }
        