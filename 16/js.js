let inputMDL=document.querySelector('#mdl');
let inputUSD=document.querySelector('#usd');
let inputEUR=document.querySelector('#eur');

inputMDL.addEventListener('input',function()
{
    let request=new XMLHttpRequest();
    request.open('GET','curent.json');
    request.setRequestHeader('Contentt-type','application/json; charset=utf-8');
    request.send();
    request.addEventListener('readystatechange',function()
    {
        if(request.readyState===4 && request.status=== 200)
{
    let tab=JSON.parse(request.response);
    inputUSD.value=+inputMDL.value/tab.usd;
    inputEUR.value=+inputMDL.value/tab.eur;
    
}
else
{
    console.log("Waiting");
}    
})
if (typeof inputMDL != 'number')
{
    inputEUR.value="sdasdasdasdaww";
    inputUSD.value="Error";
}
});