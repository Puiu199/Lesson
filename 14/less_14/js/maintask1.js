
function opac()
{
    //funtion for transform style opacity images in 0.5 
    this.style.opacity=".5";
}
function size()
{
    //funtion for transform style opacity images in 0.5 
    this.style.width="100px";
}
function colorgreen()
{
    //funtion for color text <a></a>=>green
   this.style.color="green";  
}
function colorblack()
{//funtion for color text <a></a>=>green
    this.style.color="black"; 
}
image=document.querySelectorAll('img');
link=document.querySelectorAll('a');
console.log(image)
console.log(link);

image.forEach(function(item,i) {
    //function for click and execute function opai=>opacity() and transform size image in 100px and back   
    item.addEventListener('click',opac)   
    item.addEventListener('mouseover',size) 
    item.addEventListener('mouseout',function()
    {
        this.style.width="100%";
    })   
});
link.forEach(function(item,i)
{     // function for color tag <a href></a>
item.addEventListener('mouseover',colorgreen)
// function for color tag <a href></a>
item.addEventListener('mouseout',colorblack)
//function for mouse over link => img.border=colorgreen
item.addEventListener('mouseover',function()
{
    image[i].style.borderColor="Green";
})
//function for onclick link => img.display=none
item.addEventListener('click',function(b)
{
    b.preventDefault();
    image[i].style.display="none";
})
});

