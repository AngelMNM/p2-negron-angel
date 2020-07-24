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


// ****************************** Popup Ad
//get ad and set it to a variable
var ad = document.getElementById("popupAd");


//set popup ad to visible, unless it is the Join page
function timerVisible() {
    ad.style.display = "block";
    if (document.getElementsByTagName("title")[0].innerHTML === "Round Valley Trout Association - Join") {
        ad.style.display = "none"
    }
};

//set popup ad to invisible
function timerInVisible() {

    ad.style.display = "none"


};

//makes sure ad is invisible immediately as page loads
timerInVisible();

//makes popup ad visible after 9 secs from page load
setTimeout(timerVisible, 9000);

//makes popup invisible again after 18 secs from page load (9 secs of visibility) *took me forever to figue this one out, but i did it :)
setTimeout(timerInVisible, 18000);



//***********************Weather API****************************** */
//get pull data from free ACCuweather API and place results in weather section

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var apiResult = JSON.parse(this.responseText);


        //variables from API
        var temperature = apiResult[0].Temperature.Imperial.Value;
        var covering = apiResult[0].WeatherText;
        console.log(covering + "  " + temperature);


        //Node Elements from HTML
        var weatherSection = document.getElementById('weathers');
        var temperatureText = weatherSection.getElementsByTagName('p')[0];
        var typeofCover = weatherSection.getElementsByTagName('p')[1];

        //create new text nodes to place
        var newTextTemp = document.createTextNode(temperatureText);
        var newCover = document.createTextNode(typeofCover);
        var spanTag = document.createElement('SPAN');
        var spanTag2 = document.createElement('SPAN');

        // test new tag
        temperatureText.appendChild(spanTag).innerHTML = temperature + "F";
        typeofCover.appendChild(spanTag2).innerHTML = covering;

    }
};
xmlhttp.open('GET', 'http://dataservice.accuweather.com/currentconditions/v1/3288_PC?apikey=Im2che9xPgrTNtPH4sY4qOiK93fVAoRy', true);
xmlhttp.send();