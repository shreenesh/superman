var canvas =new fabric.Canvas("mycanvas");
x=10;
y=10;
bw=30;
bh=30;

var pobject="";
var block_object="";

function player_png(){
    fabric.Image.fromURL("player.png",function(Img) {
  pobject=Img;
  pobject.scaleToWidth(150);    
  pobject.scaleToHeight(140); 
  pobject.set({ top:y, left:x }); canvas.add(pobject);
    });
}
function new_Image(get_Image){
    fabric.Image.fromURL(get_Image,function(Img) {
  block_object=Img;
  block_object.scaleToWidth(bw);    
  block_object.scaleToHeight(bh); 
  block_object.set({ top:y, left:x }); canvas.add(block_object);
    });
}