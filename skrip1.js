var tombpen = ["pen2", "pen3"];
var i;
for (i = 0; i < tombpen.length; i++) { 
    $("#"+tombpen[i]).hide();
};
nilai=0;
$(document).ready(function(){
  function testes(){
     $(".sal2").off("click");
    $(".ben2").off("click");
    $(".sal2").removeClass("sal2 btn-dark").addClass("btn-danger");
    $(".ben2").removeClass("ben2 btn-dark").addClass("btn-success");
    $("#cek2").css("font-weight","bold");
    $("#cek2").show();
    $("#pen2").show();
   
  }
  $("#cek2").hide();
  $(".sal2").click(function(){
    $("#cek2").html("SALAH!!");
    testes();
  });
  $(".ben2").click(function(){
    $("#cek2").html("BENAR!!");
    nilai+=1;
    console.log(nilai);
    testes();
  });
  $("#cek3").click(function(){
    if ($("#pembilang3").val()=="1"&&$("#penyebut3").val()=="2") {
      $( this ).replaceWith( "<b>BENAR!!</b>" );
    } else {$( this ).replaceWith( "<b>SALAH!!</b>" )};
      $("#pen3").show();
  });
});
