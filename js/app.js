console.log("Connected!");
console.log(moment.unix());
var hour, minute, second, alarmHour, alarmMinute, intHour, alarmIntHour, alarmIntMinute;
var alarmTimePeriod = "am";
var set = false;
var am = true;
var hourVal = 0;
var minuteVal = 0;
var blaring = new Audio();
var audioArr = new Array('https://raw.githubusercontent.com/ilterates/badalarm/master/assets/_boat.mp3',
                         'https://raw.githubusercontent.com/ilterates/badalarm/master/assets/_morty.mp3');
var random = _.sample(audioArr);
blaring.src = random;
function badTime() {
  var timeChecker = moment().format('hh:mm:ss a'); // November 15th 2016, 8:54:55 pm
  console.log(timeChecker);
  $("#time").text( timeChecker );
   var t = setTimeout(badTime, 500);
  // var now = Date.now();
  // var delay =  500;
  // while ( Date.now() - delay > now ) {
  //   badTime();
  //}
}
      // setting the alarm //
      // hour //
$("#hour-up-arrow").click(function(){
  if ( set === false ) {
    hourVal ++;
    doubleDigit();
    $("#alarm-hour").val(hourVal);
    if (hourVal > 11) {
      hourVal = 0;
      $("#alarm-hour").val(hourVal);
    }
  }
});
// hour with mousewheel //
$("#hour-up-arrow, #hour-down-arrow, #alarm-hour").bind('mousewheel', function(e){
  if (e.originalEvent.wheelDelta / 120 > 0 && set === false) {
    hourVal ++;
    doubleDigit();
    $("#alarm-hour").val(hourVal);
    if (hourVal > 11) {
      hourVal = 0;
      $("#alarm-hour").val(hourVal);
    }
  }
});
$("#hour-down-arrow").click(function(){
  if ( set === false ) {
    hourVal --;
    doubleDigit();
    $("#alarm-hour").val(hourVal);
    if (hourVal < 0) {
      hourVal = 11;
      $("#alarm-hour").val(hourVal);
    }
  }
});
$("#hour-down-arrow, #hour-up-arrow, #alarm-hour").bind('mousewheel', function(e){
  if (e.originalEvent.wheelDelta / 120 < 0 && set === false) {
    hourVal --;
    doubleDigit();
    $("#alarm-hour").val(hourVal);
    if (hourVal < 0) {
      hourVal = 11;
      $("#alarm-hour").val(hourVal);
    }
  }
});
    // minute //
$("#minute-up-arrow").click(function(){
  if ( set === false ) {
    minuteVal ++;
    doubleDigit();
    $("#alarm-minute").val(minuteVal);
    if (minuteVal > 59) {
      minuteVal = 0;
      $("#alarm-minute").val(minuteVal);
    }
  }
});

$("#minute-down-arrow").click(function(){
  if ( set === false ) {
    minuteVal --;
    doubleDigit();
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
    doubleDigit();
    $("#alarm-minute").val(minuteVal);
    if (minuteVal > 59) {
      minuteVal = 0;
      $("#alarm-minute").val(minuteVal);
    }
  }
});
$("#minute-down-arrow, #minute-up-arrow, #alarm-minute" ).bind('mousewheel', function(e){
  if (e.originalEvent.wheelDelta / 0 < 120 && set === false) {
    minuteVal --;
    doubleDigit();
    $("#alarm-minute").val(minuteVal);
    if (minuteVal < 0) {
      minuteVal = 59;
      $("#alarm-minute").val(minuteVal);
    }
  }
});
  $("#set-button").on('click',function(){
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
    if ( set === true ) {
      blaring.play();
      $("#time").effect("shake", 750);
      var restart = setTimeout(playSound, 2000);
    }
  }
  function stopSound() {
    blaring.pause();
  }
  function doubleDigit() {
    // alarmHour = $("#alarm-hour").val();
    // alarmMinute = $("#alarm-minute").val();
    // if ( alarmHour < 10 ) {
    //   alarmHour = "0" + alarmHour;
    //   $("#alarm-hour").val(alarmHour);
    //   console.log("added 0", alarmHour);
    // } else { console.log("test"); }
    // if ( alarmMinute < 10 ) {
    //   alarmMinute = "0" + alarmMinute;
    //   $("#alarm-minute").val(alarmMinute);
    //   console.log("added 0", alarmMinute);
    // } else { console.log("test"); }
  }
  $("#am").click(function (){
    alarmTimePeriod = "am";
    console.log(alarmTimePeriod);
    $("#pm, #am").toggleClass("am-pm-disabled");
  });
  $("#pm").click(function (){
    alarmTimePeriod = "pm";
    console.log(alarmTimePeriod);
    $("#pm, #am").toggleClass("am-pm-disabled");
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
         set === true &&
         timePeriod === alarmTimePeriod
        ) {
      playSound();
      $("#set-button").html("CANCEL");
      console.log("alarm");
    }
    var check = setTimeout(badAlarm, 500);
  }
