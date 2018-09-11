$("#pen2").hide();
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
});
