butn=document.querySelector('.btn');
all_inp=document.querySelectorAll('input')
 
// function verification if intut have someone
function check()
{
inpname=document.querySelector('.name').value;
inpphone=document.querySelector('.phone').value;
a=[inpname,inpphone];
if(inpname=='' && inpphone=='')
{
    return alert("Nu ati introdus datele")
} 
if(inpname=='' && inpphone!='')
{
    return alert("Nu ati introdus numele")
}
if(inpname!='' && inpphone=='')
{
    return alert("Nu ati introdus Numarul de telefon")
}
else alert("Datele au fost trimise") 

}
butn.addEventListener('click',check);
// finish

all_inp.forEach(function(item,i)
   { // color input if click on input
    item.addEventListener('mouseup',function()
    {
        this.style.background="#ffb4b4";  
    });
});
    all_inp.forEach(function(item,i)
   {
    // funtion for reset color for input
    item.addEventListener('blur',function()
    {
        this.style.background="#eaeaea";
    });});
   
    console.log(all_inp.type);

