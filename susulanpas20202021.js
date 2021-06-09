function ac(angka){
    return Math.floor(Math.random()*angka)
}
var tanda = ["+","-"];
var tando = ["","-"];
function tand(){
    return tanda[ac(2)]
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

var no1 = [10+ac(90),1+ac(9)];
no1[2]=(2+ac(1))*no1[1];
no1[3]=(5+ac(6))*no1[1];

var no2 = [2*(1+ac(4)),3*(1+ac(3)),5*(2+ac(5))];
no2[3]=3*(no2[2]/5)

var no3 = [4*(1+ac(3))];

var no5 = [];
for(let i=0;i<12;i++){
    no5[i]=Math.pow(-1,ac(2))*(1+ac(4))
}

var no6 = [Math.pow(-1,ac(2))*3,Math.pow(-1,ac(2))*4,Math.pow(-1,ac(2)),Math.pow(-1,ac(2))*2,Math.pow(-1,ac(2))*(1+ac(2)),Math.pow(-1,ac(2))*(1+ac(2))];

var no7 = [];
for(let i=0;i<11;i++){
    no7[i]=Math.pow(-1,ac(2))*(1+ac(9))
}
no7[12]=no7[0]*no7[6]+no7[1]*no7[8];
no7[13]=no7[0]*no7[7]+no7[1]*no7[9];
no7[14]=no7[2]*no7[6]+no7[3]*no7[8];
no7[15]=no7[2]*no7[7]+no7[3]*no7[9];
no7[16]=no7[4]*no7[6]+no7[5]*no7[8];
no7[17]=no7[4]*no7[7]+no7[5]*no7[9];
const hasil7 = [12,13,14,15,16,17];
hasil7.sort((a, b) => 0.5 - Math.random());

var no8=[];
for(let i=0;i<6;i++){
    no8[i]=Math.pow(-1,ac(2))*(1+ac(99));
}

var no9=[];
for(let i=0;i<4;i++){
    no9[i]=Math.pow(-1,ac(2))*(1+ac(9));
}

var no10=[Math.pow(-1,ac(2))*(1+ac(9)),Math.pow(-1,ac(2))*(1+ac(9))];
no10[2]=no10[0]*no10[1]-1

var no11=[];
for(let i=0;i<8;i++){
    no11[i]=Math.pow(-1,ac(2))*(1+ac(9));
}

var no13=[10+ac(10)];
for(let i=1;i<3;i++){
    no13[i]=no13[i-1]+3;
}
var ar13=[10,11,12,13,14];
ar13.sort((a, b) => 0.5 - Math.random());
no13[3]=no13[0]+3*(ar13[0]-1)

var no14=[2+ac(8)];
no14[1]=no14[0]+2*(1+ac(9))
no14[2]=(no14[1]-no14[0])/2

var ar15=[2,3,4,5,6];
ar15.sort((a, b) => 0.5 - Math.random());
var ar16=[2,3,4,5,6];
ar16.sort((a, b) => 0.5 - Math.random());

var ar17=[2,3,4,5,6];
ar17.sort((a, b) => 0.5 - Math.random());
var no17=[2+ac(8)]

var no18=[2+ac(8),2+ac(2)]

var no19=[2+ac(4)]
var myObj = [
        {"t":String.raw`Toko mebel JAYA menyediakan mebel jenis klasik dan modern. Kapasitas penyimpanan toko hanya dapat memuat ${no1[0]} set mebel. Biaya pembuatan mebel jenis klasik adalah Rp${no1[2]}.000.000,00 per set dan jenis modern Rp${no1[1]}.000.000,00 per set. Modal utama untuk membuat mebel yang disediakan maksimal Rp${no1[3]}.000.000,00. Jika <m>x</m> menyatakan banyaknya persediaan mabel jenis klasik dan <m>y</m> untuk jenis modern, model matematika yang sesuai dengan kalimat tersebut adalah ....`,"s":[String.raw`<m>x+y\leq ${no1[0]}</m>; <m>${no1[2]/no1[1]}x+y\leq ${no1[3]/no1[1]}</m>; <m>x\geq0</m> dan <m>y\geq0</m>`,String.raw`<m>x+y\leq ${no1[0]}</m>; <m>${no1[2]/no1[1]}x+y\geq ${no1[3]/no1[1]}</m>; <m>x\geq0</m> dan <m>y\geq0</m>`,String.raw`<m>x+y\geq ${no1[0]}</m>; <m>${no1[2]/no1[1]}x+y\leq ${no1[3]/no1[1]}</m>; <m>x\geq0</m> dan <m>y\geq0</m>`,String.raw`<m>x+y\leq ${no1[0]}</m>; <m>x+${no1[2]/no1[1]}y\leq ${no1[3]/no1[1]}</m>; <m>x\geq0</m> dan <m>y\geq0</m>`,String.raw`<m>x+y\geq ${no1[0]}</m>; <m>x+${no1[2]/no1[1]}y\leq ${no1[3]/no1[1]}</m>; <m>x\geq0</m> dan <m>y\geq0</m>`]},
        {"t":String.raw`Pesawat penumpang yang melayani penerbangan domestik antarwilayah di suatu provinsi mempunyai kapasitas tempat duduk ${no2[0]+no2[1]} kursi yang terdiri atas kelas bisnis dan ekonomi. Setiap penumpang kelas bisnis dapat membawa bagasi 3 kg dan kelas ekonomi 2 kg. Pesawat hanya dapat membawa bagasi ${3*no2[0]+2*no2[1]} kg. Harga tiket kelas bisnis adalah Rp${no2[2]}.000,00 dan kelas ekonomi Rp${no2[3]}.000,00. Jika seluruh tempat duduk terisi oleh penumpang, banyaknya penumpang kelas ekonomi agar hasil penjualan tiket mencapai pendapatan minimum adalah ....`,"s":[`${no2[1]}`,`${no2[0]}`,`${no2[0]+no2[1]}`,`${no2[0]+2*no2[1]/3}`,`0`]},
        {"t":String.raw`Perhatikan gambar berikut.<div class="separator" style="clear: both;"><a href="https://1.bp.blogspot.com/-KGHu57FZ9BI/YL9zCRE87-I/AAAAAAAAqao/6Ox3NpEQ4lc-K4NmU_pUPf83gxmgTAcSACLcBGAsYHQ/s253/no3.jpg" style="display: block; padding: 1em 0; text-align: center; "><img alt="" border="0" width="320" data-original-height="197" data-original-width="253" src="https://1.bp.blogspot.com/-KGHu57FZ9BI/YL9zCRE87-I/AAAAAAAAqao/6Ox3NpEQ4lc-K4NmU_pUPf83gxmgTAcSACLcBGAsYHQ/s320/no3.jpg"/></a></div>Daerah yang diraster merupakan penyelesaian suatu sistem pertidaksamaan. Nilai maksimum dari fungsi objektif <m>{f(x+y)=${no3[0]}(x+y)}</m> adalah ....`,"s":[`${10*no3[0]}`,`${19*no3[0]/4}`,`${6*no3[0]}`,`${4*no3[0]}`,`${3*no3[0]}`]},
        {"t":String.raw`Suatu industri rumahan berencana membuat dua jenis roti. Untuk membuat roti jenis A diperlukan 100 g tepung dan 40 g mentega. Untuk membuat roti jenis B diperlukan 80 g tepung dan 40 g mentega. Tepung yang tersedia tidak lebih dari 32 kg dan mentega 14 kg. Harga roti jenis A Rp20.000,00 per bungkus dan jenis B Rp18.000,00 per bungkus. Penghasilan maksimum penjualan roti tersebut adalah ....`,"s":[`Rp6.700.000,00`,`Rp6.000.000,00`,`Rp7.200.000,00`,`Rp7.270.000,00`,`Rp7.440.000,00`]},
        {"t":String.raw`Diketahui matriks <m>{A=\begin{pmatrix}${no5[0]}&${no5[1]}\\${no5[2]}&${no5[3]}\end{pmatrix}}</m>, <m>{B=\begin{pmatrix}${no5[4]}&${no5[5]}\\${no5[6]}&${no5[7]}\end{pmatrix}}</m>, dan <m>{C=\begin{pmatrix}${no5[8]}&${no5[9]}\\${no5[10]}&${no5[11]}\end{pmatrix}}</m>. Matriks <m>{A-2B+3C}</m> adalah....`,"s":[String.raw`<m>\begin{pmatrix}${no5[0]-2*no5[4]+3*no5[8]}&${no5[1]-2*no5[5]+3*no5[9]}\\${no5[2]-2*no5[6]+3*no5[10]}&${no5[3]-2*no5[7]+3*no5[11]}\end{pmatrix}</m>`,String.raw`<m>\begin{pmatrix}${no5[0]-2*no5[4]-3*no5[8]}&${no5[1]-2*no5[5]-3*no5[9]}\\${no5[2]-2*no5[6]-3*no5[10]}&${no5[3]-2*no5[7]-3*no5[11]}\end{pmatrix}</m>`,String.raw`<m>\begin{pmatrix}${no5[0]+2*no5[4]+3*no5[8]}&${no5[1]+2*no5[5]+3*no5[9]}\\${no5[2]+2*no5[6]+3*no5[10]}&${no5[3]+2*no5[7]+3*no5[11]}\end{pmatrix}</m>`,String.raw`<m>\begin{pmatrix}${no5[0]+2*no5[4]-3*no5[8]}&${no5[1]+2*no5[5]-3*no5[9]}\\${no5[2]+2*no5[6]-3*no5[10]}&${no5[3]+2*no5[7]-3*no5[11]}\end{pmatrix}</m>`,String.raw`<m>\begin{pmatrix}${no5[0]-2*no5[4]+no5[8]}&${no5[1]-2*no5[5]+no5[9]}\\${no5[2]-2*no5[6]+no5[10]}&${no5[3]-2*no5[7]+no5[11]}\end{pmatrix}</m>`]},
        {"t":String.raw`Jika <m>{\begin{pmatrix}${no6[0]}&${no6[1]}\\${no6[2]}&${no6[3]}\end{pmatrix}\begin{pmatrix}x\\y\end{pmatrix}=\begin{pmatrix}${no6[0]*no6[4]+no6[1]*no6[5]}\\${no6[2]*no6[4]+no6[3]*no6[5]}\end{pmatrix}}</m>, nilai <m>{x+3y}</m> adalah....`,"s":[`${no6[4]+3*no6[5]}`,`${no6[4]-3*no6[5]}`,`${-1*no6[4]+3*no6[5]}`,`${-1*no6[4]-3*no6[5]}`,`2021`]},
        {"t":String.raw`Diketahui matriks <m>{A=\begin{pmatrix}${no7[0]}&${no7[1]}\\${no7[2]}&${no7[3]}\\${no7[4]}&${no7[5]}\end{pmatrix}}</m> dan <m>{B=\begin{pmatrix}${no7[6]}&${no7[7]}\\${no7[8]}&${no7[9]}\end{pmatrix}}</m>. Jika <m>{AB=\begin{pmatrix}p_1&p_2\\p_3&p_4\\p_5&p_6\end{pmatrix}}</m>, maka <m>p_{${hasil7[0]-11}}=</m> ....`,"s":[`${no7[hasil7[0]]}`,`${no7[hasil7[1]]}`,`${no7[hasil7[2]]}`,`${no7[hasil7[3]]}`,`${no7[hasil7[4]]}`]},
        {"t":String.raw`Transpos dari matriks <m>{A=\begin{pmatrix}${no8[0]}&${no8[1]}&${no8[2]}\\${no8[3]}&${no8[4]}&${no8[5]}\end{pmatrix}}</m> adalah....`,"s":[String.raw`<m>\begin{pmatrix}${no8[0]}&${no8[3]}\\${no8[1]}&${no8[4]}\\${no8[2]}&${no8[5]}\end{pmatrix}</m>`,String.raw`<m>\begin{pmatrix}${no8[3]}&${no8[0]}\\${no8[4]}&${no8[1]}\\${no8[5]}&${no8[2]}\end{pmatrix}</m>`,String.raw`<m>\begin{pmatrix}${no8[0]}&${no8[1]}&${no8[2]}\\${no8[3]}&${no8[4]}&${no8[5]}\end{pmatrix}</m>`,String.raw`<m>\begin{pmatrix}${no8[3]}&${no8[4]}&${no8[5]}\\${no8[0]}&${no8[1]}&${no8[2]}\end{pmatrix}</m>`,`Tidak ada`]},
        {"t":String.raw`Determinan dari matriks <m>{A=\begin{pmatrix}${no9[0]}&${no9[1]}\\${no9[2]}&${no9[3]}\end{pmatrix}}</m> adalah....`,"s":[String.raw`${no9[0]*no9[3]-no9[1]*no9[2]}`,String.raw`${no9[0]*no9[3]-no9[1]*no9[2]-1}`,String.raw`${no9[0]*no9[3]-no9[1]*no9[2]+1}`,String.raw`${no9[0]*no9[3]-no9[1]*no9[2]+2}`,`Tidak ada`]},
        {"t":String.raw`Jika matriks <m>{A=\begin{pmatrix}${no10[2]}&${no10[0]}\\${no10[1]}&1\end{pmatrix}}</m>, invers matriks <m>A</m> adalah <m>A^{-1}=</m> ....`,"s":[String.raw`<m>\begin{pmatrix}-1&${no10[0]}\\${no10[1]}&${-1*no10[2]}\end{pmatrix}</m>`,String.raw`<m>\begin{pmatrix}1&${no10[0]}\\${no10[1]}&${-1*no10[2]}\end{pmatrix}</m>`,String.raw`<m>\begin{pmatrix}-1&${no10[0]}\\${no10[1]}&${no10[2]}\end{pmatrix}</m>`,String.raw`<m>\begin{pmatrix}1&${no10[0]}\\${no10[1]}&${no10[2]}\end{pmatrix}</m>`,String.raw`<m>\begin{pmatrix}1&${-1*no10[0]}\\${-1*no10[1]}&${no10[2]}\end{pmatrix}</m>`]},
        {"t":String.raw`Matriks <m>X</m> yang memenuhi persamaan matriks  <m>{\begin{pmatrix}${no11[0]}&${no11[1]}\\${no11[2]}&${no11[3]}\end{pmatrix}+X=\begin{pmatrix}${no11[4]}&${no11[5]}\\${no11[6]}&${no11[7]}\end{pmatrix}}</m> adalah....`,"s":[String.raw`<m>\begin{pmatrix}${no11[4]-no11[0]}&${no11[5]-no11[1]}\\${no11[6]-no11[2]}&${no11[7]-no11[3]}\end{pmatrix}</m>`,String.raw`<m>\begin{pmatrix}${no11[4]+no11[0]}&${no11[5]-no11[1]}\\${no11[6]-no11[2]}&${no11[7]-no11[3]}\end{pmatrix}</m>`,String.raw`<m>\begin{pmatrix}${no11[4]-no11[0]}&${no11[5]+no11[1]}\\${no11[6]-no11[2]}&${no11[7]-no11[3]}\end{pmatrix}</m>`,String.raw`<m>\begin{pmatrix}${no11[4]-no11[0]}&${no11[5]-no11[1]}\\${no11[6]+no11[2]}&${no11[7]-no11[3]}\end{pmatrix}</m>`,String.raw`<m>\begin{pmatrix}${no11[4]-no11[0]}&${no11[5]-no11[1]}\\${no11[6]-no11[2]}&${no11[7]+no11[3]}\end{pmatrix}</m>`]},
        {"t":String.raw`Suatu barisan bilangan dirumuskan dengan <m>{U_n=n^2-2n-5}</m>. Empat suku pertama barisan tersebut adalah ....`,"s":[String.raw`-6, -5, -2, 3, ...`,String.raw`-6, -5, -2, 4, ...`,String.raw`-6, -5, -1, 3, ...`,String.raw`-6, -4, -2, 3, ...`,String.raw`-5, -4, -1, 4, ...`]},
        {"t":String.raw`Diketahui barisan aritmatika ${no13[0]}, ${no13[1]}, ${no13[2]}, ..., ${no13[3]}. Banyak suku barisan tersebut adalah ....`,"s":[String.raw`${ar13[0]}`,String.raw`${ar13[1]}`,String.raw`${ar13[2]}`,String.raw`${ar13[3]}`,String.raw`${ar13[4]}`]},
        {"t":String.raw`Dari suatu barisan aritmatika, diketahui suku ke-2 = ${no14[0]} dan suku ke-4 = ${no14[1]}. Suku ke-6 barisan tersebut adalah  ....`,"s":[String.raw`${2*no14[1]-no14[0]}`,String.raw`${no14[1]+no14[2]}`,String.raw`${no14[1]+3*no14[2]}`,String.raw`${no14[1]+4*no14[2]}`,String.raw`${no14[1]+5*no14[2]}`]},
        {"t":String.raw`Dari suatu deret aritmatika dengan suku ke-<m>n</m> adalah <m>U_n</m>, diketahui <m>U_2=${ar15[0]}</m> dan <m>U_4=${ar15[0]+4}</m>. Jumlah 10 suku pertama dari deret tersebut adalah ....`,"s":[String.raw`${10*(ar15[0]+9)}`,String.raw`${10*(ar15[1]+9)}`,String.raw`${10*(ar15[2]+9)}`,String.raw`${10*(ar15[3]+9)}`,String.raw`${10*(ar15[4]+9)}`]},
        {"t":String.raw`Rumus jumlah <m>n</m> suku pertama dari suatu deret aritmatika dinyatakan dengan <m>{S_n=2n^2+3n}</m>. Suku ke-${ar16[0]} deret tersebut adalah ....`,"s":[String.raw`${4*ar16[0]+5}`,String.raw`${4*ar16[1]+5}`,String.raw`${4*ar16[2]+5}`,String.raw`${4*ar16[3]+5}`,String.raw`${4*ar16[4]+5}`]},
        {"t":String.raw`Dalam suatu pengamatan pengembangbiakan bakteri, diperoleh bahwa setiap 30 menit, jumlah bakteri menjadi dua kali lipat dari sebelumnya. Jika mula-mula terdapat ${no17[0]} bakteri, banyaknya bakteri pada akhir menit ke-${ar17[0]} adalah ....`,"s":[String.raw`${no17[0]*Math.pow(2,ar17[0]*2)}`,String.raw`${no17[0]*Math.pow(2,ar17[1]*2)}`,String.raw`${no17[0]*Math.pow(2,ar17[2]*2)}`,String.raw`${no17[0]*Math.pow(2,ar17[3]*2)}`,String.raw`${no17[0]*Math.pow(2,ar17[4]*2)}`]},
        {"t":String.raw`Diketahui suku-suku barisan geometri ${no18[0]}, ${no18[0]*no18[1]}, ${no18[0]*no18[1]*no18[1]}, ... Rumus suku ke-<m>n</m> barisan tersebut adalah ....`,"s":[String.raw`<m>U_n=${no18[0]}\cdot${no18[1]}^{n-1}</m>`,String.raw`<m>U_n=${no18[1]}^{2-n}</m>`,String.raw`<m>U_n=${no18[0]}\cdot\left(\dfrac1{${no18[1]}}\right)^{n}</m>`,String.raw`<m>U_n=${no18[0]}\cdot\left(\dfrac1{${no18[1]}}\right)^{n-1}</m>`,String.raw`<m>U_n=${no18[0]}\cdot\left(\dfrac1{${no18[1]}}\right)^{2-n}</m>`]},
        {"t":String.raw`Suatu barisan geometri memiliki suku kedua sebesar ${no19[0]} dan suku keempat sebesar ${4*no19[0]}. Suku ke-6 barisan tersebut adalah....`,"s":[String.raw`${16*no19[0]}`,String.raw`${8*no19[0]}`,String.raw`${32*no19[0]}`,String.raw`${64*no19[0]}`,String.raw`${128*no19[0]}`]},
        {"t":String.raw`Suku ketiga dan suku kelima suatu deret geometri berturut-turtut adalah 160 dan 640. Jumlah enam suku pertama deret tersebut adalah....`,"s":[String.raw`2.520`,String.raw`2.420`,String.raw`2.440`,String.raw`2.500`,String.raw`2.560`]}
]
