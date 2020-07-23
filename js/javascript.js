//********* Mobilemenu

//set variables that i'm thinking of using one for button and one for drop menu
var ddMenu = document.getElementsByClassName("mobilemenu")[0];
var visMenu = document.getElementsByTagName("ul")[0];


//add event listener over button and set function to drop/hide meu
ddMenu.addEventListener('click',
    function menuAppear() {
        // console.log("starting to work");
        if (visMenu.style.display === "block") { visMenu.style.display = "none"; } else { visMenu.style.display = "block"; }
    }
);

//********* Accordions

// ---------------------------------------  Rewrite
// select all h3 headers 
var accordionHead = document.querySelectorAll(".abouth3");
// select all text boxes under h3
var accordionText = document.querySelectorAll(".aboutarticleText");

for (i = 0; i < accordionHead.length; i++) {
    accordionHead[i].addEventListener('click', function() {
        console.log('This is kind of working');
        this.classList.toggle("aboutarticletext");

        var nextelement = this.nextElementSibling;
        if (nextelement.style.display === "block") {
            nextelement.style.display = "none";
            // nextelement.style.transition = "2s";
        } else {
            nextelement.style.display = "block";
        }
    })
};


// Popup Ad
//get ad and set it to a variable
var ad = document.getElementById("popupAd");


//set popup ad to visible
function timerVisible() {
    ad.style.display = "block"
};

//set popup ad to invisible
function timerInVisible() {
    ad.style.display = "none"
};


timerInVisible();
setTimeout(timerVisible, 10000);
setTimeout(timerInVisible, 7000);


// function popupOff() {
//     var1 = setTimeout(function() { ad.style.display = "block" }, 5000);
//     var2 = setTimeout(function() { ad.style.display = "none" }, 5000);

// };

// popupOff(var1, var2);