//********* Mobilemenu

//set variables that i'm thinking of using one for button and one for drop menu
var ddMenu = document.getElementsByClassName("mobilemenu")[0];
var visMenu = document.getElementsByTagName("ul")[0];


//add event listener over button and set function to drop/hide meu
ddMenu.addEventListener('click',
    function menuAppear() {
        console.log("starting to work");
        if (visMenu.style.display === "block") { visMenu.style.display = "none"; } else { visMenu.style.display = "block"; }
    }
);