let box1,box2,box3,box4,box5,box6,box7,box8,box9;
let id,player,turn;
let id1,id2,id3;
let o1,o2,o3,o4,o5,o6,o7,o8,x1,x2,x3,x4,x5,x6,x7,x8

let getinfo=()=>{
box1=document.getElementById("td1p").innerHTML;
box2=document.getElementById("td2p").innerHTML;
box3=document.getElementById("td3p").innerHTML;
box4=document.getElementById("td4p").innerHTML;
box5=document.getElementById("td5p").innerHTML;
box6=document.getElementById("td6p").innerHTML;
box7=document.getElementById("td7p").innerHTML;
box8=document.getElementById("td8p").innerHTML;
box9=document.getElementById("td9p").innerHTML;
}








let getmatchedid=()=>{
    
if(o1==true || x1==true){
   id1="td1p"
   id2="td2p"
   id3="td3p"
}
    
else if(o2==true || x2==true){
   id1="td4p"
   id2="td5p"
   id3="td6p"
}
            
else if(o3==true || x3==true){
   id1="td7p"
   id2="td8p"
   id3="td9p"
}
    
else if(o4==true || x4==true){
   id1="td1p"
   id2="td4p"
   id3="td7p"
}

else if(o5==true || x5==true){
   id1="td2p"
   id2="td5p"
   id3="td8p"
}

else if(o6==true || x6==true){
   id1="td3p"
   id2="td6p"
   id3="td9p"
}

else if(o7==true || x7==true){
   id1="td1p"
   id2="td5p"
   id3="td9p"
}

else if(o8==true || x8==true){
   id1="td3p"
   id2="td5p"
   id3="td7p"
}

document.getElementById(id1).style.animation="blink 1s 2"
document.getElementById(id2).style.animation="blink 1s 2"
document.getElementById(id3).style.animation="blink 1s 2"
//console.log(document.getElementById("td5p").style.animation)    
    
}











let wineffect=()=>{
    
document.getElementById(id1).style.fontSize="5rem" 
document.getElementById(id2).style.fontSize="5rem" 
document.getElementById(id3).style.fontSize="5rem"  
    
}








let win=()=>{   





getinfo()
 
 
 o1=box1=="o" && box2=="o" && box3=="o";
 o2=box4=="o" && box5=="o" && box6=="o"
 o3=box7=="o" && box8=="o" && box9=="o"
 o4=box1=="o" && box4=="o" && box7=="o"
 o5=box2=="o" && box5=="o" && box8=="o"
 o6=box3=="o" && box6=="o" && box9=="o"
 o7=box1=="o" && box5=="o" && box9=="o"
 o8=box3=="o" && box5=="o" && box7=="o"


 x1=box1=="x" && box2=="x" && box3=="x";
 x2=box4=="x" && box5=="x" && box6=="x"
 x3=box7=="x" && box8=="x" && box9=="x"
 x4=box1=="x" && box4=="x" && box7=="x"
 x5=box2=="x" && box5=="x" && box8=="x"
 x6=box3=="x" && box6=="x" && box9=="x"
 x7=box1=="x" && box5=="x" && box9=="x"
 x8=box3=="x" && box5=="x" && box7=="x"


 
 
 
 
//console.log(o1) 
 
if( o1==true || o2==true || o3==true || o4==true || o5==true || o6==true || o7==true || o8==true ){
  
 // console.log() 
eventof()  
document.getElementById("noticebox").innerHTML="First player wins the game"   

document.getElementById("table").style.backgroundColor="white"

getmatchedid()

wineffect()



}

 
else if( x1==true || x2==true || x3==true || x4==true || x5==true || x6==true || x7==true || x8==true ){
   
eventof()   
document.getElementById("noticebox").innerHTML="Second player wins the game"

document.getElementById("table").style.backgroundColor="tomato"


getmatchedid()

wineffect()



}
    



else{
    
if(turn==9){  
document.getElementById("noticebox").innerHTML="Match draw"
document.getElementById("table").style.backgroundColor="#555555"

}
        
}

    
        
}








let onclick=()=>{
    
if(player==1){
    
id=event.target.id    
document.getElementById(id+"p").style.color="white";
document.getElementById(id+"p").innerHTML="o";
document.getElementById("noticebox").innerHTML="Second player's turn";
document.getElementById(id).removeEventListener("click",onclick)
win()
player=2;
turn=turn+1;

}



else if(player==2){

id=event.target.id    
document.getElementById(id+"p").style.color="tomato";
document.getElementById(id+"p").innerHTML="x";
document.getElementById("noticebox").innerHTML="First player's turn";
document.getElementById(id).removeEventListener("click",onclick)
win()
player=1;
turn=turn+1;   
    
}


     
}








let eventon=()=>{

let i=1;
while(i<10){
id="td"+i;
document.getElementById(id).addEventListener("click",onclick);
i++   
}

}



let boxclean=()=>{
    
let i=1;
while(i<10){
id="td"+i+"p";
document.getElementById(id).innerHTML=""; 
i++   
}  
       
}


let eventof=()=>{
  
let i=1;
while(i<10){
id="td"+i;
document.getElementById(id).removeEventListener("click",onclick); 
i++     
}   
        
}








let fontrenew=()=>{
    
let i = 1   
while(i<10){
        document.getElementById("td"+i+"p").style.fontSize="3rem"
   
i++     
}
    
        
}






let start=()=>{
player=1;
turn=1; 

boxclean() 
eventon()  
fontrenew()

document.getElementById("table").style.backgroundColor="#000165"

document.getElementById("noticebox").innerHTML="First player's turn";  

document.getElementById("start").innerHTML="start again"   
 

     
}








