var liskode = [];
liskode[0]="<iframe width='595' height='360' src='https://uptostream.com/iframe/ct57f3vm7y9x' scrolling='no' frameborder='0' allowfullscreen webkitallowfullscreen></iframe>";
liskode[1]="<iframe src='https://ultimatedown.com/plugins/mediaplayer/site/_embed.php?u=21cc0c16e3192c42&w=640&h=320' frameborder='0' scrolling='no' style='width: 640px; height: 320px; overflow: hidden;' webkitAllowFullScreen='true' mozallowfullscreen='true' allowFullScreen='true'></iframe>";
document.getElementById("tempatstream").innerHTML=liskode[0];
var isiserver = "";
var hehe;
var antri;
for (hehe = 0; hehe < liskode.length; hehe++) { 
    isiserver += "<button class='btn btn-info' id='tombol"+hehe+"'>"+(hehe+1).toString()+"</button> ";
};
document.getElementById("tempatserver").innerHTML=isiserver;
var hoho;
var lisidtombolserver = [];
    for (hoho = 0; hoho < liskode.length; hoho++) { 
    lisidtombolserver[hoho]="tombol"+hoho;
 document.getElementById(lisidtombolserver[hoho]).addEventListener("click", function(){
    document.getElementById("tempatstream").innerHTML = "";
     alert(liskode[hoho]);
});
};

