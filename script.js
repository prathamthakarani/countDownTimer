let allButtons = document.querySelectorAll(".timer__button");
let valueOfTime;
//current Time
function doTime() {
  let today = new Date();
  let currentTime  = document.getElementById("current_time");
  let time  =  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  currentTime.innerHTML = `Current Time : <b>${time}</b> `;
}
setInterval(doTime, 1000);


let i = 0;
while(i<allButtons.length)
 {
  allButtons[i].addEventListener("click", function () {
    valueOfTime = this.value;
    backAt();
  });
  i++;
}
function backAt() {
  let minutes = Math.floor(valueOfTime / 60);
  let currentHours=new Date().getHours();
  let currentMin= new Date().getMinutes();
  let newMin = currentMin + minutes;
  if (newMin > 59) {
    let remainingMinutes = newMin-60;
 document.getElementById('display__end-time').innerHTML= `Be Back At ${currentHours+1} : ${remainingMinutes}`;
  }
  else{
    let remainingMin = currentMin + minutes;
    document.getElementById('display__end-time').innerHTML= `Be Back At ${currentHours} : ${remainingMin}`;
  }
}

let displayTimeLeft = setInterval(function () {
  let minutes = Math.floor(valueOfTime / 60);
  let seconds = valueOfTime % 60;
  if (valueOfTime > 0) {
    document.getElementById("display__time-left").innerHTML = minutes + ":" + seconds;
  }
  else if(valueOfTime == 0){
    document.getElementById("display__time-left").innerHTML = "00:00"; 
    alert("Your CountDown Timer is at 00:00");
  }
  valueOfTime--;
}, 1000);


document.getElementById("customMin")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      clearInterval(displayTimeLeft);
      let inputSec = document.getElementById("customMin").value *60;
      inputBackAt(inputSec);
      setInterval(function () {
        let minutes = Math.floor((inputSec / 60));
        let seconds = inputSec % 60;
        if (inputSec > 0) {
          document.getElementById("display__time-left").innerHTML =
            minutes + ":" + seconds;
        }
        else if(inputSec == 0){
          document.getElementById("display__time-left").innerHTML = "00:00";
          alert("Your CountDown Timer is at 00:00");
        }
        inputSec--;
      }, 1000);
    }
  });

function inputBackAt(inputMin){
  let minutes = Math.floor((inputMin/ 60));
  let currentHours=new Date().getHours();
  let currentMin= new Date().getMinutes();
  let newMin = currentMin + minutes;
  if (newMin> 59) {
    let remainingMinutes = newMin - 60;
 document.getElementById('display__end-time').innerHTML= `Be Back At ${currentHours+1} : ${remainingMinutes}`;
  }
  else{
    let remainingMin = currentMin + minutes;
    document.getElementById('display__end-time').innerHTML= `Be Back At ${currentHours} : ${remainingMin}`;
  }
}
