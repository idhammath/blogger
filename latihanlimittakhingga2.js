function ac(angka){
    return Math.floor(Math.random()*angka)
}
const tanda = ["+","-"];
const tando = ["","-"];
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

var no1 = [];
for(let i=0;i<10;i++){
    no1[i]=2+ac(98)
}
while(no1[5]==no1[0]){
    no1[5]=2+ac(98)
}
no1[10] = 7+ac(93);
for(let i=11;i<14;i++){
    no1[i]=17-i+ac(no1[i-1]-17+i)
}
no1[14] = 6+ac(no1[10]-6);
for(let i=15;i<18;i++){
    no1[i]=20-i+ac(no1[i-1]-20+i)
}
if(no1[0]%no1[5]==0){
    no1[18]=no1[0]/no1[5]
}else{no1[18]=String.raw`<m>\dfrac{${no1[0]/fpb2(no1[0],no1[5])}}{${no1[5]/fpb2(no1[0],no1[5])}}</m>`}
if(no1[5]%no1[0]==0){
    no1[19]=no1[5]/no1[0]
}else{no1[19]=String.raw`<m>\dfrac{${no1[5]/fpb2(no1[0],no1[5])}}{${no1[0]/fpb2(no1[0],no1[5])}}</m>`}

var no2 = [];
for(let i=0;i<10;i++){
    no2[i]=2+ac(98)
}
no2[10] = 7+ac(93);
for(let i=11;i<14;i++){
    no2[i]=17-i+ac(no2[i-1]-17+i)
}
no2[14] = 6+ac(no2[10]-6);
for(let i=15;i<18;i++){
    no2[i]=20-i+ac(no2[i-1]-20+i)
}
if(no2[0]%no2[5]==0){
    no2[18]=no2[0]/no2[5]
}else{no2[18]=String.raw`<m>\dfrac{${no2[0]/fpb2(no2[0],no2[5])}}{${no2[5]/fpb2(no2[0],no2[5])}}</m>`}
if(no2[5]%no2[0]==0){
    no2[19]=no2[5]/no2[0]
}else{no2[19]=String.raw`<m>\dfrac{${no2[5]/fpb2(no2[0],no2[5])}}{${no2[0]/fpb2(no2[0],no2[5])}}</m>`}

var no3 = [];
for(let i=0;i<10;i++){
    no3[i]=2+ac(98)
}
while(no3[5]==no3[0]){
    no3[5]=2+ac(98)
}
no3[10] = 7+ac(93);
for(let i=11;i<14;i++){
    no3[i]=17-i+ac(no3[i-1]-17+i)
}
no3[14] = no3[10];
for(let i=15;i<18;i++){
    no3[i]=21-i+ac(no3[i-1]-21+i)
}
if(no3[0]%no3[5]==0){
    no3[18]=no3[0]/no3[5]
}else{no3[18]=String.raw`<m>\dfrac{${no3[0]/fpb2(no3[0],no3[5])}}{${no3[5]/fpb2(no3[0],no3[5])}}</m>`}
if(no3[5]%no3[0]==0){
    no3[19]=no3[5]/no3[0]
}else{no3[19]=String.raw`<m>\dfrac{${no3[5]/fpb2(no3[0],no3[5])}}{${no3[0]/fpb2(no3[0],no3[5])}}</m>`}

