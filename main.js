img = "";
status = "";
object = "";

function preload(){
img = loadImage('dog_cat.jpg');
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.centre();
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "status: detecting objects";

}

function modelLoaded(){
    console.log("modelLoaded!");
    status = true;
    objectDetector.detect(img,gotResult);
}

function gotResult(error, results){
   if(error){
       console.log(error);

   }

   console.log(results);
}

function draw(){

   image(img,0,0,640,420);
   fill("#FF0000");
   text("dog" ,45,75);
   noFill();
   stroke("#FF0000");
   rect(30,60,450,350);
   
   fill("FF0000");
   text("cat", 320,120);
   noFill();
   stroke("#FF0000");
   rect(300,90,90,270,320);
}

function draw(){
    image(img , 0,0,640,420);
    if(status!=""){
        for(i = 0; i<objects.length; i++){
           document.getElementById("status").innerHTML= "status : object detected";
           fill("#FF0000");
           percent = floor(objects[i].confidence*100);
           text(objects[i].label + " " + percent + "%"  , object[i].x +15, object[i].y+15);
           noFill();
           stroke("#FF0000");
           rect(objects[i].x,objects[i].y,object[i].width,object[i].height);
        }
    }
}



