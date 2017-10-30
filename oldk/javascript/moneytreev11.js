//Leaderboards:

//Regular Mode
/**
#1-$9e+258-‹«˚˙£ÚK€-🔘-C卄ɐᔆ∑˙˚»›
#2-$8.838065436454893e+164-Liam Reinert
#3-$4.036624228197366e+162-Fαrεεs
#4-7,000,000-loudmouthhooligan
#5-1,000,000-Blaze(CT-2/002-24)
*/
//Death Mode
/**
#1-757689-Levi Hoskins
*/
//Death Mode! In this mode, you have to pay 1000 dollars to the bank every minute or else your tree dies. Everything is twice the price and if you get over 1,000,000, game over!
var deathMode=false;//Change this to true!
var shor = function(value) {
    if (value < pow(10, 3)) {
        return value;
    } else if (value < pow(10, 6)) {
        return (round(value / pow(10, 1)) / 100) + " thousand";
    } else if (value < pow(10, 9)) {
        return (round(value / pow(10, 4)) / 100) + " million";
    } else if (value < pow(10, 12)) {
        return (round(value / pow(10, 7)) / 100) + " billion";
    } else if (value < pow(10, 15)) {
        return (round(value / pow(10, 10)) / 100) + " trillion";
    } else if (value < pow(10, 18)) {
        return (round(value / pow(10, 13)) / 100) + " quadrillion";
    } else if (value < pow(10, 21)) {
        return (round(value / pow(10, 16)) / 100) + " quintillion";
    } else if (value < pow(10, 24)) {
        return (round(value / pow(10, 19)) / 100) + " septillion";
    } else if (value < pow(10, 27)) {
        return (round(value / pow(10, 22)) / 100) + " pentillion";
    } else if (value < pow(10, 30)) {
        return (round(value / pow(10, 25)) / 100) + " octillion";
    } else if (value < pow(10, 33)) {
        return (round(value / pow(10, 28)) / 100) + " nonillion";
    } else if (value < pow(10, 39)) {
        return (round(value / pow(10, 31)) / 100) + " dectillion";
    } else if (value < pow(10, 48)) {
        return (round(value / pow(10, 34)) / 100) + " dodectillion";
    } else {
        return "YOU ARE RICH!";
    }
};
var deathTimer=0;
var page="tree";
var money=450;
var moneyAdding=1;
var gardener=1;
var farmer=2;
var upgradeMoney=500;
var MagicTouch=false;
var Gardener=false;
var Rain=false;
var MoreIsLess=false;
var BiggerBarrels=false;
var Rainbow=false;
var Farmer=false;
var leaves=false;
var moved=0;
var Moved=false;
var MovedAdded=-7;
var GardenerNum=0;
var FarmerNum=0;
var RainTime=0;
var fillType=0;
var fillTypeAddition=2;
var textMessage=["Once upon a time a father \n              had a son"," One day his father asked\n   him what he wanted to\n           do for a living","    He said he wanted to\n    grow a money tree..."];
var textMessageNum=0;
mouseClicked=function(){
if (page==="tree"){leaves=true;}    
if (page==="tree"){money+=moneyAdding;}
if (page==="tree"&&mouseX>295&&mouseY>350&&mouseY<375){Moved=true;}
if (page==="upgrades"&&mouseY>0&&mouseY<30&&money>=upgradeMoney/2){MagicTouch=true;money=money-upgradeMoney/2;}
if (page==="upgrades"&&mouseY>40&&mouseY<90&&money>=upgradeMoney){Gardener=true;money=money-upgradeMoney;GardenerNum+=1;}
if (page==="upgrades"&&mouseY>80&&mouseY<130&&money>=upgradeMoney*2){Rain=true;money=money-upgradeMoney*2;}
if (page==="upgrades"&&mouseY>130&&mouseY<170&&money>=upgradeMoney*1.5){MoreIsLess=true;money=money-upgradeMoney*1.5;}
if (page==="upgrades"&&mouseY>170&&mouseY<210&&money>=upgradeMoney*3){BiggerBarrels=true;money=money-upgradeMoney*3;}
if (page==="upgrades"&&mouseY>220&&mouseY<280&&money>=upgradeMoney){Rainbow=true;money=money-upgradeMoney;}
if (page==="upgrades"&&mouseY>280&&mouseY<305&&money>=upgradeMoney*2){Farmer=true;money=money-upgradeMoney*2;FarmerNum+=1;}
if (page==="upgrades"&&mouseX>15&&mouseX<65&&mouseY>340&&mouseY<365){Moved=false;}
};
if (deathMode===true){money=940;}  
if (Rainbow===true){gardener=gardener*1.5;farmer=farmer*1.5;}
var draw= function() {
if (Moved===true){translate(0,moved);if (moved>-400){moved+=MovedAdded;}}else{moved=0;page="tree";}
if (moved<-399){page="upgrades";}
if (MagicTouch===true){moneyAdding=2;}    
if (Gardener===true){money+=GardenerNum*gardener;}
if (Rain===true){if (second()===30){money+=5000;}if (second()===0){money+=5000;}}
if (MoreIsLess===true){upgradeMoney=250;}
if (BiggerBarrels===true){gardener=2;farmer=6;}
if (Farmer===true){money+=FarmerNum*farmer;}
cursor();    
noStroke();    
if (page==="tree"&&mouseX>295&&mouseY>350&&mouseY<375||page==="upgrades"&&mouseY>0&&mouseY<40||page==="upgrades"&&mouseY>40&&mouseY<80||page==="upgrades"&&mouseY>80&&mouseY<120||page==="upgrades"&&mouseY>120&&mouseY<160||page==="upgrades"&&mouseY>160&&mouseY<200||page==="upgrades"&&mouseY>210&&mouseY<270||page==="upgrades"&&mouseY>270&&mouseY<295||page==="upgrades"&&mouseX>15&&mouseX<65&&mouseY>330&&mouseY<355){
cursor(HAND);    
}
if (page==="tree"){
if (deathMode===true){
upgradeMoney=1000;
}    
background(0, 136, 255);
for (var y=0;y<400;y+=1){
fill(214, 223, 255,2.5);
rect(0,y,400,y);
}
if (Rainbow===true){
fill(255,0,0,200);
arc(200,330,450,300,180,360);
fill(255, 89, 0,200);
arc(200,330,410,260,180,360);
fill(255,255,0,200);
arc(200,330,370,220,180,360);
fill(0, 148, 0,200);
arc(200,330,330,180,180,360);
fill(0, 173, 173,200);
arc(200,330,290,140,180,360);
fill(89, 0, 255);
arc(200,330,250,100,180,360);
fill(178, 206, 255);
arc(200,330,210,60,180,360);
}
if (Rain===true){
if (second()>27&&second()<33||second()>57||second()<3){
for (var x=-10;x<410;x+=random(0,10)){
for (var y=0;y<400;y+=random(20,50)){
fill(0, 89, 255);
ellipse(x,y,2,10);
}}}}
if (Gardener===true){
fill(155,155,155,220);
quad(232,280,308,280,290,260,250,260);
rect(240,280,70,50,5);    
}
if (Farmer===true){
fill(87, 86, 86);
quad(322,282,388,282,375,260,335,260);
fill(168, 0, 0);
rect(320,280,70,50,5);
fill(0);
rect(330,290,15,15,2);
rect(365,290,15,15,2);
fill(56, 22, 0);
rect(348,310,15,20,2);
}
if (BiggerBarrels===true){
fill(99, 36, 0);
rect(50,270,50,100,2);
fill(48, 22, 0);
ellipse(75,270,50,20);
}
fill(15,148,0);
rect(0,330,400,320);
for (var x=-10;x<400;x+=20){
triangle(x,330,x+10,310,x+20,330);    
}
for (var a=320;a<400;a+=1){
fill(10,20,0,4);
rect(0,a,400,a);
}
fill(15, 41, 0);
rect(0,500,400,400);
fill(59, 36, 0);
quad(150,350,250,350,230,100,170,100);
for (var a=0;a<50;a+=2){
if (a<30){    
fill(163, 92, 0,2.5);
quad(150+a,350-a,250-a,350-a,230-a,100,170+a,100);    
}
}
fill(15, 148, 0);
ellipse(200,0,600,300);
for (var a=0;a<600;a+=5){
if (a<350){
fill(10,20,0,10);
ellipse(200,0,600-a,300-a);
}
}
fill(255);
textSize(40);
text("Money Tree",90,50);
textSize(20);
text("Click to earn money and get upgrades!",30,80);
textAlign(CENTER, CENTER);
text("You have $"+shor(money), 200, 100);
textAlign(CORNER, BASELINE);
text("Upgrades!",300,370);
textSize(15);
text("$"+money,10,350);
text(GardenerNum+" gardeners!",10,370);
text(FarmerNum+" farmers!",10,390);
stroke(255);
line(110,335,110,395);
noStroke();
if (Rain===true){
text("Raining In: "+RainTime,120,350);
if (second()>30){RainTime=61-second();}
if (second()<30){RainTime=31-second();}
}
if (MagicTouch===true){
text("Magic Touch!",120,370);
}
if (MoreIsLess===true){
text("More Is Less!",120,390);
}
if (textMessageNum<textMessage.length){
fillType+=fillTypeAddition;    
background(0);
if (fillType>255){fillTypeAddition=-2;}
if (fillType<0){fillTypeAddition=2;textMessageNum+=1;}
fill(255,255,255,fillType);
textSize(30);
text(textMessage[textMessageNum],20,170);
}  
if (deathMode===true){
if (deathTimer>1000){
money+=-1000;
deathTimer=0;
}
}
if (deathMode===true){
if (money>1000000){
noLoop();    
background(0);
textSize(60);
text("GAME OVER",20,100);
textSize(20);
text("You got more than $1,000,000! A robber\ncame and took it all! Your score was:\n\n                          "+millis(),10,200);
}
if (money<0){
noLoop();    
background(0);
textSize(60);
text("GAME OVER",20,100);
textSize(20);
text("You got more than $1,000,000! A robber\ncame and took it all! Your score was:\n\n                          "+millis(),10,200);    
}
}
}    
if (page==="upgrades"){
background(15,41,0);
fill(255);
textSize(20);
text("Magic Touch - Twice the money!  $"+upgradeMoney/2,20,430);
text("Gardener - Automatic money  $"+upgradeMoney,20,470);
text("Rain - Every 30 seconds get 5,000 cash  \n$"+upgradeMoney*2,20,510);
text("More is less - 50% off other items  $"+upgradeMoney*1.5,20,560);
text("Bigger barrels - Gardeners get double $$\n$"+upgradeMoney*3,20,600);
text("Rainbow - Inspires everyone to work 150%\nas fast  $"+upgradeMoney,20,650);
text("Farmer - Works as fast as 2 gardeners  \n$"+upgradeMoney*1.8,20,700);
fill(255, 0, 0);
text("You have $"+money+" to spend!",100,750);
text("You have $"+shor(money),100, 770);
fill(255);
text("Back",20,760);
}
};