const i1 = ac(2);
const i2 = ac(2);
const no4temp1 = 3+ac(8);
const no4temp2 = 2+ac(no4temp1-2);
var no4 = [Math.pow(no4temp1,2),Math.pow(no4temp2,2),2+ac(19),2+ac(19)]
while (no4[2]==no4[3]) {
    no4[2]=2+ac(19);
    no4[3]=2+ac(19);
}
for(let i=4;i<6;i++){
    no4[i]=2+ac(98)
}
if(Math.abs(Math.pow(-1,i1)*no4[2]-Math.pow(-1,i2)*no4[3])%(2*no4temp1)==0){
    no4[6]=(Math.pow(-1,i1)*no4[2]-Math.pow(-1,i2)*no4[3])/(2*no4temp1)
}else{no4[6]=String.raw`<m>${tando[(1-((Math.pow(-1,i1)*no4[2]-Math.pow(-1,i2)*no4[3])/Math.abs(Math.pow(-1,i1)*no4[2]-Math.pow(-1,i2)*no4[3])))/2]}\dfrac{${Math.abs(Math.pow(-1,i1)*no4[2]-Math.pow(-1,i2)*no4[3])/fpb2(Math.abs(Math.pow(-1,i1)*no4[2]-Math.pow(-1,i2)*no4[3]),(2*no4temp1))}}{${(2*no4temp1)/fpb2(Math.abs(Math.pow(-1,i1)*no4[2]-Math.pow(-1,i2)*no4[3]),(2*no4temp1))}}</m>`}
if(Math.abs(Math.pow(-1,i1)*no4[2]+Math.pow(-1,i2)*no4[3])%(2*no4temp1)==0){
    no4[7]=(Math.pow(-1,i1)*no4[2]+Math.pow(-1,i2)*no4[3])/(2*no4temp1)
}else{no4[7]=String.raw`<m>${tando[(1-((Math.pow(-1,i1)*no4[2]+Math.pow(-1,i2)*no4[3])/Math.abs(Math.pow(-1,i1)*no4[2]+Math.pow(-1,i2)*no4[3])))/2]}\dfrac{${Math.abs(Math.pow(-1,i1)*no4[2]+Math.pow(-1,i2)*no4[3])/fpb2(Math.abs(Math.pow(-1,i1)*no4[2]+Math.pow(-1,i2)*no4[3]),(2*no4temp1))}}{${(2*no4temp1)/fpb2(Math.abs(Math.pow(-1,i1)*no4[2]+Math.pow(-1,i2)*no4[3]),(2*no4temp1))}}</m>`}
if(Math.abs(-1*Math.pow(-1,i1)*no4[2]-Math.pow(-1,i2)*no4[3])%(2*no4temp1)==0){
    no4[8]=(-1*Math.pow(-1,i1)*no4[2]-Math.pow(-1,i2)*no4[3])/(2*no4temp1)
}else{no4[8]=String.raw`<m>${tando[(1-((-1*Math.pow(-1,i1)*no4[2]-Math.pow(-1,i2)*no4[3])/Math.abs(-1*Math.pow(-1,i1)*no4[2]-Math.pow(-1,i2)*no4[3])))/2]}\dfrac{${Math.abs(-1*Math.pow(-1,i1)*no4[2]-Math.pow(-1,i2)*no4[3])/fpb2(-1*Math.abs(Math.pow(-1,i1)*no4[2]-Math.pow(-1,i2)*no4[3]),(2*no4temp1))}}{${(2*no4temp1)/fpb2(-1*Math.abs(Math.pow(-1,i1)*no4[2]-Math.pow(-1,i2)*no4[3]),(2*no4temp1))}}</m>`}
const i3 = ac(2);
const i4 = ac(2);
const no5temp2 = 3+ac(8);
const no5temp1 = 2+ac(no5temp2-2);
var no5 = [Math.pow(no5temp1,2),Math.pow(no5temp2,2),2+ac(19),2+ac(19),2+ac(98),2+ac(98)]
while (no5[2]==no5[3]) {
    no5[2]=2+ac(19);
    no5[3]=2+ac(19);
}
if(Math.abs(Math.pow(-1,i1)*no5[2]-Math.pow(-1,i2)*no5[3])%(2*no5temp1)==0){
    no5[6]=(Math.pow(-1,i1)*no5[2]-Math.pow(-1,i2)*no5[3])/(2*no5temp1)
}else{no5[6]=String.raw`<m>${tando[(1-((Math.pow(-1,i1)*no5[2]-Math.pow(-1,i2)*no5[3])/Math.abs(Math.pow(-1,i1)*no5[2]-Math.pow(-1,i2)*no5[3])))/2]}\dfrac{${Math.abs(Math.pow(-1,i1)*no5[2]-Math.pow(-1,i2)*no5[3])/fpb2(Math.abs(Math.pow(-1,i1)*no5[2]-Math.pow(-1,i2)*no5[3]),(2*no5temp1))}}{${(2*no5temp1)/fpb2(Math.abs(Math.pow(-1,i1)*no5[2]-Math.pow(-1,i2)*no5[3]),(2*no5temp1))}}</m>`}
if(Math.abs(Math.pow(-1,i1)*no5[2]+Math.pow(-1,i2)*no5[3])%(2*no5temp1)==0){
    no5[7]=(Math.pow(-1,i1)*no5[2]+Math.pow(-1,i2)*no5[3])/(2*no5temp1)
}else{no5[7]=String.raw`<m>${tando[(1-((Math.pow(-1,i1)*no5[2]+Math.pow(-1,i2)*no5[3])/Math.abs(Math.pow(-1,i1)*no5[2]+Math.pow(-1,i2)*no5[3])))/2]}\dfrac{${Math.abs(Math.pow(-1,i1)*no5[2]+Math.pow(-1,i2)*no5[3])/fpb2(Math.abs(Math.pow(-1,i1)*no5[2]+Math.pow(-1,i2)*no5[3]),(2*no5temp1))}}{${(2*no5temp1)/fpb2(Math.abs(Math.pow(-1,i1)*no5[2]+Math.pow(-1,i2)*no5[3]),(2*no5temp1))}}</m>`}
if(Math.abs(-1*Math.pow(-1,i1)*no5[2]-Math.pow(-1,i2)*no5[3])%(2*no5temp1)==0){
    no5[8]=(-1*Math.pow(-1,i1)*no5[2]-Math.pow(-1,i2)*no5[3])/(2*no5temp1)
}else{no5[8]=String.raw`<m>${tando[(1-((-1*Math.pow(-1,i1)*no5[2]-Math.pow(-1,i2)*no5[3])/Math.abs(-1*Math.pow(-1,i1)*no5[2]-Math.pow(-1,i2)*no5[3])))/2]}\dfrac{${Math.abs(-1*Math.pow(-1,i1)*no5[2]-Math.pow(-1,i2)*no5[3])/fpb2(-1*Math.abs(Math.pow(-1,i1)*no5[2]-Math.pow(-1,i2)*no5[3]),(2*no5temp1))}}{${(2*no5temp1)/fpb2(-1*Math.abs(Math.pow(-1,i1)*no5[2]-Math.pow(-1,i2)*no5[3]),(2*no5temp1))}}</m>`}

