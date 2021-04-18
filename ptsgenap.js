var plusminus = [-1,1];
function gcd(x, y) {
    while(y) {
      var t = y;
      y = x % y;
      x = t;
    }
    return x;
  }
  function pm(angka){
    return plusminus[Math.floor(Math.random()*2)]*angka
  }
  function ac(angka){
      return Math.floor(Math.random()*angka)
  }
  function pemisahribuan(no) {
    return no.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
    }
    function fpb2(x, y) {
        if ((typeof x !== 'number') || (typeof y !== 'number')) 
          return false;
        x = Math.abs(x);
        y = Math.abs(y);
        while(y) {
          var t = y;
          y = x % y;
          x = t;
        }
        return x;
      }
    
      function fpb (a) {
        return a.reduce(fpb2)
      }
  var no1 = [10+ac(30),10+ac(30)];
  for(let i=2;i<5;i++){
      no1[i]=2+ac(8);
  }
  while(no1[2]==no1[3]){
    no1[2]=2+ac(8);
    no1[3]=2+ac(8);
   }
   var fpbnya = fpb([no1[2],no1[3],no1[0]*no1[2]+no1[1]*no1[3]]);
  no1[5]=pemisahribuan((no1[0]*no1[2]+no1[1]*no1[3])*no1[4]);
  no1[6]=no1[2]/fpbnya;
  if(no1[6]==1){
      no1[6]=""
  }
  no1[7]=no1[3]/fpbnya;
  if(no1[7]==1){
      no1[7]=""
  }
  var no7 = [pm(5+ac(5))];
  for(let id=0;id<9;id++){
      no7[id]=pm(5+ac(5))
  }
