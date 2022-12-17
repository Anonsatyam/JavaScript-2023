const newYear = "1 Jan 2023";



function countDown() {
  const newYearDate = new Date(newYear);
  const now = new Date();
  const timeleft = newYearDate - now;

  const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = parseInt(Math.floor(timeleft % (1000 * 60)) / 1000);

  if (timeleft < 0) {
    clearInterval(x);
    document.getElementById("text").innerHTML = "Happy New Year 2023";
  }
  else{
    document.getElementById("text").innerHTML = "New year Begins In...";
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;}
}

countDown();


const x = setInterval(() => {
    countDown()
}, 1000);