const no6temp = 2+ac(9);
var no6 = [Math.pow(no6temp,2),2+ac(19),2+ac(19),2+ac(98),2+ac(98)];
while (no6[1]==no6[2]) {
    no6[1]=2+ac(19);
    no6[2]=2+ac(19);
}
if(Math.abs(no6[1]-no6[2])%(2*no6temp)==0){
    no6[5]=(no6[1]-no6[2])/(2*no6temp)
}else{no6[5]=String.raw`<m>${tando[(1-(no6[1]-no6[2])/Math.abs(no6[1]-no6[2]))/2]}\dfrac{${Math.abs(no6[1]-no6[2])/fpb2(Math.abs(no6[1]-no6[2]),2*no6temp)}}{${(2*no6temp)/fpb2(Math.abs(no6[1]-no6[2]),2*no6temp)}}</m>`}
if((no6[1]+no6[2])%(2*no6temp)==0){
    no6[6]=(no6[1]+no6[2])/(2*no6temp)
}else{no6[6]=String.raw`<m>\dfrac{${(no6[1]+no6[2])/fpb2((no6[1]+no6[2]),2*no6temp)}}{${(2*no6temp)/fpb2((no6[1]+no6[2]),2*no6temp)}}</m>`}
no6[7]=String.raw`<m>-\dfrac{${(no6[1]+no6[2])/fpb2((no6[1]+no6[2]),2*no6temp)}}{${(2*no6temp)/fpb2((no6[1]+no6[2]),2*no6temp)}}</m>`

