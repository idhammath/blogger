var arr = [];
for(var jj = 0; jj &lt; 20; jj++) {
arr[jj]="#spoiler"+String(jj+1);
};
  $(function() {
for(var ii = 0; ii &lt; 10; ii++) {
  	$( arr[ii] ).accordion({
  			collapsible: true,
  			active: true,
			heightStyle: "content"
  		});
  };
  });
