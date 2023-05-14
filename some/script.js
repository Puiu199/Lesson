let table=['1','2','3','4'];
let table1={f:'First',s:'Second',t:'Three',fo:'Four'};
let table3=[table,table1];
let first_input=document.querySelector('#elem');
function date()
{
    table.pop('pop');
    table.shift('shift');
    table.unshift('unshift');
    table.push('push');
    console.log(table);
}
function insert_lacal()
{
    localStorage.setItem('Date1',first_input.value);
    
}
function write_lacal()
{
    console.log(localStorage.getItem('Date1'));
}
setTimeout(write_lacal,1000)

class set_clas
{
    constructor (elem)
    {
        this.elem=document.createElement(elem.tag);
        this.elem.classList=elem.clas;
        this.elem.style.background=elem.bg
        document.querySelector('body').append(this.elem)
    }
}
let fig=
{
    tag:"div",
    
}
let fig1=
{
    clas:'st',
    bg:"green"
}
fig.__proto__.fig1;
new  set_clas(fig1)

let view_date=
{
    view:function(text)
    {
        return this.f +" "+this.s +text;
    }
}
view_date.view.call(table1,'Number');