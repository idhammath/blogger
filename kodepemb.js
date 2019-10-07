var kode=["TER081019"];
var link=["https://matematikazone.id/2017/05/teorema-sisa-soal-dan-pembahasan.html#7"]
$( "#tombol").click(function() {
  var kod=$("#isikode").val();
  var indkod=kode.indexOf(kod);
  if(indkod>-1){
  window.location = link[indkod];}
  else{alert("masukkan kode dengan benar")};
});
