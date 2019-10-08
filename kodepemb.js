$( "#tombol").click(function() {
  var kod=$("#isikode").val();
  var indkod=kode.indexOf(kod);
  if(indkod>-1){
  window.location = link[indkod];}
  else{$('#myModal').modal('show')};
});
