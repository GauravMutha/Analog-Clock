let sec=document.querySelector(".secondhand");
let mint=document.querySelector(".minutehand");
let hour=document.querySelector(".hourhand");

function hours12(date) { return (date.getHours()%12); }

let d=new Date;
let j=d.getMinutes();
let i=d.getSeconds();
let k=hours12(d);
sec.style.transform=`rotate(${i*6}deg) scaleY(0.69)`;
mint.style.transform=`rotate(${(j*6)+(i*0.1)}deg) scaleY(0.59)`;  
hour.style.transform=`rotate(${(k*30)+(j*0.5)+(i*0.00834)}deg) scaleY(0.45)`;  


setInterval(()=>{
    let d=new Date;
    let i=d.getSeconds();
    let j=d.getMinutes();
    let k=hours12(d);
    sec.style.transform=`rotate(${6*(i)}deg) scaleY(0.69)`;
    mint.style.transform=`rotate(${(j*6)+(0.1*i)}deg) scaleY(0.59)`;
    hour.style.transform=`rotate(${(k*30)+(j*0.5)+(i*0.00834)}deg) scaleY(0.45)`;
},1000)