const no7temp = 2+ac(9);
var no7 = [Math.pow(no7temp,2),2+ac(19),2+ac(19),2+ac(98),2+ac(98)];
while (no7[1]==no7[2]) {
    no7[1]=2+ac(19);
    no7[2]=2+ac(19);
}
if((no7[1]+no7[2])%(2*no7temp)==0){
    no7[5]=(no7[1]+no7[2])/(2*no7temp)
}else{no7[5]=String.raw`<m>\dfrac{${(no7[1]+no7[2])/fpb2((no7[1]+no7[2]),2*no7temp)}}{${(2*no7temp)/fpb2((no7[1]+no7[2]),2*no7temp)}}</m>`}
if(Math.abs(no7[1]-no7[2])%(2*no7temp)==0){
    no7[6]=(no7[1]-no7[2])/(2*no7temp);
    no7[7]=(no7[2]-no7[1])/(2*no7temp);
}else{no7[6]=String.raw`<m>${tando[(1-(no7[1]-no7[2])/Math.abs(no7[1]-no7[2]))/2]}\dfrac{${Math.abs(no7[1]-no7[2])/fpb2(Math.abs(no7[1]-no7[2]),2*no7temp)}}{${(2*no7temp)/fpb2(Math.abs(no7[1]-no7[2]),2*no7temp)}}</m>`;
no7[7]=String.raw`<m>${tando[(1-(no7[2]-no7[1])/Math.abs(no7[2]-no7[1]))/2]}\dfrac{${Math.abs(no7[2]-no7[1])/fpb2(Math.abs(no7[2]-no7[1]),2*no7temp)}}{${(2*no7temp)/fpb2(Math.abs(no7[2]-no7[1]),2*no7temp)}}</m>`}

