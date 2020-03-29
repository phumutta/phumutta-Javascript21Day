(() => {
  // เริ่มเขียนโค้ด
  const SECONE=1000;
  const MINUTE=SECONE*60;
  const HOUR=MINUTE*60;
  const DAY=HOUR*24
  function setElementInnerText(id,text){
    const element =document.getElementById(id);
    element.innerText=text

  }
  function countDown(){
    const now=new Date().getTime();
    const newYear=new Date('December 31, 2020 23:59:59').getTime();
    const unixTimeLeft=newYear-now;
    // console.log(unixTimeLeft)
    // const daysElem=document.getElementById('days');
    // daysElem.innerText=Math.floor(unixTimeLeft/DAY);
    
    // const hoursElem=document.getElementById('hours');
    // daysElem.innerText=Math.floor(unixTimeLeft%DAY /HOUR);
    setElementInnerText('days',Math.floor(unixTimeLeft/DAY));
    setElementInnerText('hours',Math.floor(unixTimeLeft%DAY/HOUR));
    setElementInnerText('minutes',Math.floor(unixTimeLeft%HOUR/MINUTE))
    setElementInnerText('seconds',Math.floor(unixTimeLeft%MINUTE/SECONE))



  }
  
  function run(){

    // countDown();
    setInterval(countDown,SECONE)
  }
  run()
})();
