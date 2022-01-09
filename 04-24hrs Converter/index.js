const time = '12:10AM';

function convertTo24HrsFormat(time) {
    // write your solution here
let hour = time.split(":")[0];
let min = time.split(":")[1];
let symbol ="";
if(min.length==3){
symbol=min.slice(1);
min =time.split(":")[1].slice(0,1);
}else if(min.length==4){
symbol=min.slice(2);
min =time.split(":")[1].slice(0,2);
}

let result="";
if(hour<12 &&symbol==="PM"){
   hour=parseInt(hour)+12;
   hour= hour.toString();
   
   
 
}else if(hour==="12" &&symbol==="AM"){
 hour="00";
}
if(hour.length==1){
       hour = "0"+hour;
   }
   if(min.length==1){
         min = "0"+min;
   }
result =hour+":"+min;
return result;
    
}

console.log(`Converted time: ${convertTo24HrsFormat(time)}`)
