var i;
for (i = 0; i < tombpen.length; i++) { 
    $("#"+tombpen[i]).hide();
};
var j;
for (i = 0; i < tulisancek.length; i++) { 
    $("#"+tulisancek[i]).hide();
};
nilai=0;
$(document).ready(function(){
  function testes(benar,salah,katacek,tombolpeny){
     $("."+salah).off("click");
    $("."+benar).off("click");
    $("."+salah).removeClass("btn-dark").addClass("btn-danger");
    $("."+benar).removeClass("btn-dark").addClass("btn-success");
    $("#"+katacek).css("font-weight","bold");
    $("#"+katacek).show();
    $("#"+tombolpeny).show();
   
  };
  $(".sal1").click(function(){
    $("#cek1").html("SALAH!!");
    testes("ben1","sal1","cek1","pen1");
  });
  $(".ben1").click(function(){
    $("#cek1").html("BENAR!!");
    nilai+=1;
    console.log(nilai);
    testes("ben1","sal1","cek1","pen1");
  });
  $(".sal2").click(function(){
    $("#cek2").html("SALAH!!");
    testes("ben2","sal2","cek2","pen2");
  });
  $(".ben2").click(function(){
    $("#cek2").html("BENAR!!");
    nilai+=1;
    console.log(nilai);
    testes("ben2","sal2","cek2","pen2");
  });
  $("#tomcek3").click(function(){
    if ($("#pembilang3").val()=="1"&&$("#penyebut3").val()=="2") {
      $( this ).replaceWith( "<b>BENAR!!</b>" );
    } else {$( this ).replaceWith( "<b>SALAH!!</b>" )};
      $("#pen3").show();
  });
});
