$("#pen2").hide();
function tes(){
    $(".sal2").removeClass("sal2 btn-dark").addClass("btn-danger");
    $("#cek2").html("SALAH!!");
    $("#cek2").css("font-weight","bold");
    $("#cek2").show();
    $("#pen2").show();
  };
$(document).ready(function(){
  $("#cek2").hide();
  
  $(".sal2").click(tes());
  $(".ben2").click(function(){
    $(".ben2").removeClass("ben2 btn-dark").addClass("btn-success");
    $("#cek2").html("BENAR!!");
    $("#cek2").css("font-weight","bold");
    $("#cek2").show();
    $("#pen2").show();
  });
});
