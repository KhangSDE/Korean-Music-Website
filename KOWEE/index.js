// POP UP AN AUS
var popUp = document.getElementById("popUpMenu");
var isShown = false;

var menu = document.getElementById("menu");
menu.addEventListener("click", function(event) {

    event.stopPropagation();

    if(isShown == false) {
        popUp.style.visibility = "visible";
        loginMenu.style.visibility = "hidden";
        cartMenu.style.visibility = "hidden";
        amount.style.visibility = "hidden";
        isShown = true;
    }
    
    else if(isShown == true) {
        popUp.style.visibility = "hidden";
        isShown = false;
    }
    
})
// LOGIN MENU AN AUS
var login = document.getElementById("login");
var loginMenu = document.getElementById("loginMenu");



login.addEventListener("click", function(event) {
    
    event.stopPropagation();

    if(isShown == false) {
        loginMenu.style.visibility = "visible";
        popUp.style.visibility = "hidden";
        cartMenu.style.visibility = "hidden";
        amount.style.visibility = "hidden";
        isShown = true;


    }
    else {
        loginMenu.style.visibility = "hidden";
        isShown = false;
    }
});


// LOGIN



var user = document.getElementById("user");
var password = document.getElementById("password");
var loginButton = document.getElementById("enterLogin");

user.addEventListener("keyup", function(event) {
    if(event.keyCode === 13) {
        event.preventDefault();
        password.focus();
        
    }

})

password.addEventListener("keyup", function(event) {
    if(event.keyCode === 13) {
        event.preventDefault();
        password.blur();
        
    }
})

// Mouse Click Closing DIV'S,geöffnete DIVS schließen


    document.addEventListener("click", function(event) {
        if (
          isShown === true &&
          event.target !== menu &&
          event.target !== login &&
          !loginMenu.contains(event.target) &&
          !popUp.contains(event.target) &&
          !cartMenu.contains(event.target) &&
          !amount.contains(event.target)

          
        ) {
          loginMenu.style.visibility = "hidden";
          popUp.style.visibility = "hidden";
          cartMenu.style.visibility = "hidden";
          amount.style.visibility = "hidden";

          isShown = false;
        }
      }); 




    // GAP

    user.addEventListener("click", function(event) {
        event.stopPropagation(); // Prevent event bubbling to the document
    });
    
    password.addEventListener("click", function(event) {
        event.stopPropagation(); // Prevent event bubbling to the document
    });


// CONTACT
var cm = document.getElementById("contactMenu");
var contact = document.getElementById("contact");
var bb = document.getElementsByTagName("section");

contact.addEventListener("click", function(event) {

        cm.style.visibility = "visible";
        popUp.style.visibility = "hidden"; 
        // FILTER BLUR
        bb.style.webkitFilter = "blur(5px)";
        bb.style.mozFilter = "blur(5px)";
        bb.style.oFilter = "blur(5px)";
        bb.style.msFilter = "blur(5px)";
        bb.style.filter = "blur(5px)";


})

var close = document.getElementById("close");
close.addEventListener("click", function(event) {
    cm.style.visibility = "hidden";
})

var login2 = document.getElementById("login2");
login2.addEventListener("click", function(event) {

})

// CART, WARENKORB BEFEHL

var cart = document.getElementById("cart");
var cartMenu = document.getElementById("cartMenu");

cart.addEventListener("click", function(event) {
    
    event.stopPropagation();

    if(isShown === false) {
        cartMenu.style.visibility = "visible";
        loginMenu.style.visibility = "hidden";
        popUp.style.visibility = "hidden";
        amount.style.visibility = "hidden";
        isShown = true;
    }
    else if (isShown === true) {
        cartMenu.style.visibility = "hidden";
        isShown = false;
    }
    

})



// ONCLICK ALBUM, AlBUM SWITCH

var names = ["DAY ONE", "CARNIVAL", "DILEMMA", "ANSWER", "MANIFESTO DAY 1"];

var click1 = document.getElementById("album-click1");
var click2 = document.getElementById("album-click2");
var click3 = document.getElementById("album-click3");
var click4 = document.getElementById("album-click4");
var click5 = document.getElementById("album-click5");




var albumClick = document.getElementsByClassName("image-album");
var albumCover = document.getElementById("imageLogo");
var albumName = document.getElementById("album-name");
var test = document.getElementsByClassName("album-name1");

for(var i = 0; i <albumClick.length; i++) {
    albumClick[i].addEventListener("click", function(event) {
        

        var clickChange = event.target.src;
        albumCover.src = clickChange;
        
       // updateImage(clickChange);
        
        
        var albumElement = event.target.nextSibling;
        while (albumElement && albumElement.nodeType !== 1) {
          albumElement = albumElement.nextSibling;
        }
        var albumTitle = albumElement.textContent;
    
        
        albumName.style.visibility = "visible";
        albumName.innerHTML = albumTitle;

        

    })
}

