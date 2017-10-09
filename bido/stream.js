var liskode = [];
liskode[0]="<iframe width='595' height='360' src='https://uptostream.com/iframe/ct57f3vm7y9x' scrolling='no' frameborder='0' allowfullscreen webkitallowfullscreen></iframe>";
liskode[1]="<iframe src='https://openload.co/embed/MeDeqd52bRM/Kingsman%2520The%2520Golden%2520Circle%25202017%2520TS%2520Xvid%2520AC3.avi.mp4' scrolling='no' frameborder='0' width='700' height='430' allowfullscreen='true' webkitallowfullscreen='true' mozallowfullscreen='true'></iframe>";
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

