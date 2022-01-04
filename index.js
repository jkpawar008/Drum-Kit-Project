// document.querySelector("button").addEventListener("click" , buttonClickFunction);

// function buttonClickFunction() {
//      alert("this button is clicked !");
// }

// the above same thing is done by anonymous function by matured programmers like below;
// document.querySelectorAll("button")[i].addEventListener("click" , function() {

//     alert(i + " th button is clicked !");
//     i++;
// });

// var lim = document.getElementsByClassName("drum").length;
// or same can be done by
var lim = document.querySelectorAll(".drum").length;

// var audio = new Audio('sounds/crash.mp3');   to play the sound
// audio.play();

for (var i = 0; i < lim; i++) {
  // document.querySelectorAll("button")[i].addEventListener("click" , buttonClickFunction);
  //I have choose anonymous function to use functionality of "this" keyword here ..
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    // console.log(this);
    // console.log(this.textContent);
    switch (this.textContent) {
      case "w":
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
        buttonAnimation(this.textContent);
        break;
      case "a":
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
        buttonAnimation(this.textContent);
        break;
      case "s":
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
        buttonAnimation(this.textContent);
        break;
      case "d":
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
        buttonAnimation(this.textContent);
        break;
      case "j":
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
        buttonAnimation(this.textContent);
        break;
      case "k":
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
        buttonAnimation(this.textContent);
        break;
      case "l":
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
        buttonAnimation(this.textContent);
        break;
      default:
        // console.log("this.innerHTML");
        // console.log("this.textContent");
    }
  });
}

//playing with keyboard
document.addEventListener("keydown", function (eventthathappened) {
  // console.log(eventthathappened.key);
  // alert("key was pressed !");

  switch (eventthathappened.key) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      buttonAnimation(eventthathappened.key);

      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      buttonAnimation(eventthathappened.key);
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      buttonAnimation(eventthathappened.key);
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      buttonAnimation(eventthathappened.key);
      break;
    case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      buttonAnimation(eventthathappened.key);
      break;
    case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      buttonAnimation(eventthathappened.key);
      break;
    case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      buttonAnimation(eventthathappened.key);
      break;
    default:
      // console.log(eventthathappened.key);
  }
});

// document.addEventListener("keyup", function(eventthathappened) {
//   var arr= ["w","a","s","d","j","k","l"];

//   if(arr.includes(eventthathappened.key))
//   document.querySelector("." + eventthathappened.key ).classList.remove("pressed");

// });

function buttonAnimation(keypressed) {
  document.querySelector("." + keypressed).classList.add("pressed");

  setTimeout(function () {
    document.querySelector("." + keypressed).classList.remove("pressed");
  }, 100);
}
