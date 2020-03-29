const startTime = () => {
  var time = new Date();
  var hr = time.getHours();
  var min = checkTime(time.getMinutes());
  var sec = checkTime(time.getSeconds());

  document.getElementById("time").innerHTML = `${hr}:${min}:${sec}`;
  var repeat = setTimeout(function() { startTime()}, 500)
}

const checkTime = i => {
  return (i<10) ? (i="0"+i) : i;
}
