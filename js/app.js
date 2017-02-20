console.log("Connected!");
console.log(moment.unix());
var hour, minute, second, alarmHour, alarmMinute, intHour, alarmIntHour, alarmIntMinute;
var alarmTimePeriod = "am";
var set = false;
var testOn = false;
var am = true;
var hourVal = 12;
var minuteVal = 0;
var blaring = new Audio();
var audioArr = new Array('https://raw.githubusercontent.com/ilterates/badalarm/master/assets/_boat.mp3',
                         'https://raw.githubusercontent.com/ilterates/badalarm/master/assets/_morty.mp3',
                         'https://raw.githubusercontent.com/ilterates/badalarm/master/assets/_mkay.mp3',
                         'https://raw.githubusercontent.com/ilterates/badalarm/master/assets/_jsparrow.mp3');
var random = _.sample(audioArr);
blaring.src = random;
var testAudio = new Audio();
testAudio.src = 'https://raw.githubusercontent.com/ilterates/badalarm/master/assets/_soundCheck.wav';
function badTime() {
  // moment.js
  var timeChecker = moment().format('hh:mm:ss a'); // November 15th 2016, 8:54:55 pm
  //console.log(timeChecker);
  $("#time").text( timeChecker );
  // drop this to once a second
   var t = setTimeout(badTime, 500);
}
      // setting the alarm //
      // hour //
$("#hour-up-arrow").click(function(){
  if ( !set ) {
    hourVal ++;
    $("#alarm-hour").val(hourVal);
    if ( hourVal > 12 ) {
      hourVal = 1;
      $("#alarm-hour").val(hourVal);
    }
  }
});
// hour with mousewheel //
$("#hour-up-arrow, #hour-down-arrow, #alarm-hour").bind('mousewheel', function(e){
  if ( e.originalEvent.wheelDelta / 120 > 0 && set === false ) {
    hourVal ++;
    $("#alarm-hour").val(hourVal);
    if (hourVal > 12) {
      hourVal = 1;
      $("#alarm-hour").val(hourVal);
    }
  }
});
$("#hour-down-arrow").click(function(){
  if ( !set ) {
    hourVal --;
    $("#alarm-hour").val(hourVal);
    if ( hourVal < 1 ) {
      hourVal = 12;
      $("#alarm-hour").val(hourVal);
    }
  }
});
$("#hour-down-arrow, #hour-up-arrow, #alarm-hour").bind('mousewheel', function(e){
  if ( e.originalEvent.wheelDelta / 120 < 0 && !set ) {
    hourVal --;
    $("#alarm-hour").val(hourVal);
    if ( hourVal <= 0 ) {
      hourVal = 12;
      $("#alarm-hour").val(hourVal);
    }
  }
});
    // minute //
$("#minute-up-arrow").click(function(){
  if ( !set ) {
    minuteVal ++;
    $("#alarm-minute").val(minuteVal);
    if ( minuteVal > 59 ) {
      minuteVal = 0;
      $("#alarm-minute").val(minuteVal);
    }
  }
});

$("#minute-down-arrow").click(function(){
  if ( !set ) {
    minuteVal --;
    $("#alarm-minute").val(minuteVal);
    if ( minuteVal < 0 ) {
      minuteVal = 59;
      $("#alarm-minute").val(minuteVal);
    }
  }
});
// minute with mousewheel
$("#minute-up-arrow, #minute-down-arrow, #alarm-minute").bind('mousewheel', function(e){
  if ( e.originalEvent.wheelDelta / 120 > 0 && !set ) {
    minuteVal ++;
    $("#alarm-minute").val(minuteVal);
    if (minuteVal > 59) {
      minuteVal = 0;
      $("#alarm-minute").val(minuteVal);
    }
  }
});
$("#minute-down-arrow, #minute-up-arrow, #alarm-minute" ).bind('mousewheel', function(e){
  if ( e.originalEvent.wheelDelta / 0 < 120 && !set ) {
    minuteVal --;
    $("#alarm-minute").val(minuteVal);
    if ( minuteVal < 0 ) {
      minuteVal = 59;
      $("#alarm-minute").val(minuteVal);
    }
  }
});
$("#set-button").on('click',function(){
  if ( !set ) {
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
  if ( set ) {
    blaring.play();
    // $("#time").effect("shake", 750);
    var restart = setTimeout(playSound, 2000);
  }
}
function stopSound() {
  blaring.pause();
}
$("#am").click(function (){
  if ( !set ) {
    alarmTimePeriod = "am";
    $("#pm, #am").toggleClass("am-pm-disabled");
  }
});
$("#pm").click(function (){
  if ( !set ) {
    alarmTimePeriod = "pm";
    $("#pm, #am").toggleClass("am-pm-disabled");
  }
});
function timePeriodChecker() {
  am = true;
  console.log(am);
  if ( timePeriod === "am" ) {
    am = true;
  } else {
    am = false;
  }
}
function pmSwitch() {
  am = false;
  console.log(am);
}
function badAlarm() {
var hour = moment().format('hh');
var minute = moment().format("mm");
var timePeriod = moment().format('a');
  alarmHour = $("#alarm-hour").val();
  alarmMinute = $("#alarm-minute").val();
  intHour = parseInt(hour);
  alarmIntHour = parseInt(alarmHour);
  intMinute = parseInt(minute);
  alarmIntMinute = parseInt(alarmMinute);
  if ( alarmIntHour === intHour &&
       alarmIntMinute === intMinute &&
       set &&
       timePeriod === alarmTimePeriod
      ) {
    playSound();
    $("#set-button").html("CANCEL");
    console.log("alarm");
  }
  var check = setTimeout(badAlarm, 500);
}
// Sound testing functions
$("#test-sound").click(function(){
  test();
});
function test(){
  if (!testOn) {
    testSound();
  } else {
    testSoundOff();
  }
}
function testSound(){
  testOn = true;
  testAudio.play();
  console.log("test sound is on");
}
function testSoundOff(){
  testAudio.pause();
  testOn = false;
  console.log("test sound is off");
}
