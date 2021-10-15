function take_pic() {
    save('mypicture.png')
}
function preload(){
clown_nose=loadImage('https://i.postimg.cc/x8S2VWqX/hairy-as-hair.png')
}
function draw() {
image(video,0,0,300,300)
image(clown_nose,nosex,nosey,52,30)
}
var nosex=0
var nosey=0
function setup() {
canvas=createCanvas(300,300)
canvas.center();
video=createCapture(VIDEO)
video.size(300,300)
video.hide()
posenet=ml5.poseNet(video,modelLoaded)
posenet.on('pose',gotposes)
}
function gotposes(results){
   if(results.length>0)
   {
       console.log(results)
       console.log("nose x = " + results[0].pose.nose.x);
       console.log("nose y = " + results[0].pose.nose.y);
       nosex=results[0].pose.nose.x-28
       nosey=results[0].pose.nose.y+8
}}
function modelLoaded(){
    console.log("model is initiallized")
}