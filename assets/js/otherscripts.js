//Blinking animation
(function blink() { 
      $('.blink_me').fadeOut(3000).fadeIn(3000, blink); 
})();

//Tabs
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tabcontent.length; i++) {
        tablinks[i].classList.remove("active");
    }
    document.getElementById(cityName).style.display = "block";
    if (evt) {evt.currentTarget.classList.add("active");}
}

