song1="";
song2="";
leftWristX="";
leftWristY="";
rightWristX="";
rightWristY="";
song1_status="";
leftWrist_score=0;
function preload(){
    song_1=Loadsound("songs.mp3");
    song_2=Loadsound("ShowYourself.mp3");
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center;
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded()
{
    console.log('PoseNet Is Initialised');
}
function gotPoses(results)
{
    if(results.lenght > 0)
    {
        console.log(results);
        leftWrist_score=results[0].pose.keypoints[9].score;
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("Left Wrist X="+leftWristX+"Left Wrist Y="+leftWristY);
       rightWristX=results[0].pose.rightWrist.x;
       rightWristY=results[0].pose.rightWrist.y;
       console.log("Right Wrist X="+rightWristX+"Right Wrist Y="+rightWristY);
    }
}
function draw(){
    image(video,0,0,600,500);
    fill('#32CD32');
    stroke('#32CD32');
    song1_status.isPlaying();
    if(leftWrist_score > 0.2)
  {
    circle(leftWristX,leftWristY,20);
    song2.stop();    
  }
  if(song1_status == false){
    song1.play();
    document.getElementById("song_entry").innerHTML=song1_status;
  }
}

    
   