function updateImage(imageUrl) {
    var cartImage = document.getElementById("cart-image");
    cartImage.src = imageUrl;
}

// AMOUNT CLICK / Anzahl Warenkorb

var amount = document.getElementById("amount");
var anzahlButton = document.getElementById("anzahl");


anzahlButton.addEventListener("click", function(event) {
    
    event.stopPropagation();

    if(isShown == false) {
        amount.style.visibility = "visible";
        isShown = true;
    } 
    else if (isShown == true) {
        amount.style.visibility = "hidden";
        isShown = false;
    }
    

})

// WARENKORB / BUY BUTTON
var buy = document.getElementById("buy");
var buyChecked = document.getElementById("buy-checked");
var noti = document.getElementById("cart-amount");
var cartImage = document.getElementById("cart-image");

var buyNum = 1;
var cartAmount = 0;

buy.addEventListener("click", function(event) {
   /* buyChecked.style.visibility = "visible"; */
   
    
    buyChecked.classList.add("show");
    setTimeout(function() {
        buyChecked.classList.remove("show");
    }, 1000);


    noti.style.visibility = "visible";

    noti.innerHTML = buyNum;
    
    //
    
            
    
       // var clickChange = event.target.src;
    cartImage.src = albumCover;
            
    updateImage(clickChange);
      
    
            
    
            
    
        
    
    //
    
})

// WARENKORB NOTIFICATION 1

var amount1 = document.getElementById("amount-1");
var amount2 = document.getElementById("amount-2");
var amount3 = document.getElementById("amount-3");
var amount4 = document.getElementById("amount-4");
var amount5 = document.getElementById("amount-5");

amount1.addEventListener("click", function(event) {
    buyNum = 1;
    amount.style.visibility = "hidden";
});

amount2.addEventListener("click", function(event) {
    buyNum = 2;
    amount.style.visibility = "hidden";
})

amount3.addEventListener("click", function(event) {
    buyNum = 3;
    amount.style.visibility = "hidden";
});

amount4.addEventListener("click", function(event) {
    buyNum = 4;
    amount.style.visibility = "hidden";
});

amount5.addEventListener("click", function(event) {
    buyNum = 5;
    amount.style.visibility = "hidden";
});


// SONGS

var audio1 = new Audio("audios/dd.mp3");
var audio2 = new Audio("audios/td.mp3");
var audio3 = new Audio("audios/f.mp3");
var audio4 = new Audio("audios/bm.mp3");
var audio5 = new Audio("audios/gt.mp3");


var song1 = document.getElementById("song1");
var song2 = document.getElementById("song2");
var song3 = document.getElementById("song3");
var song4 = document.getElementById("song4");
var song5 = document.getElementById("song5");

var animationSong = document.getElementById("animation-song");


let isPlaying = false;
song1.addEventListener("click", function(event) {
    
    if(isPlaying === false) {
        audio1.play();
        animationSong.style.visibility = "visible";
        isPlaying = true;
        
    }
        else if(isPlaying === true) {
        audio1.pause();
        animationSong.style.visibility = "hidden";
        isPlaying = false;
    }
});

song2.addEventListener("click", function(event) {
    
    if(isPlaying === false) {
        audio2.play();
        animationSong.style.visibility = "visible";
        isPlaying = true;
    }
        else if(isPlaying === true) {
        audio2.pause();
        animationSong.style.visibility = "hidden";
        isPlaying = false;
    }
});

song3.addEventListener("click", function(event) {
    
    if(isPlaying === false) {
        audio3.play();
        animationSong.style.visibility = "visible";
        isPlaying = true;
    }
        else if(isPlaying === true) {
        audio3.pause();
        animationSong.style.visibility = "hidden";
        isPlaying = false;
    }
});

song4.addEventListener("click", function(event) {
    
    if(isPlaying === false) {
        audio4.play();
        animationSong.style.visibility = "visible";
        isPlaying = true;
    }
        else if(isPlaying === true) {
        audio4.pause();
        animationSong.style.visibility = "hidden";
        isPlaying = false;
    }
});

song5.addEventListener("click", function(event) {
    
    if(isPlaying === false) {
        audio5.play();
        animationSong.style.visibility = "visible";
        isPlaying = true;
    }
        else if(isPlaying === true) {
        audio5.pause();
        animationSong.style.visibility = "hidden";
        isPlaying = false;
    }
});

