$("#pen2").hide();
$(document).ready(function(){
  function testes(){
    $(".sal2").removeClass("sal2 btn-dark").addClass("btn-danger");
    $(".ben2").removeClass("ben2 btn-dark").addClass("btn-success");
    $("#cek2").css("font-weight","bold");
    $("#cek2").show();
    $("#pen2").show();
    $(".sal2").off("click");
    $(".ben2").off("click");
  }
  $("#cek2").hide();
  $(".sal2").click(function(){
    $("#cek2").html("SALAH!!");
    testes();
  });
  $(".ben2").click(function(){
    $("#cek2").html("BENAR!!");
    testes();
  });
});