const no8temp = 2+ac(9);
var no8 = [Math.pow(no7temp,2),2+ac(19),2+ac(19),2+ac(98),2+ac(98)];
while (no8[1]==no8[2]) {
    no8[1]=2+ac(19);
    no8[2]=2+ac(19);
}
if(Math.abs(no8[1]+no8[2])%(2*no8temp)==0){
    no8[5]=(-1*no8[1]-no8[2])/(2*no8temp)
}else{no8[5]=String.raw`<m>-\dfrac{${Math.abs(no8[1]+no8[2])/fpb2(Math.abs(no8[1]+no8[2]),2*no8temp)}}{${(2*no8temp)/fpb2(Math.abs(no8[1]+no8[2]),2*no8temp)}}</m>`}
if(Math.abs(no8[1]-no8[2])%(2*no8temp)==0){
    no8[6]=(no8[1]-no8[2])/(2*no8temp);
    no8[7]=(no8[2]-no8[1])/(2*no8temp);
}else{no8[6]=String.raw`<m>${tando[(1-(no8[1]-no8[2])/Math.abs(no8[1]-no8[2]))/2]}\dfrac{${Math.abs(no8[1]-no8[2])/fpb2(Math.abs(no8[1]-no8[2]),2*no8temp)}}{${(2*no8temp)/fpb2(Math.abs(no8[1]-no8[2]),2*no7temp)}}</m>`;
no8[7]=String.raw`<m>${tando[(1-(no8[2]-no8[1])/Math.abs(no8[2]-no8[1]))/2]}\dfrac{${Math.abs(no8[2]-no8[1])/fpb2(Math.abs(no8[2]-no8[1]),2*no8temp)}}{${(2*no7temp)/fpb2(Math.abs(no8[2]-no8[1]),2*no8temp)}}</m>`}
var myObj = [
        {
            "t":String.raw`<m>\displaystyle\lim_{x\to\infty}\dfrac{${no1[0]}x^{${no1[10]}}${tand()}${no1[1]}x^{${no1[11]}}${tand()}${no1[2]}x^{${no1[12]}}${tand()}${no1[3]}x^{${no1[13]}}${tand()}${no1[4]}}{${no1[5]}x^{${no1[14]}}${tand()}${no1[6]}x^{${no1[15]}}${tand()}${no1[7]}x^{${no1[16]}}${tand()}${no1[8]}x^{${no1[17]}}${tand()}${no1[9]}}=</m> ....`,"s":[`<m>\\infty</m>`,`<m>-\\infty</m>`,`0`,`${no1[18]}`,`${no1[19]}`]
        },
        {"t":String.raw`<m>\displaystyle\lim_{x\to\infty}\dfrac{${no2[5]}x^{${no2[14]}}${tand()}${no2[6]}x^{${no2[15]}}${tand()}${no2[7]}x^{${no2[16]}}${tand()}${no2[8]}x^{${no2[17]}}${tand()}${no2[9]}}{${no2[0]}x^{${no2[10]}}${tand()}${no2[1]}x^{${no2[11]}}${tand()}${no2[2]}x^{${no2[12]}}${tand()}${no2[3]}x^{${no2[13]}}${tand()}${no2[4]}}=</m> ....`,"s":[`0`,`<m>\\infty</m>`,`<m>-\\infty</m>`,`${no2[18]}`,`${no2[19]}`]},
        {"t":String.raw`<m>\displaystyle\lim_{x\to\infty}\dfrac{${no3[0]}x^{${no3[10]}}${tand()}${no3[1]}x^{${no3[11]}}${tand()}${no3[2]}x^{${no3[12]}}${tand()}${no3[3]}x^{${no3[13]}}${tand()}${no3[4]}}{${no3[5]}x^{${no3[14]}}${tand()}${no3[6]}x^{${no3[15]}}${tand()}${no3[7]}x^{${no3[16]}}${tand()}${no3[8]}x^{${no3[17]}}${tand()}${no3[9]}}=</m> ....`,"s":[`${no3[18]}`,`<m>\\infty</m>`,`<m>-\\infty</m>`,`0`,`${no3[19]}`]},
        {"t":String.raw`<m>\displaystyle\lim_{x\to\infty}\sqrt{${no4[0]}x^2${tanda[i1]}${no4[2]}x${tand()}${no4[4]}}-\sqrt{${no4[1]}x^2${tanda[i2]}${no4[3]}x${tand()}${no4[5]}}=</m> ....`,"s":[`<m>\\infty</m>`,`${no4[6]}`,`<m>-\\infty</m>`,`${no4[7]}`,`${no4[8]}`]},
        {"t":String.raw`<m>\displaystyle\lim_{x\to\infty}\sqrt{${no5[0]}x^2${tanda[i3]}${no5[2]}x${tand()}${no5[4]}}-\sqrt{${no5[1]}x^2${tanda[i4]}${no5[3]}x${tand()}${no5[5]}}=</m> ....`,"s":[`<m>-\\infty</m>`,`${no5[6]}`,`<m>\\infty</m>`,`${no5[7]}`,`${no5[8]}`]},
        {"t":String.raw`<m>\displaystyle\lim_{x\to\infty}\sqrt{${no6[0]}x^2+${no6[1]}x${tand()}${no6[3]}}-\sqrt{${no6[0]}x^2+${no6[2]}x${tand()}${no6[4]}}=</m> ....`,"s":[`${no6[5]}`,`<m>\\infty</m>`,`<m>-\\infty</m>`,`${no6[6]}`,`${no6[7]}`]},
        {"t":String.raw`<m>\displaystyle\lim_{x\to\infty}\sqrt{${no7[0]}x^2+${no7[1]}x${tand()}${no7[3]}}-\sqrt{${no7[0]}x^2-${no7[2]}x${tand()}${no7[4]}}=</m> ....`,"s":[`${no7[5]}`,`<m>\\infty</m>`,`<m>-\\infty</m>`,`${no7[6]}`,`${no7[7]}`]},
        {"t":String.raw`<m>\displaystyle\lim_{x\to\infty}\sqrt{${no8[0]}x^2-${no8[1]}x${tand()}${no8[3]}}-\sqrt{${no8[0]}x^2-${no8[2]}x${tand()}${no8[4]}}=</m> ....`,"s":[`${no8[5]}`,`<m>\\infty</m>`,`<m>-\\infty</m>`,`${no8[6]}`,`${no8[7]}`]}
]