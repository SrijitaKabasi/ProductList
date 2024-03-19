var link = document.getElementById("email");
link.onclick = function () {
  this.href = "mailto:indiastore@hp.com?subject=Submit Query to HP&body=";
  this.href += body();
};
function body() {
  return "Hello,";
}


function updateDateTime() {
  // create a new `Date` object
  const dateToday = new Date();

  const currentDateTime = dateToday.toLocaleString();

  document.getElementById("datetime").innerHTML = currentDateTime;
}
setInterval(updateDateTime, 1000);


function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    console.log(timer);

    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        console.log(minutes);
        console.log(seconds);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}
window.onload = function () {
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};