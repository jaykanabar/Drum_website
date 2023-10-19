for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        var buttonhtml = this.innerHTML;
        makesound(buttonhtml);
        
    }
);}
document.addEventListener("keypress", function(event){
    makesound(event.key);
});

document.querySelectorAll("button")[0].addEventListener('click', function (){
   
});
document.querySelectorAll("button")[1].addEventListener('keypress', function (event){
    event.key = "w";
    
});
document.querySelectorAll("button")[2].addEventListener('click', function (){
    
});
document.querySelectorAll("button")[3].addEventListener('click', function (){
    
});
document.querySelectorAll("button")[4].addEventListener('click', function (){
    
});
document.querySelectorAll("button")[5].addEventListener('click', function (){
    
});
document.querySelectorAll("button")[6].addEventListener('click', function (){
    
});
 function makesound(key){
    switch(key){
        case "w":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/snare.mp3");
    audio.play();
        case "d":
            var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
        case "j":
            var audio = new Audio("sounds/tom-2.mp3");
    audio.play();
        case "k": 
        var audio = new Audio("sounds/tom-3.mp3");
    audio.play();   
        case "l":
            var audio = new Audio("sounds/tom-4.mp3");
    audio.play();
        case "a":
            var audio = new Audio("sounds/kick-bass.mp3");
    audio.play(); 
        default:
        prompt(buttonhtml); 
        }
 }
