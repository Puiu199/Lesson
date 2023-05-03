    let secunds=document.querySelector('.secunds');
    let minute=document.querySelector('.minute');
    let hour=document.querySelector('.hours');
    let day=document.querySelector('.day');   

function start()
{   
 if(localStorage.getItem('pastTime')!=null)
 {
    viewTimw();
    let timex=new Date().getTime();
    localStorage.setItem('pastTime',timex)
 }
 else if (localStorage.getItem('pastTime')==null)
{
    let timex=new Date().getTime();
    localStorage.setItem('pastTime',timex)
    viewTimw();
}
else
{
    console.error("Eroare");
}
}
function viewTimw()
{    
    let past_Time=localStorage.getItem('pastTime');
        timeNow=new Date().getTime();
        timeR=timeNow-past_Time;
    secunds.innerHTML=parseInt(timeR/1000%60);
    minute.innerHTML=parseInt(timeR/1000/60%60);
    hour.innerHTML=parseInt(timeR/1000/60/60%24);
    day.innerHTML=parseInt(timeR/1000/60/60/24%365);
    let timer=setInterval(viewTimw,10)
    if(timeR<0)
{
    clearInterval(timer);
}
}
function verification()
{
    if(localStorage.getItem('pastTime')!=null)
    {
        viewTimw();
    }
    else
    {
        console.log("Nimic")
    }
}
verification();




 
