let allButtons = document.querySelectorAll(".timer__button");
let valueOfTime;
for (let i = 0; i < allButtons.length; i++) {
  allButtons[i].addEventListener("click", function () {
    valueOfTime = this.value;
    BackAt();
  });
}

let displayTimeLeft = setInterval(function () {
  let minutes = Math.floor(valueOfTime / 60);
  let seconds = valueOfTime % 60;
  if (valueOfTime > 0) {
    document.getElementById("display__time-left").innerHTML = minutes + ":" + seconds;
  }
  else if(valueOfTime == 0){
    document.getElementById("display__time-left").innerHTML = "00:00"; 
  }
  valueOfTime--;
}, 1000);

document.getElementById("customMin")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      let inputMin = document.getElementById("customMin").value *60;
      inputBackAt(inputMin);
      setInterval(function () {
        let minutes = Math.floor((inputMin / 60));
        let seconds = inputMin % 60;
        if (inputMin > 0) {
          document.getElementById("display__time-left").innerHTML =
            minutes + ":" + seconds;
        }
        inputMin--;
      }, 1000);
    }
  });

function BackAt() {
  let minutes = Math.floor(valueOfTime / 60);
  let currentHours=new Date().getHours();
  let currentMin= new Date().getMinutes();
  let x = currentMin + minutes;
  if (x > 59) {
    let remainingMinutes = x-60;
 document.getElementById('display__end-time').innerHTML= `Be Back At ${currentHours+1} : ${remainingMinutes}`;
  }
  else{
    let remainingMin  =currentMin+minutes;
    document.getElementById('display__end-time').innerHTML= `Be Back At ${currentHours} : ${remainingMin}`;
  }
}

function inputBackAt(inputMin){
  let minutes = Math.floor((inputMin/ 60));
  let currentHours=new Date().getHours();
  let currentMin= new Date().getMinutes();
  let y = currentMin + minutes;
  if (y> 59) {
    let remainingMinutes = y-60;
 document.getElementById('display__end-time').innerHTML= `Be Back At ${currentHours+1} : ${remainingMinutes}`;
  }
  else{
    let remainingMin  =currentMin+minutes;
    document.getElementById('display__end-time').innerHTML= `Be Back At ${currentHours} : ${remainingMin}`;
  }
}