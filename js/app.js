console.log("Connected!");
console.log(moment.unix());
var hour, minute, second;
var set = false;
var hourVal = 0;
var minuteVal = 0;
var hour = moment().format('hh');
var minute = moment().format("mm");
var blaring = new Audio();
var audioArr = new Array('https://raw.githubusercontent.com/ilterates/badalarm/master/assets/_boat.mp3',
                         'https://raw.githubusercontent.com/ilterates/badalarm/master/assets/_morty.mp3');
var random = _.sample(audioArr);
blaring.src = random;
function badTime() {
  var time = moment().format('hh:mm:ss a'); // November 15th 2016, 8:54:55 pm
  $("#time").text( time );
  var t = setTimeout(badTime, 500);
}
      // setting the alarm //
      // hour //
$("#hour-up-arrow").click(function(){
  if ( set === false ) {
    hourVal ++;
    // doubleDigit();
    $("#alarm-hour").val(hourVal);
    if (hourVal >= 24) {
      hourVal = 0;
      $("#alarm-hour").val(hourVal);
    }
  }
});
// hour with mousewheel //
$("#hour-up-arrow, #hour-down-arrow, #alarm-hour").bind('mousewheel', function(e){
  if (e.originalEvent.wheelDelta / 120 > 0 && set === false) {
    hourVal ++;
    // doubleDigit();
    $("#alarm-hour").val(hourVal);
    if (hourVal >= 24) {
      hourVal = 0;
      $("#alarm-hour").val(hourVal);
    }
  }
});
$("#hour-down-arrow").click(function(){
  if ( set === false ) {
    hourVal --;
    // doubleDigit();
    $("#alarm-hour").val(hourVal);
    if (hourVal <= 0) {
      hourVal = 23;
      $("#alarm-hour").val(hourVal);
    }
  }
});
$("#hour-down-arrow, #hour-up-arrow, #alarm-hour").bind('mousewheel', function(e){
  if (e.originalEvent.wheelDelta / 120 < 0 && set === false) {
    hourVal --;
    // doubleDigit();
    $("#alarm-hour").val(hourVal);
    if (hourVal <= 0) {
      hourVal = 23;
      $("#alarm-hour").val(hourVal);
    }
  }
});
    // minute //
$("#minute-up-arrow").click(function(){
  if ( set === false ) {
    minuteVal ++;
    // doubleDigit();
    $("#alarm-minute").val(minuteVal);
    if (minuteVal >= 60) {
      minuteVal = 0;
      $("#alarm-minute").val(minuteVal);
    }
  }
});

$("#minute-down-arrow").click(function(){
  if ( set === false ) {
    minuteVal --;
    // doubleDigit();
    $("#alarm-minute").val(minuteVal);
    if (minuteVal < 0) {
      minuteVal = 59;
      $("#alarm-minute").val(minuteVal);
    }
  }
});
// minute with mousewheel
$("#minute-up-arrow, #minute-down-arrow, #alarm-minute").bind('mousewheel', function(e){
  if (e.originalEvent.wheelDelta / 120 > 0 && set === false) {
    minuteVal ++;
    // doubleDigit();
    $("#alarm-minute").val(minuteVal);
    if (minuteVal >= 60) {
      minuteVal = 0;
      $("#alarm-minute").val(minuteVal);
    }
  }
});
$("#minute-down-arrow, #minute-up-arrow, #alarm-minute" ).bind('mousewheel', function(e){
  if (e.originalEvent.wheelDelta / 0 < 120 && set === false) {
    minuteVal --;
    // doubleDigit();
    $("#alarm-minute").val(minuteVal);
    if (minuteVal < 0) {
      minuteVal = 59;
      $("#alarm-minute").val(minuteVal);
    }
  }
});
function badAlarm() {
  var alarmHour = $("#alarm-hour").val();
  var alarmMinute =$("#alarm-minute").val();
  var intHour = parseInt(hour);
  console.log( intHour , "intHour");
  var alarmIntHour = parseInt(alarmHour);
  console.log( alarmIntHour, "alarmIntHour" );
  var intMinute = parseInt(minute);
  console.log( intMinute, "intMinute" );
  var alarmIntMinute = parseInt(alarmMinute);
  console.log( alarmIntMinute, "alarmIntMinute" );
  if ( alarmIntHour === intHour && alarmIntMinute === intMinute && set === true ) {
    playSound();
    console.log("alarm");
  }
  // var check = setTimeout(badAlarm, 500);
}
  $("#set-button").on('click',function(){
    // e.stopImmediatePropagation();
    if ( set === false ) {
      set = true;
      badAlarm();
      $("#set-button").html("CANCEL");
    } else {
      set = false;
      stopSound();
      $("#set-button").html("SET");
    }
  });
  function playSound() {
    blaring.currentTime = 0;
    blaring.play();
    $("#time").effect("shake", 750);
  }
  function stopSound() {
    blaring.pause();
  }
  // function doubleDigit() {
  //   if ( $("#alarm-hour").val().length < 2 ) {
  //     alarmHour = "0" + alarmHour;
  //     $("#alarm-hour").val(alarmHour);
  //   } if ( $("#alarm-minute").val().length < 2 ) {
  //     alarmMinute = "0" + alarmMinute;
  //     $("#alarm-minute").val(alarmMinute);
  //   }
  // }
