var noOfButton = document.querySelectorAll(".key").length;
for(var i = 0; i<noOfButton; i++) {

document.querySelectorAll(".key")[i].addEventListener("click", function(){

    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
   
});    
}

document.addEventListener("keypress",function(event){
    makeSound(event.key)
});

    function makeSound(key){
        switch (key) {

            case "a":
                var a1 = new Audio("music/key01.ogg");
                a1.play();
            break;
            
            case "w":
                var a2 = new Audio("music/key02.ogg");
                a2.play();
            break;
            
            case "s":
                var a3 = new Audio("music/key03.ogg");
                a3.play();
            break;
            
            case "e":
                var a4 = new Audio("music/key04.ogg");
                a4.play();
            break;
            
            case "d":
                var a5 = new Audio("music/key05.ogg");
                a5.play();
            break;
    
            case "f":
                var a6 = new Audio("music/key06.ogg");
                a6.play();
            break;
            
            case "t":
                var a7 = new Audio("music/key07.ogg");
                a7.play();
            break;
    
            case "g":
                var a8 = new Audio("music/key08.ogg");
                a8.play();
            break;
    
            case "y":
                var a9 = new Audio("music/key09.ogg");
                a9.play();
            break;
    
            case "h":
                var a10 = new Audio("music/key10.ogg");
                a10.play();
            break;
    
            case "u":
                var a18= new Audio("music/key18.ogg");
                a18.play();
            break;
    
            case "j":
                var a19= new Audio("music/key19.ogg");
                a19.play();
                break;
    
            case "k":
                var a20= new Audio("music/key20.ogg");
                a20.play();
            break;
    
            case "o":
                var a21= new Audio("music/key21.ogg");
                a21.play();
            break;
    
            case "l":
                var a22= new Audio("music/key22.ogg");
                a22.play();
            break;
    
            case "p":
                var a23= new Audio("music/key23.ogg");
                a23.play();
            break;
    
            case ";":
                var a24= new Audio("music/key24.ogg");
                a24.play();
            break;
    
            default: console.log(buttonInnerHTML);
    
        }
    }

