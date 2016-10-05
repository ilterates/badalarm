console.log("Connected");
var date, hour, minute, second;

function time() {
  now = new Date();
  hour = now.getHours();
  minute = now.getMinutes();
  second = now.getSeconds();
  if ( hour < 10 ){
    hour = "0" + hour;
  } if ( minute < 10 ) {
    minute = "0" + minute;
  } if ( second < 10 ) {
    second = "0" + second;
  }
    $("#time").text( hour + ":" + minute + ":" + second );
  var t = setTimeout(time, 500);
}


function alarm() {
  var alarmHour = document.getElementById("alarm-hour").value;
  var alarmMinute = document.getElementById("alarm-minute").value;

  if ( alarmHour === alarmHour  && alarmMinute === alarmMinute ) {
    console.log("ALARM!");
  } else {
    console.log("not");
  }
}
