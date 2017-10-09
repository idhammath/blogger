var liskode = [
"https://uptostream.com/iframe/ct57f3vm7y9x",
"https://openload.co/embed/MeDeqd52bRM/Kingsman%2520The%2520Golden%2520Circle%25202017%2520TS%2520Xvid%2520AC3.avi.mp4"
];
var ling = Math.floor(Math.random()*liskode.length);
document.getElementById("tempatstream").innerHTML = "<iframe width='595' height='360' src='"+ling+"' scrolling='no' frameborder='0' allowfullscreen='true' webkitallowfullscreen='true' mozallowfullscreen='true'></iframe>";
