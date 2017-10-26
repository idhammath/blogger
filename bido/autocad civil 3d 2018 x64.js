var j;
var i;
var k;
var teks;
var ling = [
["Faststore","https://faststore.org/tu4kdbilkyvx"],
["Keepshare",""],
["Uptobox","http://uptobox.com/kw456kv6qg9u"],
["Userscloud",""],
["SendIt Cloud",""],
["XeUpload",""],
["UltimateDown",""],
["Openload",""],
["Uploads.to",""],
["Uplod.cc",""],
["DoUploads","https://douploads.com/qasfbyxedt7a"],
["Upload.mn",""],
["Clickn Upload",""],
["FileFlares","http://fileflares.com/1iocjic9wzgm/Autodesk_AutoCAD_Civil_3D_2018___40_x64__41__ISO_+_Keygen.rar.html"],
["Upload Ocean",""],
["BDupload",""],
["UploadX","https://uploadx.link/m511qw2614mc"],
["Indishare",""],
["File Factory",""],
["Oboom","https://www.oboom.com/5EIS4D0W"],
["4DownFiles","https://4downfiles.org/pqc2esc9f2r7"],
["UPloadboy",""],
["Files CDN",""],
["Bestream.tv",""],
["Flashx.tv",""],
["Vidlox.tv",""],
["Streamango",""],
["Streamcherry",""],
["Vidoza",""],
["Clip Watching",""],
["Rapid Video",""],
["eStream",""],
["Vodlock",""],
["Vidto.me",""],
["Thevideo",""],
["Watchers",""],
["Streamin",""],
["Videowood",""],
["Vidup",""],
["VidToDo",""],
["Youwatch",""],
["Google Drive","https://goo.gl/GVSfiu"]
];
var idtombol = ["faststore","keepshare","uptobox","userscloud","senditcloud","xeupload","ultimatedown","openload","uploadsto","uplodws","douploads","uploadmn","clicknupload","fileflares","uploadocean","bdupload","uploadx","indishare","filefactory","oboom","fourdownfiles","uploadboy","filescdn","bestream","flashxtv","vidloxtv","streamango","streamcherry","vidoza","clipwatching","rapidvideo","estream","vodlock","vidtome","thevideo","watchers","streamin","videowood","vidup","vidtodo","youwatch","googledrive"];
var idtombol2 = [];
for (k=0;k<idtombol.length;k++){
	idtombol2[k]="#"+idtombol[k];
}
$(document).ready(function(){
  $("#tempattombol").hide();
  var awal = 5;
  var kondon = setInterval(function(){fungtime()},1000);
  function fungtime(){
    $("#angkatimer").html("Please wait...<br><div style='font-size: 400%;'>"+awal+"</div>");
    awal-=1;
    if (awal==-2) {
      clearInterval(kondon);
      $("#angkatimer").hide();
      $("#tombolgetlink").removeClass("btn-secondary");
      $("#tombolgetlink").addClass("btn-primary");
      $("#tombolgetlink").removeAttr("disabled");
    }
  };

for (j=0;j < idtombol.length; j++){
$("#tempattombol").append("<a id='"+idtombol[j]+"' class='btn btn-primary btn-lg' href='' role='button' style='margin-bottom:0.3rem'>"+ling[j][0]+"</a> ");
};
for (i = 0; i < idtombol.length; i++) {
if (ling[i][1]==""){
$(idtombol2[i]).addClass("btn-secondary disabled");
$(idtombol2[i]).attr("hidden","hidden");
}else{
    $(idtombol2[i]).attr("href",ling[i][1]);
};
};
});
function muncultombol(){
  $("#tempattombol").show();
  $("#tombolgetlink").hide();
};
