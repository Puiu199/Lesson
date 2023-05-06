class figure
{ constructor (fig)
    {
        this.fig=document.createElement(fig.tag);
        this.fig.style.width=fig.wth;
        this.fig.style.height=fig.ht;
        this.fig.classList=fig.atr; 
        this.fig.textContent=fig.TC;
        document.querySelector('.figuri').append(this.fig);   
        sup();
}
}
let h=new Date().getHours();
let m=new Date().getMinutes();
let time=[h,m];
let i=0;
let option=
 {
    tag:"div",
    wth:"90%",
    ht:"90%"
}
let square1=
{
    TC:"It's time:"+time,
    atr:"squ"
}
let circle1=
{
    TC:"Click me!", 
    atr:"cir"
}
circle1.__proto__=option;
square1.__proto__=option;
function sup()
{
    $('.squ').on('click',function()
    {
    alert("Ai apast pe patrat");
    })
    $('.cir').on('click',function()
    {
    i++;
    console.log("You click me: "+i+" times");
    })
}
function create()
{
    if(document.querySelector('#Figure').value=='Square')
    {
        $('.cir').remove('div');
        $('.squ').remove('div');
    new figure(square1)
    }
    else if (document.querySelector('#Figure').value=='Circle')
    {
       $('.squ').remove('div');
       $('.cir').remove('div');
    new figure(circle1)
    }
    else
    {
        alert('Please select figure')
    }
}

