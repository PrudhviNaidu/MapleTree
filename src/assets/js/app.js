import $ from "jquery";
import "what-input";

// Foundation JS relies on a global varaible. In ES6, all imports are hoisted
// to the top of the file so if we used`import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
require("foundation-sites");

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

$(document).foundation();

anime
  .timeline({ loop: false })
  .add({
    targets: ".ml5 .line",
    opacity: [0.5, 1],
    scaleX: [0, 1],
    easing: "easeInOutExpo",
    duration: 500
  })
  .add({
    targets: ".ml5 .line",
    duration: 1500,
    easing: "easeOutExpo",
    delay: 100,
    translateY: function(e, i, l) {
      var offset = -0.625 + 0.625 * 2 * i;
      return offset + "em";
    }
  })
  .add({
    targets: ".ml5 .ampersand",
    opacity: [0, 1],
    scaleY: [0.5, 1],
    easing: "easeOutExpo",
    duration: 500,
    offset: "-=600",
    delay: 100
  })
  .add({
    targets: ".ml5 .letters-left",
    opacity: [0, 1],
    translateX: ["0.5em", 0],
    easing: "easeOutExpo",
    duration: 2000,
    offset: "-=300",
    delay: 100
  })
  .add({
    targets: ".ml5 .letters-right",
    opacity: [0, 1],
    translateX: ["-0.5em", 0],
    easing: "easeOutExpo",
    duration: 2000,
    offset: "-=600",
    delay: 100
  })
  .add({
    targets: ".ml5",
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

anime
  .timeline({ loop: false })
  .add({
    targets: ".ml52 .linee2",
    opacity: [0.5, 1],
    scaleX: [0, 1],
    easing: "easeInOutExpo",
    duration: 500
  })
  .add({
    targets: ".ml52 .linee2",
    duration: 1500,
    easing: "easeOutExpo",
    delay: 100,
    translateY: function(e, i, l) {
      var offset = -0.325 + 0.325 * 2 * i;
      return offset + "em";
    }
  })
  .add({
    targets: ".ml52 .ampersand2",
    opacity: [0, 1],
    scaleY: [0.5, 1],
    easing: "easeOutExpo",
    duration: 500,
    offset: "-=600",
    delay: 100
  })
  .add({
    targets: ".ml52 .letters-left2",
    opacity: [0, 1],
    translateX: ["0.5em", 0],
    easing: "easeOutExpo",
    duration: 2000,
    offset: "-=300",
    delay: 100
  })
  .add({
    targets: ".ml52 .letters-right2",
    opacity: [0, 1],
    translateX: ["-0.5em", 0],
    easing: "easeOutExpo",
    duration: 2000,
    offset: "-=600",
    delay: 100
  })
  .add({
    targets: ".ml52",
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });


var modal = document.getElementById("myModal");

var img = document.getElementById("myImg");
var img2 = document.getElementById("myImg2");
var img3 = document.getElementById("myImg3");
var img4 = document.getElementById("myImg4");
var img5 = document.getElementById("myImg5");

var modalImg = document.getElementById("img01");
img.onclick = function() {
  modal.style.display = "block";
};
img2.onclick = function() {
  modal.style.display = "block";
};
img3.onclick = function() {
  modal.style.display = "block";
};
img4.onclick = function() {
  modal.style.display = "block";
};
img5.onclick = function() {
  modal.style.display = "block";
};

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
};

