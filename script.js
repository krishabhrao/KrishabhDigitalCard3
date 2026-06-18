// Share button
function shareCard() {

if (navigator.share) {

navigator.share({
title: "Krishabh Yadav | Software Developer",
text: "Connect with Krishabh Yadav at Radiant Computers",
url: window.location.href
});

}
else {

navigator.clipboard.writeText(window.location.href);

alert("Link copied to clipboard!");

}

}

// Smooth loading animation
window.addEventListener("load", () => {

document.querySelector(".card").style.opacity = "0";

setTimeout(() => {

document.querySelector(".card").style.transition = "1s";
document.querySelector(".card").style.opacity = "1";

}, 200);

});

// Particle background
particlesJS("particles-js", {

"particles": {

"number": {
"value": 80,
"density": {
"enable": true,
"value_area": 800
}
},

"color": {
"value": "#3b82f6"
},

"shape": {
"type": "circle"
},

"opacity": {
"value": 0.5,
"random": true
},

"size": {
"value": 3,
"random": true
},

"line_linked": {
"enable": true,
"distance": 150,
"color": "#60a5fa",
"opacity": 0.3,
"width": 1
},

"move": {
"enable": true,
"speed": 2,
"direction": "none",
"random": false,
"straight": false,
"out_mode": "out"
}

},

"interactivity": {

"detect_on": "canvas",

"events": {

"onhover": {
"enable": true,
"mode": "repulse"
},

"onclick": {
"enable": true,
"mode": "push"
},

"resize": true

},

"modes": {

"repulse": {
"distance": 120
},

"push": {
"particles_nb": 4
}

}

},

"retina_detect": true

});
