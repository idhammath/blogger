function ac(angka){
    return Math.floor(Math.random()*angka)
}
function pembagi(n) {
    if (n < 1)
        throw "Argument error";
    var small = [];
    var large = [];
    var end = Math.floor(Math.sqrt(n));
    for (var i = 1; i <= end; i++) {
        if (n % i == 0) {
            small.push(i);
            if (i * i != n)  // Don't include a square root twice
                large.push(n / i);
        }
    }
    large.reverse();
    return small.concat(large);
}

FaktorTerkecil = function(n) {
    if (isNaN(n) || !isFinite(n)) return NaN;  
    if (n==0) return 0;  
    if (n%1 || n*n<2) return 1;
    if (n%2==0) return 2;  
    if (n%3==0) return 3;  
    if (n%5==0) return 5;  
    var m = Math.sqrt(n);
    for (var i=7;i<=m;i+=30) {
     if (n%i==0)      return i;
     if (n%(i+4)==0)  return i+4;
     if (n%(i+6)==0)  return i+6;
     if (n%(i+10)==0) return i+10;
     if (n%(i+12)==0) return i+12;
     if (n%(i+16)==0) return i+16;
     if (n%(i+22)==0) return i+22;
     if (n%(i+24)==0) return i+24;
    }
    return n;
   }
   
   // Optimized version of FaktorTerkecil for Opera, Chrome, Firefox.
   // In these browsers, "i divides n" is much faster as
   // (q=n/i)==Math.floor(q)  than  n%i==0
   if (
       navigator.userAgent.indexOf('Opera')  !=-1
    || navigator.userAgent.indexOf('Chrome') !=-1
    || navigator.userAgent.indexOf('Firefox')!=-1 )
   {
    FaktorTerkecil = function(n) {
     if (isNaN(n) || !isFinite(n)) return NaN;   
     if (n==0) return 0;  
     if (n%1 || n*n<2) return 1;
     if (n%2==0) return 2;  
     if (n%3==0) return 3;  
     if (n%5==0) return 5;  
     var q, m = Math.sqrt(n);
     for (var i=7;i<=m;i+=30) {
      if ((q=n/i)==Math.floor(q))      return i;
      if ((q=n/(i+4))==Math.floor(q))  return i+4;
      if ((q=n/(i+6))==Math.floor(q))  return i+6;
      if ((q=n/(i+10))==Math.floor(q)) return i+10;
      if ((q=n/(i+12))==Math.floor(q)) return i+12;
      if ((q=n/(i+16))==Math.floor(q)) return i+16;
      if ((q=n/(i+22))==Math.floor(q)) return i+22;
      if ((q=n/(i+24))==Math.floor(q)) return i+24;
     }
     return n;
    }
   }
   
   // Optimized version for Internet Explorer avoids IE's 
   // "slow script" warning at 5000000 script statements
   // by grouping 48 divisibility checks into a single statement
   
   if (navigator.userAgent.indexOf('MSIE')!=-1)
   {
    FaktorTerkecil = function(n){
     if (isNaN(n)) return NaN;  
     if (n==0) return 0;  
     if (!isFinite(n) || n%1 || n*n<2) return 1;
     if (n%2==0) return 2;  
     if (n%3==0) return 3;  
     if (n%5==0) return 5;  
     if (n%7==0) return 7;  
     var m = Math.sqrt(n);
     for (var i=11;i<=m;i+=210) {
      if (n%i && n%(i+2) && n%(i+6) && n%(i+8)&& n%(i+12)&& n%(i+18)&& n%(i+20)&& n%(i+26)
      && n%(i+30) && n%(i+32) && n%(i+36) && n%(i+42) && n%(i+48) && n%(i+50) && n%(i+56)
      && n%(i+60) && n%(i+62) && n%(i+68) && n%(i+72) && n%(i+78) && n%(i+86)
      && n%(i+90) && n%(i+92) && n%(i+96) && n%(i+98) && n%(i+102)&& n%(i+110)&& n%(i+116)
      && n%(i+120)&& n%(i+126)&& n%(i+128)&& n%(i+132)&& n%(i+138)&& n%(i+140)&& n%(i+146)
      && n%(i+152)&& n%(i+156)&& n%(i+158)&& n%(i+162)&& n%(i+168)&& n%(i+170)&& n%(i+176)
      && n%(i+180)&& n%(i+182)&& n%(i+186)&& n%(i+188)&& n%(i+198)&& n%(i+200)
      ) continue;
      for (var j=0;j<210;j+=2) {if (n%(i+j)==0) return i+j; }
     }
     return n;
    }
   }
   
   // function cekPrima(n) returns:
   // - false if n is NaN or not a finite integer
   // - true  if n is prime
   // - false otherwise
   
   cekPrima = function(n) {
    if (isNaN(n) || !isFinite(n) || n%1 || n<2) return false; 
    if (n==FaktorTerkecil(n)) return true;
    return false;
   }
