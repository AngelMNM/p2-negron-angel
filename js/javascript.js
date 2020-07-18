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
//variables that are or might be needed I think
// var accordionArticle = document.getElementsByClassName("aboutarticle");
// var accordionText = document.getElementsByClassName("aboutarticleText");
var accordionHead = document.getElementsByClassName("h3about");

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
}