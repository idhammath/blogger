var liskode = [
"<iframe width='595' height='360' src='https://uptostream.com/iframe/ct57f3vm7y9x' scrolling='no' frameborder='0' allowfullscreen webkitallowfullscreen></iframe>",
"<iframe src='https://openload.co/embed/MeDeqd52bRM/Kingsman%2520The%2520Golden%2520Circle%25202017%2520TS%2520Xvid%2520AC3.avi.mp4' scrolling='no' frameborder='0' width='700' height='430' allowfullscreen='true' webkitallowfullscreen='true' mozallowfullscreen='true'></iframe>",
"<iframe src='https://ultimatedown.com/plugins/mediaplayer/site/_embed.php?u=21cc0c16e3192c42&w=640&h=320' frameborder='0' scrolling='no' style='width: 640px; height: 320px; overflow: hidden;' webkitAllowFullScreen='true' mozallowfullscreen='true' allowFullScreen='true'></iframe>",
"<iframe src='http://bestream.tv/plugins/mediaplayer/site/_embed.php?u=eh1e&w=640&h=320' frameborder='0' scrolling='no' style='width: 640px; height: 360px; overflow: hidden;' webkitAllowFullScreen='true' mozallowfullscreen='true' allowFullScreen='true'></iframe>",
"<iframe src='https://vidlox.tv/embed-iiffjbvtvgo0.html' frameborder=0 marginwidth=0 marginheight=0 scrolling=no width=640 height=360 allowfullscreen></iframe>",
"<iframe src='https://streamcrypt.net/embed/flashx.tv/975bb9d0d1c9e100b98e76872e57dae843ef6650b58265e2d18ff8a54c68d81a' frameborder='0' marginwidth='0' marginheight='0' scrolling='no' width='900' height='380' allowfullscreen='true' webkitallowfullscreen='true' mozallowfullscreen='true'></iframe>",
"<iframe src='https://streamango.com/embed/eandqrfsdconaqoa/Kingsman_20The_20Golden_20Circle_202017_20TS_20Xvid_20AC3_avi_mp4' scrolling='no' frameborder='0' width='700' height='430' allowfullscreen='true' webkitallowfullscreen='true' mozallowfullscreen='true'></iframe>",
"<iframe src='https://streamcherry.com/embed/stccctkteqfkdokd/Kingsman_20The_20Golden_20Circle_202017_20TS_20Xvid_20AC3_avi_mp4' scrolling='no' frameborder='0' width='700' height='430' allowfullscreen='true' webkitallowfullscreen='true' mozallowfullscreen='true'></iframe>",
"<IFRAME SRC='http://clipwatching.com/embed-vuli6jqh4bvv.html' FRAMEBORDER=0 MARGINWIDTH=0 MARGINHEIGHT=0 SCROLLING=NO WIDTH=640 HEIGHT=360 allowfullscreen></IFRAME>",
"<IFRAME SRC='https://vidoza.net/embed-si3s5snalk2g.html' FRAMEBORDER=0 MARGINWIDTH=0 MARGINHEIGHT=0 SCROLLING=NO WIDTH=640 HEIGHT=480 allowfullscreen></IFRAME>",
"<iframe width='640' height='360' src='https://www.rapidvideo.com/e/FKBUQV25AX' frameborder='0' marginwidth=0 marginheight=0 scrolling=no allowfullscreen></iframe>",
"<IFRAME SRC='http://vodlock.co/embed-1b9sbw9bse9c.html' FRAMEBORDER=0 MARGINWIDTH=0 MARGINHEIGHT=0 SCROLLING=NO WIDTH=640 HEIGHT=360 allowfullscreen></IFRAME>",
"<iframe width='640' height='360' src='http://vidto.me/embed-356m39llhlbb-640x360.html' frameborder='0' allowfullscreen></iframe>",
"<iframe src='https://thevideo.me/embed-2tr4014qm0a4.html' width='640' height='360' style='width:640px; height:360px;' frameborder='0' allowfullscreen></iframe>",
"<IFRAME SRC='http://watchers.to/embed-p43dzcj5o7gk.html' FRAMEBORDER=0 MARGINWIDTH=0 MARGINHEIGHT=0 SCROLLING=NO WIDTH=640 HEIGHT=480 allowfullscreen></IFRAME>",
"<iframe allowfullscreen='true' width='600' height='480' frameborder='0' src='http://videowood.tv/embed/1anvo' scrolling='no'></iframe>",
"<iframe width='640' height='360' src='http://vidup.me/embed-40y79m0d986j.html' frameborder='0' allowfullscreen></iframe>",
"<iframe width='640' height='360' src='http://vidup.me/embed-40y79m0d986j.html' frameborder='0' allowfullscreen></iframe>",
"<IFRAME SRC='https://vidtodo.com/embed-xb2485e0w8vq.html' FRAMEBORDER=0 MARGINWIDTH=0 MARGINHEIGHT=0 SCROLLING=NO allowfullscreen='true' WIDTH=940 HEIGHT=397></IFRAME>"
];
document.getElementById("tempatstream").innerHTML=liskode[0];

var isiserver = "";
var hehe;
for (hehe = 0; hehe < liskode.length; hehe++) { 
    isiserver += "<button class='btn btn-info' id='tombol"+hehe+"'>"+(hehe+1).toString()+"</button> ";
};
document.getElementById("tempatserver").innerHTML=isiserver;
var hoho;
var lisidtombolserver = [];
for (hoho = 0; hoho < liskode.length; hoho++) { 
    lisidtombolserver[hoho]="#tombol"+hoho;
    $(lisidtombolserver[hoho]).click(function() {
        $("#tempatstream").html(liskode[hoho]);
    });
};
