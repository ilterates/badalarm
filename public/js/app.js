console.log("Connected");
var date, hour, minute, second;

function time() {
  now = new Date();
  hour = now.getHours();
  minute = now.getMinutes();
  second = now.getSeconds();
  console.log(hour);
    $("#time").text( hour + ":" + minute + ":" + second );
  var t = setTimeout(time, 500);
}
