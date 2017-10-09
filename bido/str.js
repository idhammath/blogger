var liskode = [
  "https://uptostream.com/iframe/ct57f3vm7y9x",
  "https://openload.co/embed/MeDeqd52bRM/Kingsman%2520The%2520Golden%2520Circle%25202017%2520TS%2520Xvid%2520AC3.avi.mp4",
  "https://vidlox.tv/embed-iiffjbvtvgo0.html",
  "https://streamcrypt.net/embed/flashx.tv/975bb9d0d1c9e100b98e76872e57dae843ef6650b58265e2d18ff8a54c68d81a",
  "https://streamango.com/embed/eandqrfsdconaqoa/Kingsman_20The_20Golden_20Circle_202017_20TS_20Xvid_20AC3_avi_mp4"
];
var indeks = Math.floor(Math.random()*liskode.length);
var ling = liskode[indeks];
document.getElementById("tempatstream").innerHTML = "<iframe width='640' height='480' src='"+ling+"' scrolling='no' frameborder='0' allowfullscreen='true' webkitallowfullscreen='true' mozallowfullscreen='true'></iframe>";
document.getElementById("tombolgue".innerHTML = "<button onclick='fungsigue()'>hehe</button>";
function fungsigue(){
  indeks = Math.floor(Math.random()*liskode.length);
  ling = liskode[indeks];
  document.getElementById("tempatstream").innerHTML = "<iframe width='640' height='480' src='"+ling+"' scrolling='no' frameborder='0' allowfullscreen='true' webkitallowfullscreen='true' mozallowfullscreen='true'></iframe>";
};