var no7a11 = no7[0];
var no7a12 = no7[1];
var no7a13 = no7[2];
var no7a21 = no7[3];
var no7a22 = no7[4];
var no7a23 = no7[5];
var no7a31 = no7[6];
var no7a32 = no7[7];
var no7a33 = no7[8];
var no7j1 = no7a11*(no7a22*no7a33-no7a23*no7a32)-no7a12*(no7a21*no7a33-no7a23*no7a31)+no7a13*(no7a21*no7a23-no7a22*no7a31);
var no7j2 = no7a11*(no7a22*no7a33+no7a23*no7a32)+no7a12*(no7a21*no7a33+no7a23*no7a31)+no7a13*(no7a21*no7a23+no7a22*no7a31);
var no7j3 = no7a11*(no7a22*no7a33-no7a23*no7a32)+no7a12*(no7a21*no7a33-no7a23*no7a31)+no7a13*(no7a21*no7a23-no7a22*no7a31);
var no7j4 = no7a11*(no7a22*no7a33+no7a23*no7a32)-no7a12*(no7a21*no7a33+no7a23*no7a31)+no7a13*(no7a21*no7a23+no7a22*no7a31);
var no7j5 = no7a11*(no7a22*no7a33-no7a23*no7a32)-no7a12*(no7a21*no7a33+no7a23*no7a31)+no7a13*(no7a21*no7a23-no7a22*no7a31);
var no8 = [];
for (let iso8 = 0; iso8 < 2; iso8++) {
	no8[iso8] = plusminus[Math.floor(Math.random()*2)]*(2+Math.floor(Math.random()*8))
}
while(Math.abs(no8[1])==Math.abs(no8[0])){
    no8[0] = pm(2+ac(8));
    no8[1] = pm(2+ac(8));
}
no8[2] = -1-(no8[0]*no8[1])
var no9b = [81,82,83,84,85]
var no9c = Math.floor(Math.random()*5)
var no9 = [50+Math.floor(Math.random()*50), -5+Math.floor(Math.random()*3),no9b[no9c]];
no9b.splice(no9c,1);
var no10 = [10+Math.floor(Math.random()*20),-7+Math.floor(Math.random()*5),21+Math.floor(Math.random()*9)];
var no11 = [2*(50+Math.floor(Math.random()*50))];
no11[1] = no11[0]-2*(10+Math.floor(Math.random()*26));
no11[2] = 15+Math.floor(Math.random()*16);
var no11b = [];
for(let iso2=2;iso2<no11[2]-1;iso2++){
	if((no11[0]-no11[1])%iso2==0){
		no11b.push(iso2)
	}
}
no11[3] = Math.max.apply(Math, no11b);
no11[4] = no11[2] + Math.ceil(Math.random()*20);
//Uq
var no12 = [2*(30+Math.floor(Math.random()*20))];
//U_p
no12[1] = no12[0]-2*(5+Math.floor(Math.random()*20));
//q
no12[2] = 15+Math.floor(Math.random()*16);
var no12b = [];
for(let iso3=2;iso3<no12[2]-1;iso3++){
	if((no12[0]-no12[1])%iso3==0){
		no12b.push(iso3)
	}
}
//q-p
no12[3] = Math.max.apply(Math, no12b);
//n
no12[4] = no12[2] + Math.ceil(Math.random()*20);
//b
no12[5] = (no12[0]-no12[1])/no12[3];
//a
no12[6] = no12[0]-(no12[2]-1)*no12[5]
var no13 = [2+Math.floor(Math.random()*8),plusminus[Math.floor(Math.random()*2)]*(2+Math.floor(Math.random()*8))];
if(no13[1]>0){
    no13[2]="+";
}else{no13[2]=""};
var no14 = [400+Math.floor(Math.random()*201),20+Math.floor(Math.random()*40)];
no14[2] = no14[0]+no14[1];
var no15 = [30+Math.floor(Math.random()*50),2+Math.floor(Math.random()*4)];
var no16 = [40+Math.floor(Math.random()*20),2+Math.floor(Math.random()*2)]
if(no16[0]%Math.pow(no16[1],2)==0){
    no16[2]=no16[0]/Math.pow(no16[1],2)
}else{no16[2]=`\\dfrac{${no16[0]/gcd(no16[0],Math.pow(no16[1],2))}}{${Math.pow(no16[1],2)/gcd(no16[0],Math.pow(no16[1],2))}}`};
var no17 = [1+Math.floor(Math.random()*9)];
no17[1] = no17[0]*4;
no17[2] = no17[0]*32;
var no18 = [10+Math.floor(Math.random()*51),61+Math.floor(Math.random()*61)];
if(no18[1]%(no18[1]-no18[0])==0){
    no18[2]=no18[1]/(no18[1]-no18[0])
}else{no18[2]=`$\\dfrac{${no18[1]/gcd(no18[1],no18[1]-no18[0])}}{${(no18[1]-no18[0])/gcd(no18[1],no18[1]-no18[0])}}$`};
if(no18[1]%no18[0]==0){
    no18[3]=no18[1]/no18[0]
}else{no18[3]=`$\\dfrac{${no18[1]/gcd(no18[1],no18[0])}}{${no18[0]/gcd(no18[1],no18[0])}}$`};
var no19 = [2+Math.floor(Math.random()*3)];
no19[1] = Math.pow(no19[0]-1,2)*(5+Math.floor(Math.random()*5));
var no20 = [1+Math.floor(Math.random()*80),10+Math.floor(Math.random()*90)];
while (no20[0]+1>=no20[1]||no20[1]%no20[0]==0) {
    no20[0]=1+Math.floor(Math.random()*80);
    no20[1]=10+Math.floor(Math.random()*90);
}
if(no20[1]%(no20[1]-no20[0])==0){
    no20[2]=no20[1]/(no20[1]-no20[0]);
}else{no20[2]=`$\\dfrac{${no20[1]/gcd(no20[1],no20[1]-no20[0])}}{${(no20[1]-no20[0])/gcd(no20[1],no20[1]-no20[0])}}$`}
no20[3]=`$\\dfrac{${no20[1]/gcd(no20[1],no20[0])}}{${no20[0]/gcd(no20[1],no20[0])}}$`
var no21 = [-6+Math.floor(Math.random()*4),plusminus[Math.floor(Math.random()*2)]*(5+Math.floor(Math.random()*6))];
if(no21[1]>0){
    no21[2]="+";
}else{no21[2]=""};
var no22 = [plusminus[Math.floor(Math.random()*2)]*(3+Math.floor(Math.random()*7)),plusminus[Math.floor(Math.random()*2)]*(1+Math.floor(Math.random()*10))];
no22[2] = plusminus[Math.floor(Math.random()*2)]*(3+Math.floor(Math.random()*7));
while (no22[2]==no22[0]||no22[2]==-no22[0]||no22[2]==no22[0]/2||no22[2]==2*no22[0]+2||no22[2]==-2*no22[0]-2) {
    no22[2] = plusminus[Math.floor(Math.random()*2)]*(3+Math.floor(Math.random()*7));
}
if(no22[0]>0){
    no22[3]="+"
}else{no22[3]=""}
if(no22[1]>0){
    no22[4]="+"
}else{no22[4]=""}
var no23 = [pm(1+ac(6))];
for(let iso3=1;iso3<3;iso3++){
    no23[iso3]=pm(1+ac(9))
}
while (Math.abs(no23[0])==Math.abs(no23[1])||Math.abs(no23[0])==Math.abs(no23[2])||no23[1]==no23[2]||Math.abs(no23[1]-no23[0])==1||Math.abs(no23[2]-no23[0])==1) {
    for(let iso3=1;iso3<3;iso3++){
        no23[iso3]=pm(1+ac(9))
    }
}
if(no23[1]-no23[0]>0){
    no23[3]="+"
}else{no23[3]=""}
if(no23[1]*no23[0]<0){
    no23[4]="+"
}else{no23[4]="-"}
if(no23[2]-no23[0]>0){
    no23[5]="+"
}else{no23[5]=""}
if(no23[2]*no23[0]<0){
    no23[6]="+"
}else{no23[6]="-"};
if(Math.abs(no23[0]+no23[1])%(no23[0]+no23[2])==0){
    no23[7]=(no23[0]+no23[1])/(no23[0]+no23[2])
}else if((no23[0]+no23[1])*(no23[0]+no23[2])>0){
    no23[7]=`$\\dfrac{${(no23[0]+no23[1])/gcd(no23[0]+no23[2],no23[0]+no23[1])}}{${(no23[0]+no23[2])/gcd(no23[0]+no23[2],no23[0]+no23[1])}}$`
}
else{no23[7]=`$-\\dfrac{${Math.abs((no23[0]+no23[1])/gcd(no23[0]+no23[2],no23[0]+no23[1]))}}{${Math.abs((no23[0]+no23[2])/gcd(no23[0]+no23[2],no23[0]+no23[1]))}}$`}
if(Math.abs(no23[0]+no23[2])%(no23[0]+no23[1])==0){
    no23[8]=(no23[0]+no23[2])/(no23[0]+no23[1])
}else if((no23[0]+no23[2])*(no23[0]+no23[1])>0){
    no23[8]=`$\\dfrac{${(no23[0]+no23[2])/gcd(no23[0]+no23[2],no23[0]+no23[1])}}{${(no23[0]+no23[1])/gcd(no23[0]+no23[2],no23[0]+no23[1])}}$`
}
else{no23[8]=`$-\\dfrac{${Math.abs((no23[0]+no23[2])/gcd(no23[0]+no23[2],no23[0]+no23[1]))}}{${Math.abs((no23[0]+no23[1])/gcd(no23[0]+no23[2],no23[0]+no23[1]))}}$`}
var no24 = [pm(1+ac(20))];
if(no24[0]>0){
    no24[1]="-"
}else{no24[1]="+"}
no24[2]=pm(1+ac(20));
while (no24[2]+Math.pow(no24[0],2)==0) {
    no24[2]=pm(1+ac(20));
}
if(no24[2]+Math.pow(no24[0],2)>0){
    no24[3]="+"
}else{no24[3]=""}
if(Math.abs(no24[0])==1){
    no24[4]=1/Math.abs(no24[0]);
    no24[5]=-1/Math.abs(no24[0]);
}else{no24[4]= String.raw`$\dfrac1{${Math.abs(no24[0])}}$`;
no24[5]= String.raw`$-\dfrac1{${Math.abs(no24[0])}}$`;}
var no25 = [1+ac(10)];
if(no25[0]==1){
    no25[1] = "3"
}else{no25[1]=no25[0]}
var no26 = 2+ac(10);
var no27 = 2+ac(10);
var no28 = 2+ac(10);
var no29 = [10+ac(10)];
for(let iso9=1;iso9<7;iso9++){
    no29[iso9]=2+ac(98)
}
no29[7] = 10+ac(10);
while (no29[7]==no29[0]) {
    no29[7] = 10+ac(10);
}
var no30 = [10+ac(10)];
for(let iso9=1;iso9<7;iso9++){
    no30[iso9]=2+ac(98)
}
no30[7] = 10+ac(10);
while (no30[7]==no30[0]) {
    no30[7] = 10+ac(10);
}
var no31 = [10+ac(10)];
for(let iso9=1;iso9<7;iso9++){
    no31[iso9]=2+ac(98)
}
no31[7] = 10+ac(10);
while (no31[7]==no31[0]) {
    no31[7] = 10+ac(10);
}
var no32 = [10+ac(10)];
for(let iso9=1;iso9<7;iso9++){
    no32[iso9]=2+ac(98)
}
no32[7] = 10+ac(10);
while (no32[7]==no32[0]) {
    no32[7] = 10+ac(10);
}
var no33 = [Math.pow(1+ac(6),2)];
for(let iso=1;iso<3;iso++){
    no33[iso]=2*(1+ac(4))+1;
}
while(no33[1]==no33[2]){
    no33[1]=2*(1+ac(4))+1;
}
for(let iso=3;iso<5;iso++){
    no33[iso]=1+ac(100);
}
if(Math.abs(no33[1]-no33[2])%(2*Math.sqrt(no33[0]))==0){
    no33[5]=(no33[1]-no33[2])/(2*Math.sqrt(no33[0]));
}else if((no33[1]-no33[2])<0){
    no33[5]=String.raw`$-\dfrac{${Math.abs(no33[1]-no33[2])/gcd(Math.abs(no33[1]-no33[2]),(2*Math.sqrt(no33[0])))}}{${(2*Math.sqrt(no33[0]))/gcd(Math.abs(no33[1]-no33[2]),(2*Math.sqrt(no33[0])))}}$`;
}else{no33[5]=String.raw`$\dfrac{${Math.abs(no33[1]-no33[2])/gcd(Math.abs(no33[1]-no33[2]),(2*Math.sqrt(no33[0])))}}{${(2*Math.sqrt(no33[0]))/gcd(Math.abs(no33[1]-no33[2]),(2*Math.sqrt(no33[0])))}}$`;
}
if((no33[1]+no33[2])%(2*Math.sqrt(no33[0]))==0){
    no33[6]=(no33[1]+no33[2])/(2*Math.sqrt(no33[0]));
}else{no33[6]=String.raw`$\dfrac{${(no33[1]+no33[2])/gcd((no33[1]+no33[2]),(2*Math.sqrt(no33[0])))}}{${(2*Math.sqrt(no33[0]))/gcd((no33[1]+no33[2]),(2*Math.sqrt(no33[0])))}}$`;
}
if(no33[0]==1){
    no33[0]=""
}
var no34 = [Math.pow(1+ac(6),2)];
for(let iso=1;iso<3;iso++){
    no34[iso]=2*(1+ac(4))+1;
}
while(no34[1]==no34[2]){
    no34[1]=2*(1+ac(4))+1;
}
for(let iso=3;iso<5;iso++){
    no34[iso]=1+ac(100);
}
if((no34[1]+no34[2])%(2*Math.sqrt(no34[0]))==0){
    no34[5]=(no34[1]+no34[2])/(2*Math.sqrt(no34[0]));
}else{no34[5]=String.raw`$\dfrac{${(no34[1]+no34[2])/gcd((no34[1]+no34[2]),(2*Math.sqrt(no34[0])))}}{${(2*Math.sqrt(no34[0]))/gcd((no34[1]+no34[2]),(2*Math.sqrt(no34[0])))}}$`;
}
if(Math.abs(no34[1]-no34[2])%(2*Math.sqrt(no34[0]))==0){
    no34[6]=(no34[1]-no34[2])/(2*Math.sqrt(no34[0]));
}else if((no34[1]-no34[2])<0){
    no34[6]=String.raw`$-\dfrac{${Math.abs(no34[1]-no34[2])/gcd(Math.abs(no34[1]-no34[2]),(2*Math.sqrt(no34[0])))}}{${(2*Math.sqrt(no34[0]))/gcd(Math.abs(no34[1]-no34[2]),(2*Math.sqrt(no34[0])))}}$`;
}else{no34[6]=String.raw`$\dfrac{${Math.abs(no34[1]-no34[2])/gcd(Math.abs(no34[1]-no34[2]),(2*Math.sqrt(no34[0])))}}{${(2*Math.sqrt(no34[0]))/gcd(Math.abs(no34[1]-no34[2]),(2*Math.sqrt(no34[0])))}}$`;
}
if(no34[0]==1){
    no34[0]=""
}
var no35 = [2+ac(20),1+ac(20)];
while(no35[0]<=no35[1]){
    no35[0]=2+ac(20);
    no35[1]=1+ac(20);
}
for(let iso=2;iso<6;iso++){
    no35[iso]=2+ac(198);
}
if(no35[1]==1){
    no35[1]=""
}
var myObj = {
	"soal":
		[{"no":
	 		[{"t":`Ibu Diana akan mengadakan acara keluarga di rumahnya. Banyak anggota keluarga Ibu Diana adalah ${no1[0]+no1[1]} orang. Konsumsi yang akan disediakan berupa ayam goreng kremes dan ayam bakar madu. Harga satu ayam goreng kremes dan ayam bakar madu masing-masing adalah Rp${no1[2]*no1[4]}.000,00 dan Rp${no1[3]*no1[4]}.000,00. Uang yang dikelola Ibu Diana untuk konsumsi sebesar Rp${no1[5]}.000,00. Jika $x$ dan $y$ masing-masing menyatakan banyak ayam goreng kremes dan ayam bakar madu, model matematika dari pernyataan tersebut adalah …`,"s":[String.raw`$x+y\leq${no1[0]+no1[1]}$, $${no1[6]}x+${no1[7]}y\leq${(no1[0]*no1[2]+no1[1]*no1[3])/fpbnya}$, $x\geq0$, $y\geq0$`,String.raw`$x+y\geq${no1[0]+no1[1]}$, $${no1[6]}x+${no1[7]}y\leq${(no1[0]*no1[2]+no1[1]*no1[3])/fpbnya}$, $x\geq0$, $y\geq0$`,String.raw`$x+y\leq${no1[0]+no1[1]}$, $${no1[6]}x+${no1[7]}y\geq${(no1[0]*no1[2]+no1[1]*no1[3])/fpbnya}$, $x\geq0$, $y\geq0$`,String.raw`$x+y\geq${no1[0]+no1[1]}$, $${no1[6]}x+${no1[7]}y\geq${(no1[0]*no1[2]+no1[1]*no1[3])/fpbnya}$, $x\geq0$, $y\geq0$`,String.raw`$x+y\leq${no1[0]+no1[1]}$, $${no1[6]}x+${no1[7]}y\leq${(no1[0]*no1[2]+no1[1]*no1[3])/fpbnya}$, $x\leq0$, $y\leq0$`]}]
		 },
		{"no":
	 		[{"t":"Menjelang hari raya, Ibu Nadia menjual dua jenis kue kering, yaitu nastar dan kastengel. Harga produksi satu toples nastar adalah Rp30.000,00; sedangkan harga produksi satu toples kastengel adalah Rp15.000,00. Ibu Nadia hanya mampu membuat 240 toples kue dan modal yang dimilikinya sebesar Rp5.400.000,00. Jika keuntungan yang diperoleh dari satu toples nastar adalah Rp4.000,00 dan dari satu toples kastengel adalah Rp3.000,00; banyak kastengel yang dijual agar mendapatkan keuntungan sebesar-besarnya adalah … toples.","s":["120","240","180","360","0"]},
		 	{"t":"Menjelang hari raya, Ibu Nadia menjual dua jenis kue kering, yaitu nastar dan kastengel. Harga produksi satu toples nastar adalah Rp30.000,00; sedangkan harga produksi satu toples kastengel adalah Rp40.000,00. Ibu Nadia hanya mampu membuat 300 toples kue dan modal yang dimilikinya sebesar Rp11.000.000,00. Jika keuntungan yang diperoleh dari satu toples nastar adalah Rp4.000,00 dan dari satu toples kastengel adalah Rp5.000,00; banyak kastengel yang dijual agar mendapatkan keuntungan sebesar-besarnya adalah … toples.","s":["120","180","300","255","0"]},
			{"t":"Menjelang hari raya, Ibu Nadia menjual dua jenis kue kering, yaitu nastar dan kastengel. Harga produksi satu toples nastar adalah Rp20.000,00; sedangkan harga produksi satu toples kastengel adalah Rp100.000,00. Ibu Nadia hanya mampu membuat 400 toples kue dan modal yang dimilikinya sebesar Rp20.000.000,00. Jika keuntungan yang diperoleh dari satu toples nastar adalah Rp4.000,00 dan dari satu toples kastengel adalah Rp5.000,00; banyak kastengel yang dijual agar mendapatkan keuntungan sebesar-besarnya adalah … toples.","s":["150","250","400","200","0"]}]
		 },
		{"no":
	 		[{"t":"Diketahui matriks $A=\\begin{pmatrix}4&-1\\\\-2&3\\end{pmatrix}$, $B=\\begin{pmatrix}2&2\\\\-4&-1\\end{pmatrix}$, dan $C=\\begin{pmatrix}3&5\\\\6&7\\end{pmatrix}$. Matriks $3A-B+2C$ adalah ....","s":["$\\begin{pmatrix}16&5\\\\10&24\\end{pmatrix}$","$\\begin{pmatrix}16&5\\\\2&24\\end{pmatrix}$","$\\begin{pmatrix}16&5\\\\10&22\\end{pmatrix}$","$\\begin{pmatrix}16&5\\\\2&22\\end{pmatrix}$","$\\begin{pmatrix}16&9\\\\2&22\\end{pmatrix}$"]},
		 	{"t":"Diketahui matriks $A=\\begin{pmatrix}4&-1\\\\-2&3\\end{pmatrix}$, $B=\\begin{pmatrix}-2&2\\\\4&-1\\end{pmatrix}$, dan $C=\\begin{pmatrix}3&5\\\\6&7\\end{pmatrix}$. Matriks $3A-B+2C$ adalah ....","s":["$\\begin{pmatrix}16&5\\\\2&24\\end{pmatrix}$","$\\begin{pmatrix}16&5\\\\10&24\\end{pmatrix}$","$\\begin{pmatrix}16&5\\\\10&22\\end{pmatrix}$","$\\begin{pmatrix}16&5\\\\2&22\\end{pmatrix}$","$\\begin{pmatrix}16&9\\\\2&22\\end{pmatrix}$"]},
			{"t":"Diketahui matriks $A=\\begin{pmatrix}4&-1\\\\-2&3\\end{pmatrix}$, $B=\\begin{pmatrix}2&2\\\\-4&-1\\end{pmatrix}$, dan $C=\\begin{pmatrix}3&5\\\\6&7\\end{pmatrix}$. Matriks $3A-B+2C$ adalah ....","s":["$\\begin{pmatrix}16&5\\\\10&22\\end{pmatrix}$","$\\begin{pmatrix}16&5\\\\10&24\\end{pmatrix}$","$\\begin{pmatrix}16&5\\\\2&24\\end{pmatrix}$","$\\begin{pmatrix}16&5\\\\2&22\\end{pmatrix}$","$\\begin{pmatrix}16&9\\\\2&22\\end{pmatrix}$"]}]
		 },
		{"no":
	 		[{"t":"Jika $\\begin{pmatrix}2&7\\\\1&1\\end{pmatrix}\\begin{pmatrix}x\\\\y\\end{pmatrix}=\\begin{pmatrix}-17\\\\-1\\end{pmatrix}$, nilai $2x + y$ adalah ....","s":["$1$","$0$","$2$","$3$","$-1$"]},
		 	{"t":"Jika $\\begin{pmatrix}3&5\\\\1&1\\end{pmatrix}\\begin{pmatrix}x\\\\y\\end{pmatrix}=\\begin{pmatrix}9\\\\1\\end{pmatrix}$, nilai $2x + y$ adalah ....","s":["$-1$","$0$","$2$","$3$","$1$"]},
			{"t":"Jika $\\begin{pmatrix}4&5\\\\1&1\\end{pmatrix}\\begin{pmatrix}x\\\\y\\end{pmatrix}=\\begin{pmatrix}6\\\\1\\end{pmatrix}$, nilai $2x + y$ adalah ....","s":["$0$","$1$","$2$","$3$","$-1$"]}]
		 },
         {"no":
            [
                {"t":"Diketahui matriks $A=\\begin{pmatrix}2&-3\\\\-5&1\\\\4&8\\end{pmatrix}$ dan $B=\\begin{pmatrix}-3&4&1\\\\-1&-3&5\\end{pmatrix}$. Hasil dari $AB$ adalah ....","s":["$\\begin{pmatrix}-3&17&-13\\\\14&-23&0\\\\-20&-8&44\\end{pmatrix}$","$\\begin{pmatrix}-9&-1&-13\\\\16&-17&0\\\\-4&40&44\\end{pmatrix}$","$\\begin{pmatrix}-3&-1&-13\\\\14&-17&0\\\\-20&40&44\\end{pmatrix}$","$\\begin{pmatrix}3&17&-13\\\\-14&-23&0\\\\20&-8&44\\end{pmatrix}$","$\\begin{pmatrix}-9&17&-13\\\\16&-23&0\\\\-4&-8&44\\end{pmatrix}$"]},
                {"t":"Diketahui matriks $A=\\begin{pmatrix}2&-3\\\\-5&1\\\\4&8\\end{pmatrix}$ dan $B=\\begin{pmatrix}-3&4&1\\\\1&3&5\\end{pmatrix}$. Hasil dari $AB$ adalah ....","s":["$\\begin{pmatrix}-9&-1&-13\\\\16&-17&0\\\\-4&40&44\\end{pmatrix}$","$\\begin{pmatrix}-3&17&-13\\\\14&-23&0\\\\-20&-8&44\\end{pmatrix}$","$\\begin{pmatrix}-3&-1&-13\\\\14&-17&0\\\\-20&40&44\\end{pmatrix}$","$\\begin{pmatrix}3&17&-13\\\\-14&-23&0\\\\20&-8&44\\end{pmatrix}$","$\\begin{pmatrix}-9&17&-13\\\\16&-23&0\\\\-4&-8&44\\end{pmatrix}$"]},
                {"t":"Diketahui matriks $A=\\begin{pmatrix}2&-3\\\\-5&1\\\\4&8\\end{pmatrix}$ dan $B=\\begin{pmatrix}-3&4&1\\\\1&3&5\\end{pmatrix}$. Hasil dari $AB$ adalah ....","s":["$\\begin{pmatrix}-3&-1&-13\\\\14&-17&0\\\\-20&40&44\\end{pmatrix}$","$\\begin{pmatrix}-3&17&-13\\\\14&-23&0\\\\-20&-8&44\\end{pmatrix}$","$\\begin{pmatrix}-9&-1&-13\\\\16&-17&0\\\\-4&40&44\\end{pmatrix}$","$\\begin{pmatrix}3&17&-13\\\\-14&-23&0\\\\20&-8&44\\end{pmatrix}$","$\\begin{pmatrix}-9&17&-13\\\\16&-23&0\\\\-4&-8&44\\end{pmatrix}$"]}
            ]
        },
        {"no":
            [
                {"t":"Transpos dari matriks $A=\\begin{pmatrix}5&-1&7\\\\3&0&-2\\end{pmatrix}$ adalah ....","s":["$\\begin{pmatrix}5&3\\\\-1&0\\\\7&-2\\end{pmatrix}$","$\\begin{pmatrix}3&5\\\\0&1\\\\2&7\\end{pmatrix}$","$\\begin{pmatrix}3&5\\\\0&-1\\\\-2&7\\end{pmatrix}$","$\\begin{pmatrix}5&-1&7\\\\3&0&-2\\end{pmatrix}$","$\\begin{pmatrix}3&0&-2\\\\5&-1&7\\end{pmatrix}$"]},
                {"t":"Transpos dari matriks $A=\\begin{pmatrix}3&0&2\\\\5&1&7\\end{pmatrix}$ adalah ....","s":["$\\begin{pmatrix}3&5\\\\0&1\\\\2&7\\end{pmatrix}$","$\\begin{pmatrix}5&3\\\\-1&0\\\\7&-2\\end{pmatrix}$","$\\begin{pmatrix}3&5\\\\0&-1\\\\-2&7\\end{pmatrix}$","$\\begin{pmatrix}5&-1&7\\\\3&0&-2\\end{pmatrix}$","$\\begin{pmatrix}3&0&-2\\\\5&-1&7\\end{pmatrix}$"]},
                {"t":"Transpos dari matriks $A=\\begin{pmatrix}5&3\\\\-1&0\\\\7&-2\\end{pmatrix}$ adalah ....","s":["$\\begin{pmatrix}5&-1&7\\\\3&0&-2\\end{pmatrix}$","$\\begin{pmatrix}5&3\\\\-1&0\\\\7&-2\\end{pmatrix}$","$\\begin{pmatrix}3&5\\\\0&1\\\\2&7\\end{pmatrix}$","$\\begin{pmatrix}3&5\\\\0&-1\\\\-2&7\\end{pmatrix}$","$\\begin{pmatrix}3&0&-2\\\\5&-1&7\\end{pmatrix}$"]}
            ]
        },
        {"no":
            [
                {"t":String.raw`Determinan dari matriks $A=\begin{pmatrix}${no7a11}&${no7a12}&${no7a13}\\${no7a21}&${no7a22}&${no7a23}\\${no7a31}&${no7a32}&${no7a33}\end{pmatrix}$ adalah ....`,"s":[`${no7j1}`,`${no7j2}`,`${no7j3}`,`${no7j4}`,`${no7j5}`]}
            ]
        },
		{"no":
            [
                {"t":`Jika matriks $A=\\begin{pmatrix}${no8[0]}&-1\\\\${no8[2]}&${no8[1]}\\end{pmatrix}$, invers matriks $A$ adalah $A^{-1}=$ ....`,"s":[`$\\begin{pmatrix}${-1*no8[1]}&-1\\\\${no8[2]}&${-1*no8[0]}\\end{pmatrix}$`,`$\\begin{pmatrix}${no8[1]}&1\\\\${-1*no8[2]}&${no8[0]}\\end{pmatrix}$`,`$\\begin{pmatrix}${no8[0]}&${no8[2]}\\\\-1&${no8[1]}\\end{pmatrix}$`,`$\\begin{pmatrix}${no8[0]}&-1\\\\${no8[2]}&${no8[1]}\\end{pmatrix}$`,`$\\begin{pmatrix}${-1*no8[0]}&1\\\\${-1*no8[2]}&${-1*no8[1]}\\end{pmatrix}$`]}
            ]
        },
		{"no":
            [
                {"t":`Diketahui barisan aritmatika $${no9[0]}$, $${no9[0]+no9[1]}$, $${no9[0]+2*no9[1]}$, $${no9[0]+3*no9[1]}$, ..., $${no9[0]+(no9[2]-1)*no9[1]}$. Banyak suku barisan tersebut adalah ....`,"s":[`${no9[2]}`,`${no9b[0]}`,`${no9b[1]}`,`${no9b[2]}`,`${no9b[3]}`]}
            ]
        },
		{"no":
            [
                {"t":`Suku ke-${no10[2]} barisan aritmatika $${no10[0]}$, $${no10[0]+no10[1]}$, $${no10[0]+2*no10[1]}$, $${no10[0]+3*no10[1]}$, ... adalah ....`,"s":[`${no10[0]+(no10[2]-1)*no10[1]}`,`${no10[0]+no10[2]*no10[1]}`,`${no10[0]+(no10[2]+1)*no10[1]}`,`${no10[0]+(no10[2]+2)*no10[1]}`,`${no10[0]+(no10[2]+3)*no10[1]}`]}
            ]
        },
		{"no":
            [
                {"t":`Dari suatu barisan aritmatika, diketahui suku ke-${no11[2]-no11[3]} = ${no11[1]} dan suku ke-${no11[2]} = ${no11[0]}. Suku ke-${no11[4]} barisan tersebut adalah ....`,"s":[`${no11[1]+(no11[4]-no11[2]+no11[3])*(no11[0]-no11[1])/(no11[3])}`,`${no11[1]+(no11[4]-no11[2]+no11[3]+plusminus[Math.floor(Math.random()*2)]*1)*(no11[0]-no11[1])/(no11[3])}`,`${no11[1]+(no11[4]-no11[2]+no11[3]+plusminus[Math.floor(Math.random()*2)]*2)*(no11[0]-no11[1])/(no11[3])}`,`${no11[1]+(no11[4]-no11[2]+no11[3]+plusminus[Math.floor(Math.random()*2)]*3)*(no11[0]-no11[1])/(no11[3])}`,`${no11[1]+(no11[4]-no11[2]+no11[3]+plusminus[Math.floor(Math.random()*2)]*4)*(no11[0]-no11[1])/(no11[3])}`]}
            ]
        },
        {"no":
            [
                {"t":`Dari suatu deret aritmatika dengan suku ke-n adalah U<sub>n</sub>, diketahui U<sub>${no12[2]-no12[3]}</sub> = ${no12[1]} dan U<sub>${no12[2]}</sub> = ${no12[0]}. Jumlah ${no12[4]} suku pertama dari deret tersebut adalah ....`,"s":[`${(no12[4]/2)*(2*no12[6]-(no12[4]-1)*no12[5])}`,`${((no12[4]+plusminus[Math.floor(Math.random()*2)]*1)/2)*(2*no12[6]-(no12[4]-1+plusminus[Math.floor(Math.random()*2)]*1)*no12[5])}`,`${((no12[4]+plusminus[Math.floor(Math.random()*2)]*2)/2)*(2*no12[6]-(no12[4]-1+plusminus[Math.floor(Math.random()*2)]*2)*no12[5])}`,`${((no12[4]+plusminus[Math.floor(Math.random()*2)]*3)/2)*(2*no12[6]-(no12[4]-1+plusminus[Math.floor(Math.random()*2)]*3)*no12[5])}`,`${((no12[4]+plusminus[Math.floor(Math.random()*2)]*4)/2)*(2*no12[6]-(no12[4]-1+plusminus[Math.floor(Math.random()*2)]*4)*no12[5])}`]}
            ]
        },
        {"no":
            [
                {"t":`Rumus jumlah n suku pertama dari suatu deret aritmatika dinyatakan dengan S<sub>n</sub> = $${no13[0]}n^2${no13[2]}${no13[1]}n$. Suku ke-10 deret tersebut adalah ....`,"s":[`${19*no13[0]+no13[1]}`,`${100*no13[0]+10*no13[1]}`,`${19*no13[0]+no13[1]+plusminus[Math.floor(Math.random()*2)]*2*no13[0]}`,`${19*no13[0]+no13[1]+plusminus[Math.floor(Math.random()*2)]*4*no13[0]}`,`${19*no13[0]+no13[1]+plusminus[Math.floor(Math.random()*2)]*6*no13[0]}`]}
            ]
        },
        {"no":
            [
                {"t":`Suatu perusahaan televisi menghasilkan ${no14[0]} televisi pada awal produksi dan meningkat menjadi ${no14[2]} televisi pada minggu berikutnya. Apabila peningkatan jumlah produksi konstan setiap minggunya, jumlah produksi setelah dua bulan adalah .... televisi.<br>
                <b><i>Petunjuk</i></b>: 1 bulan = 4 minggu`,"s":[`${8*no14[0]+28*no14[1]}`,`${((8+plusminus[Math.floor(Math.random()*2)])/2)*(2*no14[0]+(7+plusminus[Math.floor(Math.random()*2)])*no14[1])}`,`${((8+2*plusminus[Math.floor(Math.random()*2)])/2)*(2*no14[0]+(7+2*plusminus[Math.floor(Math.random()*2)])*no14[1])}`,`${((8+3*plusminus[Math.floor(Math.random()*2)])/2)*(2*no14[0]+(7+3*plusminus[Math.floor(Math.random()*2)])*no14[1])}`,`${((8+4*plusminus[Math.floor(Math.random()*2)])/2)*(2*no14[0]+(7+4*plusminus[Math.floor(Math.random()*2)])*no14[1])}`]}
            ]
        },
        {"no":
            [
                {"t":`Rumus suku ke-n pada barisan geometri ${no15[0]*Math.pow(no15[1],2)}, ${no15[0]*no15[1]}, ${no15[0]}, ... adalah ....`,"s":[`U<sub>n</sub> = $${no15[0]*Math.pow(no15[1],2)}\\cdot\\left(\\dfrac1${no15[1]}\\right)^{n-1}$`,`U<sub>n</sub> = $${no15[0]*Math.pow(no15[1],2)}\\cdot\\left(\\dfrac1${no15[1]}\\right)^n$`,`U<sub>n</sub> = $${no15[0]*Math.pow(no15[1],2)}\\cdot\\left(${no15[1]}\\right)^{n-1}$`,`U<sub>n</sub> = $${no15[0]*Math.pow(no15[1],2)}\\cdot\\left(${no15[1]}\\right)^n$`,`U<sub>n</sub> = $${no15[0]*Math.pow(no15[1],3)}\\cdot\\left(${no15[1]}\\right)^n$`]}
            ]
        },
        {"no":
            [
                {"t":`Suku kedua dan suku kelima dari suatu barisan geometri berturut-turut adalah ${no16[0]} dan $${no16[2]}$. Suku ke-7 barisan tersebut adalah ....`,"s":[`$\\dfrac{${no16[0]/gcd(no16[0],Math.pow(no16[1],6))}}{${Math.pow(no16[1],6)/gcd(no16[0],Math.pow(no16[1],6))}}$`,`$\\dfrac{${no16[0]/gcd(no16[0],Math.pow(no16[1],5))}}{${Math.pow(no16[1],5)/gcd(no16[0],Math.pow(no16[1],5))}}$`,`$\\dfrac{${no16[0]/gcd(no16[0],Math.pow(no16[1],4))}}{${Math.pow(no16[1],4)/gcd(no16[0],Math.pow(no16[1],4))}}$`,`$\\dfrac{${no16[0]/gcd(no16[0],Math.pow(no16[1],7))}}{${Math.pow(no16[1],7)/gcd(no16[0],Math.pow(no16[1],7))}}$`,`$\\dfrac{${no16[0]/gcd(no16[0],Math.pow(no16[1],8))}}{${Math.pow(no16[1],8)/gcd(no16[0],Math.pow(no16[1],8))}}$`]}
            ]
        },
        {"no":
            [
                {"t":`Diketahui deret geometri dengan suku ke-3 = ${no17[1]} dan suku ke-6 = ${no17[2]}. Jumlah delapan suku pertama deret tersebut adalah ....`,"s":[`${no17[0]*(Math.pow(2,8)-1)}`,`${no17[0]*(Math.pow(2,7)-1)}`,`${no17[1]*(Math.pow(2,8)-1)}`,`${no17[1]*(Math.pow(2,7)-1)}`,`${no17[0]*128}`]}
            ]
        },
        {"no":
            [
                {"t":`Suku pertama dari suatu deret geometri tak hingga adalah ${no18[0]} dan jumlah tak hingganya adalah ${no18[1]}. Rasio deret tersebut adalah ....`,"s":[`$\\dfrac{${(no18[1]-no18[0])/gcd(no18[1]-no18[0],no18[1])}}{${(no18[1])/gcd(no18[1]-no18[0],no18[1])}}$`,`$\\dfrac{${no18[0]/gcd(no18[0],no18[1])}}{${no18[1]/gcd(no18[0],no18[1])}}$`,`${no18[2]}`,`${no18[3]}`,`${no18[1]-no18[0]}`]}
            ]
        },
        {"no":
            [
                {"t":`Jumlah tak hingga dari deret ${no19[1]*Math.pow(no19[0]/(no19[0]-1),2)} + ${no19[1]*no19[0]/(no19[0]-1)} + ${no19[1]} + ... adalah ....`,"s":[`${no19[0]*no19[1]*Math.pow(no19[0]/(no19[0]-1),2)}`,`${no19[1]*Math.pow(no19[0]/(no19[0]-1),2)+no19[1]*no19[0]/(no19[0]-1)+no19[1]}`,`${no19[0]*no19[0]*no19[1]*Math.pow(no19[0]/(no19[0]-1),2)}`,`${1+no19[0]*no19[0]*no19[1]*Math.pow(no19[0]/(no19[0]-1),2)}`,`${2+no19[0]*no19[0]*no19[1]*Math.pow(no19[0]/(no19[0]-1),2)}`]}
            ]
        },
        {"no":
            [
                {"t":`Suku pertama dari suatu deret geometri tak hingga adalah ${no20[0]} dan jumlah tak hingganya adalah ${no20[1]}. Rasio deret tersebut adalah ....`,"s":[`$\\dfrac{${(no20[1]-no20[0])/gcd(no20[1]-no20[0],no20[1])}}{${(no20[1])/gcd(no20[1]-no20[0],no20[1])}}$`,`$\\dfrac{${no20[0]/gcd(no20[0],no20[1])}}{${no20[1]/gcd(no20[0],no20[1])}}$`,`${no20[2]}`,`${no20[3]}`,`${no20[1]-no20[0]}`]}
            ]
        },
        {"no":
            [
                {"t":`$\\displaystyle\\lim_{x\\to${no21[0]}}x^2${no21[2]}${no21[1]}=$ ....`,"s":[`${Math.pow(no21[0],2)+no21[1]}`,`${no21[1]-Math.pow(no21[0],2)}`,`${no21[0]+no21[1]}`,`${2*no21[0]+no21[1]}`,`${-2*no21[0]+no21[1]}`]}
            ]
        },
        {"no":
            [
                {"t":`$\\displaystyle\\lim_{x\\to${no22[2]}}x^2${no22[3]}${no22[0]}x${no22[4]}${no22[1]}=$ ....`,"s":[`${Math.pow(no22[2],2)+no22[2]*no22[0]+no22[1]}`,`${Math.pow(no22[2],2)-no22[2]*no22[0]+no22[1]}`,`${-1*Math.pow(no22[2],2)+no22[2]*no22[0]+no22[1]}`,`${-1*Math.pow(no22[2],2)-no22[2]*no22[0]+no22[1]}`,`${no22[2]*2+no22[2]*no22[0]+no22[1]}`]}
            ]
        },
        {"no":
            [
                {"t":`$\\displaystyle\\lim_{x\\to${no23[0]}}\\dfrac{x^2${no23[3]}${no23[1]-no23[0]}x${no23[4]}${Math.abs(no23[0]*no23[1])}}{x^2${no23[5]}${no23[2]-no23[0]}x${no23[6]}${Math.abs(no23[0]*no23[2])}}=$ ....`,"s":[`${no23[7]}`,`${no23[8]}`,`${new Date().getFullYear()}`,`0`,`$\\infty$`]}
            ]
        },
        {"no":
            [
                {"t":`$\\displaystyle\\lim_{x\\to${no24[0]}}\\dfrac{x${no24[1]}${Math.abs(no24[0])}}{x^2${no24[1]}${Math.abs(2*no24[0])}x${no24[3]}${no24[2]+Math.pow(no24[0],2)}}=$ ....`,"s":[`0`,String.raw`${no24[4]}`,String.raw`${no24[5]}`,`$\\dfrac1{${Math.abs(2*no24[0])}}$`,`$\\infty$`]}
            ]
        },
        {"no":
            [
                {"t":`$\\displaystyle\\lim_{x\\to${no25[0]}}\\dfrac{x^2-${Math.pow(no25[0],2)}}{x-${no25[0]}}=$ ....`,"s":[`${2*no25[0]}`,`0`,`$\\infty$`,`1`,`${no25[1]}`]}
            ]
        },
        {"no":
            [
                {"t":`$\\displaystyle\\lim_{x\\to${no26}}\\dfrac{x-${no26}}{x^2-${Math.pow(no26,2)}}=$ ....`,"s":[`$\\dfrac1{${2*no26}}$`,`$\\dfrac1{${no26}}$`,`0`,`1`,`$\\infty$`]}
            ]
        },
        {"no":
            [
                {"t":`$\\displaystyle\\lim_{x\\to${Math.pow(no27,2)}}\\dfrac{x-${Math.pow(no27,2)}}{\\sqrt{x}-${no27}}=$ ....`,"s":[`${2*no27}`,`0`,`1`,`${no27}`,`$\\infty$`]}
            ]
        },
        {"no":
            [
                {"t":`$\\displaystyle\\lim_{x\\to${Math.pow(no28,2)}}\\dfrac{\\sqrt{x}-${no28}}{x-${Math.pow(no28,2)}}=$ ....`,"s":[`$\\dfrac1{${2*no28}}$`,`$\\dfrac1{${no28}}$`,`0`,`1`,`$\\infty$`]}
            ]
        },
        {"no":
            [
                {"t":`$\\displaystyle\\lim_{x\\to\\infty}\\dfrac{${no29[0]}x^6-${no29[1]}x^4+${no29[2]}x^3-${no29[3]}}{${no29[7]}x^6+${no29[4]}x^2-${no29[5]}x+${no29[6]}}=$ ....`,"s":[`$\\dfrac{${no29[0]/gcd(no29[0],no29[7])}}{${no29[7]/gcd(no29[0],no29[7])}}$`,`$\\dfrac{${no29[7]/gcd(no29[0],no29[7])}}{${no29[0]/gcd(no29[0],no29[7])}}$`,`$\\dfrac1{${no29[7]}}$`,`0`,`$\\infty$`]}
            ]
        },
        {"no":
            [
                {"t":`$\\displaystyle\\lim_{x\\to\\infty}\\dfrac{${no30[0]}x^6-${no30[1]}x^4+${no30[2]}x^3-${no30[3]}}{${no30[7]}x^5+${no30[4]}x^2-${no30[5]}x+${no30[6]}}=$ ....`,"s":[`$\\infty$`,`$\\dfrac{${no30[0]/gcd(no30[0],no30[7])}}{${no30[7]/gcd(no30[0],no30[7])}}$`,`$\\dfrac{${no30[7]/gcd(no30[0],no30[7])}}{${no30[0]/gcd(no30[0],no30[7])}}$`,`$\\dfrac1{${no30[7]}}$`,`0`]}
            ]
        },
        {"no":
            [
                {"t":`$\\displaystyle\\lim_{x\\to\\infty}\\dfrac{${no31[0]}x^5-${no31[1]}x^4+${no31[2]}x^3-${no31[3]}}{${no31[7]}x^6+${no31[4]}x^2-${no31[5]}x+${no31[6]}}=$ ....`,"s":[`0`,`$\\infty$`,`$\\dfrac{${no31[0]/gcd(no31[0],no31[7])}}{${no31[7]/gcd(no31[0],no31[7])}}$`,`$\\dfrac{${no31[7]/gcd(no31[0],no31[7])}}{${no31[0]/gcd(no31[0],no31[7])}}$`,`$\\dfrac1{${no31[7]}}$`]}
            ]
        },
        {"no":
            [
                {"t":`$\\displaystyle\\lim_{x\\to\\infty}\\dfrac{${no32[0]}x^6-${no32[1]}x^4+${no32[2]}x^3-${no32[3]}}{${no32[7]}x^6+${no32[4]}x^2-${no32[5]}x+${no32[6]}}=$ ....`,"s":[`$\\dfrac{${no32[0]/gcd(no32[0],no32[7])}}{${no32[7]/gcd(no32[0],no32[7])}}$`,`$\\dfrac{${no32[7]/gcd(no32[0],no32[7])}}{${no32[0]/gcd(no32[0],no32[7])}}$`,`$\\dfrac1{${no32[7]}}$`,`0`,`$\\infty$`]}
            ]
        },
        {"no":
            [
                {"t":String.raw`$\displaystyle\lim_{x\to\infty}\left(\sqrt{${no33[0]}x^2+${no33[1]}x+${no33[3]}}-\sqrt{${no33[0]}x^2+${no33[2]}x+${no33[4]}}\right)=$ ....`,"s":[String.raw`${no33[5]}`,String.raw`${no33[6]}`,String.raw`$-\infty$`,`0`,String.raw`$\infty$`]}
            ]
        },
        {"no":
            [
                {"t":String.raw`$\displaystyle\lim_{x\to\infty}\left(\sqrt{${no34[0]}x^2+${no34[1]}x+${no34[3]}}-\sqrt{${no34[0]}x^2-${no34[2]}x+${no34[4]}}\right)=$ ....`,"s":[String.raw`${no34[5]}`,String.raw`${no34[6]}`,String.raw`$-\infty$`,`0`,String.raw`$\infty$`]}
            ]
        },
        {"no":
            [
                {"t":String.raw`$\displaystyle\lim_{x\to\infty}\left(\sqrt{${no35[0]}x^2-${no35[2]}x-${no35[3]}}-\sqrt{${no35[1]}x^2-${no35[4]}x-${no35[5]}}\right)=$ ....`,"s":[String.raw`$\infty$`,`${no35[2]+no35[4]}`,String.raw`$-\infty$`,`0`,`${no35[2]-no35[4]}`]}
            ]
        }
        ]
}