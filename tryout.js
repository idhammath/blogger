   var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      tes(this);
    }
  };
  xmlhttp.open("GET", "https://cdn.jsdelivr.net/gh/idhammath/blogger@master/tryout.xml", true);
  xmlhttp.send();
  function tes(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var x = xmlDoc.getElementsByTagName("nomor");
  var isi=x[0].getElementsByTagName("soal")[0].childNodes[0].nodeValue;
  document.getElementById("hehe").innerHTML = isi;
  var math = document.getElementById("hehe");
  document.getElementById("byk").innerHTML = x[0].getElementsByTagName("soal").length;
}