var tandfull = ["+","-"];
var no1 = [2+ac(8),2+ac(8)]
while (no1[1]==no1[0]) {
    no1[1]=2+ac(8)
}

var no2 = [2+ac(8),2+ac(8)];
while (no2[1]==no2[0]) {
    no2[1]=2+ac(8)
}

 var no3=[2+ac(8),2+ac(8)];
 while (no3[1]==no3[0]) {
    no3[1]=2+ac(8)
}

 var no4=[2+ac(8),2+ac(8)];
 while (no4[1]==no4[0]) {
    no4[1]=2+ac(8)
}

 var no5=[2+ac(8),2+ac(8)];
 while (no5[1]==no5[0]) {
    no5[1]=2+ac(8)
}
 
var no6=[2+ac(8),2+ac(8)];
while (no6[1]==no6[0]) {
   no6[1]=2+ac(8)
}

var no7=[2+ac(8),2+ac(8)];
while (no7[1]==no7[0]) {
   no7[1]=2+ac(8)
}

var no8=[2+ac(8),2+ac(8)];
while (no8[1]==no8[0]) {
   no8[1]=2+ac(8)
}

var no9=[2+ac(8),2+ac(8)];
while (no9[1]==no9[0]) {
   no9[1]=2+ac(8)
}

var no10=[2+ac(8),2+ac(8)];
while (no10[1]==no10[0]) {
   no10[1]=2+ac(8)
}
 
var soalpg = [
    {"t":String.raw`<m>${no1[0]}p+${no1[1]}p=</m> ....`,"s":[`<m>${no1[0]+no1[1]}p</m>`,`<m>${no1[0]+no1[1]}p^2</m>`,`<m>${no1[0]*no1[1]}p</m>`,`<m>${no1[0]*no1[1]}p^2</m>`,`tidak bisa`]},
    {"t":String.raw`<m>${no2[0]}m\times${no2[1]}m=</m> ....`,"s":[`<m>${no2[0]*no2[1]}m^2</m>`,`<m>${no2[0]*no2[1]}m</m>`,`<m>${no2[0]+no2[1]}m^2</m>`,`<m>${no2[0]+no2[1]}m</m>`,`tidak bisa`]},
    {"t":String.raw`<m>\dfrac1{${no3[0]}}+\dfrac1{${no3[1]}}=</m> ....`,"s":[String.raw`<m>\dfrac{${no3[0]+no3[1]}}{${no3[0]*no3[1]}}</m>`,String.raw`<m>\dfrac1{${no3[0]*no3[1]}}</m>`,String.raw`<m>\dfrac1{${no3[0]+no3[1]}}</m>`,String.raw`<m>\dfrac2{${no3[0]+no3[1]}}</m>`,String.raw`<m>\dfrac2{${no3[0]*no3[1]}}</m>`]}
]
var soalising =[
    {"t":String.raw`<m>${no4[0]}-${no4[1]}=</m> ....`,"s":`${no4[0]-no4[1]}`},
    {"t":String.raw`<m>${no5[0]}+(-${no5[1]})=</m> ....`,"s":`${no5[0]-no5[1]}`},
    {"t":String.raw`<m>-${no6[0]}+${no6[1]}=</m> ....`,"s":`${no6[1]-no6[0]}`},
    {"t":String.raw`<m>${no7[0]}-(-${no7[1]})=</m> ....`,"s":`${no7[0]+no7[1]}`},
    {"t":String.raw`<m>-${no8[0]}-${no8[1]}=</m> ....`,"s":`${-1*no8[0]-no8[1]}`},
    {"t":String.raw`<m>${no9[0]}\times(-${no9[1]})=</m> ....`,"s":`-${no9[0]*no9[1]}`},
    {"t":String.raw`<m>-${no10[0]}\times(-${no10[1]})=</m> ....`,"s":`${no10[0]*no10[1]}`}
]