canvas=document.getElementById("canvas1");
ctx=canvas.getContext("2d");

roverwidth=100;
roverheight=80;
current_position_of_x=100;
current_position_of_y=200;

backgroundimage="car1.png";
roverimage="car2.jpeg";

function add() {
    backgroundimage1=new Image();
    backgroundimage1.onload=uploadbackground;
    backgroundimage1.src=backgroundimage;
    roverimage1=new Image();
   roverimage1.onload=uploadrover;
    roverimage1.src=roverimage;
    
}
function uploadbackground() {
ctx.drawImage(backgroundimage1,0,0,canvas.width, canvas.height);

}
function uploadrover() {
    ctx.drawImage(roverimage1,current_position_of_x,current_position_of_y,roverwidth,roverheight);
    
    }