console.log("Connected");
var hour, minute, second;
var set = 0;
var hourVal = 0;
var minuteVal = 0;
$("#alarm-hour").val(hourVal);
$("#alarm-minute").val(minuteVal);

var audio = new Audio('https://raw.githubusercontent.com/ilterates/badalarm/master/assets/_boat.mp3');

function time() {
  now = new Date();
  hour = now.getHours();
  minute = now.getMinutes();
  second = now.getSeconds();
  // this code adds zero in front of single numbers //
  // if ( hour < 10 ){
  //   hour = "0" + hour;
  // } if ( minute < 10 ) {
  //   minute = "0" + minute;
  // } if ( second < 10 ) {
  //   second = "0" + second;
  // }
    $("#time").text( hour + ":" + minute + ":" + second );
  var t = setTimeout(time, 500);
}
      // setting the alarm //
      // hour //
$("#hour-up-arrow").click(function(){
  hourVal ++;
  $("#alarm-hour").val(hourVal);
  if (hourVal >= 24) {
    hourVal = 0;
    $("#alarm-hour").val(hourVal);
  }
});
$("#hour-down-arrow").click(function(){
  hourVal --;
  $("#alarm-hour").val(hourVal);
  if (hourVal <= 0) {
    hourVal = 23;
    $("#alarm-hour").val(hourVal);
  }
});
    // minute //
$("#minute-up-arrow").click(function(){
  minuteVal ++;
  $("#alarm-minute").val(minuteVal);
  if (minuteVal >= 60) {
    minuteVal = 0;
    $("#alarm-minute").val(minuteVal);
  }
    // if a digit in hour input is below 10, a zero will be added in front
    // if ( hourVal < 10 && hourVal > 0 ) {
    //     hourVal = "0" + hourVal;
    //   }

    // if a digit in minute input is below 10, a zero will be added in front
  // if (minuteVal < 10 && minuteVal > 0) {
  //   minuteVal = "0" + minuteVal;
  //   console.log("truye");
  //   console.log(minuteVal);
  // }
  // console.log(minuteVal);
});
$("#minute-down-arrow").click(function(){
  minuteVal --;
  $("#alarm-minute").val(minuteVal);
  if (minuteVal < 0) {
    minuteVal = 59;
    $("#alarm-minute").val(minuteVal);
  }
});
function alarm() {
  // if ( set === 1 ) {
    var alarmHour = $("#alarm-hour").val();
    var alarmMinute =$("#alarm-minute").val();
    var hourString = hour.toString();
    var minuteString = minute.toString();
    // console.log(hour,hourString + 'Hour');
    // console.log(minute,minuteString + 'minute');
    if ( alarmHour === hourString && alarmMinute === minuteString && set === 1 ) {
      playSound();
    }
    var check = setTimeout(alarm, 500);
}
  $("#set-button").on('click',function(){
    // e.stopImmediatePropagation();
    if ( set === 0 ) {
      set = 1;
      alarm();
      $("#set-button").html("CANCEL");
      audio.currentTime = 0;
    } else {
      set = 0;
      stopSound();
      $("#set-button").html("SET");
    }
  });
  function playSound() {
    // audio.currentTime = 0;
    audio.play();
    $("#time").effect("shake", 750);
  }
  function stopSound() {
    audio.pause();
  }
