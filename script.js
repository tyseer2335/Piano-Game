for (var i = 0; i<document.querySelectorAll(".white-key").length; i++) {  
        document.querySelectorAll(".white-key")[i].addEventListener("click", function(){  
            var buttonHTML = this.className.split(' ')[1];
            makeSound (buttonHTML); 
            buttonAnimation(buttonHTML);
    });
} 
 
document.addEventListener("keydown", function (event){ 
    makeSound (event.key) 
    buttonAnimation(event.key);
});
   
function makeSound (key) { 
    switch (key) {
        case "q":
          var C4 = new Audio("sounds/C4.mp3");
          C4.play();  
          break;
    
        case "w":
          var D4 = new Audio("sounds/D4.mp3");
          D4.play(); 
          break;
    
        case "e":
          var E4 = new Audio('sounds/E4.mp3');
          E4.play();
          break;
    
        case "r":
          var F4 = new Audio('sounds/F4.mp3');
          F4.play();
          break;
    
        case "t":
          var G4 = new Audio('sounds/G4.mp3');
          G4.play();
          break; 
            
        case "y":
         var A4 = new Audio('sounds/A4.mp3');
         A4.play();
         break;
     
        case "u":
         var B4 = new Audio('sounds/B4.mp3');
         B4.play();
         break; 
       
        case "i":
        var C5 = new Audio('sounds/C5.mp3');
         C5.play();
        break;  

        case "o":
        var D5 = new Audio('sounds/D5.mp3');
        D5.play();
        break;  
     
        case "p":
        var E5 = new Audio('sounds/E5.mp3');
        E5.play();
        break; 

        default: console.log(key); 
    }
}  
  
function buttonAnimation (currentKey) { 
    var activeButton = document.querySelector("." + currentKey)
    activeButton.classList.add("pressed");  
    setTimeout(function() {  
      activeButton.classList.remove("pressed"); 
     }, 100);
  }