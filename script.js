const mainScreen = document.getElementById("main-screen");
const clickScreen = document.getElementById("click-screen");
const endScreen = document.getElementById("end-screen");
const restartText = document.getElementById("restart-text");
const loseText = document.getElementById("lose-text");
const msText = document.getElementById("ms-text");
const clickText = document.getElementById("click-text");
const clickerText = document.getElementById("clicker-text");
var startTime;



mainScreen.addEventListener("click", function() {
  clickScreen.setAttribute("id", "red");
  clickScreen.classList.remove("hidden");
  mainScreen.classList.add("hidden");
  const randomNumber = (Math.random() * 3000) + 2000;
  setTimeout(function(){
  clickScreen.setAttribute("id", "green");
  clickerText.classList.add("hidden");
  clickText.classList.remove("hidden");
  startTime = new Date().getTime();
  }, randomNumber);
});

clickScreen.addEventListener("click", function() {
  if(clickScreen.getAttribute("id") == "green") {
    const endTime = new Date().getTime();
    const timeDif = endTime - startTime;
    msText.innerHTML += timeDif + "ms";
    restartText.classList.remove("hidden");
    loseText.classList.add("hidden");
    endScreen.classList.remove("hidden");  
    clickScreen.classList.add("hidden");
    clickerText.classList.remove("hidden");
    clickText.classList.add("hidden");
  } else{
    restartText.classList.add("hidden");
    loseText.classList.remove("hidden");
    endScreen.classList.remove("hidden");  
    clickScreen.classList.add("hidden");
  }
});

endScreen.addEventListener("click", function(){
  endScreen.classList.add("hidden");
  mainScreen.classList.remove("hidden");
  msText.innerHTML = "";
});



