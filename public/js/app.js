console.log("Connected");
var date, hour, minute, second;

function time() {
  now = new Date();
  hour = now.getHours();
  minute = now.getMinutes();
  second = now.getSeconds();
  console.log(hour);
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
