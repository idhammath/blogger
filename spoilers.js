$(function() {
    $( "spoiler" ).accordion({
      collapsible: true
    });
    $( "#spoilerq" ).accordion({
      collapsible: true
    });
  });
  var array=[];
  for(var ii = 0; ii < 10; ii++) {
  	array[ii] = "spoiler"+String(ii+1);
  };
  $(function() {
  	for(var jj = 0; jj < 10; jj++) {
  		$( array[jj] ).accordion({
  			collapsible: true,
  			active: true,
			heightStyle: "content"
  		});
  	};
  });
