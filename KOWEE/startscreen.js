var enhypen = document.getElementById("enhypen");
enhypen.addEventListener("click", function(event) {
    window.open("main.html", "_self");
});

var bts = document.getElementById("bts");
bts.addEventListener("click", function(event) {
    window.open("bts.html", "_self");
});

var itzy = document.getElementById("itzy");
itzy.addEventListener("click", function(event) {
    window.open("itzy.html", "_self");
});

var aespa = document.getElementById("aespa");
aespa.addEventListener("click", function(event) {
    window.open("aespa.html", "_self");
});

var txt = document.getElementById("txt");
txt.addEventListener("click", function(event) {
    window.open("txt.html", "_self");
});

var twice = document.getElementById("twice");
twice.addEventListener("click", function(event) {
    window.open("twice.html", "_self");
});

var blackpink = document.getElementById("blackpink");
blackpink.addEventListener("click", function(event) {
    window.open("blackpink.html", "_self");
});

var enhypen = document.getElementById("enhypen");
enhypen.addEventListener("click", function(event) {
    window.open("main.html", "_self");
});

var inputSearch = document.getElementById("searchInput");

inputSearch.addEventListener("keyup", function(event) {
    if(event.keyCode === 13) {
        if(inputSearch.value === "enhypen") {
            window.open("main.html", "_self");
        }
    }
    //BTS 
    if(event.keyCode === 13) {
        if(inputSearch.value === "bts") {
            window.open("bts.html", "_self");
        }
    }

    if(event.keyCode === 13) {
        if(inputSearch.value === "aespa") {
            window.open("aespa.html", "_self");
        }
    }

    if(event.keyCode === 13) {
        if(inputSearch.value === "txt") {
            window.open("txt.html", "_self");
        }
    }

    if(event.keyCode === 13) {
        if(inputSearch.value === "twice") {
            window.open("twice.html", "_self");
        }
    }

    if(event.keyCode === 13) {
        if(inputSearch.value === "blackpink") {
            window.open("blackpink.html", "_self");
        }

    }

    if(event.keyCode === 13) {
        if(inputSearch.value === "") {
            alert("enter a band");
        }
    }
});

// NEWSLETTER
var newsletter = document.getElementById("newsletter");

newsletter.addEventListener("click", function(event) {
    alert("newsletter");
});

var input2 = document.getElementsByClassName("searchInput1");

input2.addEventListener("keyup", function(event) {
    if(event.keyCode === 13) {
        if(input2.value === "bts") {
            window.open("bts.html", "_self");
        }
    }
})