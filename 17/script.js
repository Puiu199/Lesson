let inputID=document.querySelector('#user');
let image=document.querySelector('img');
let inputfName=document.querySelector('.wrapper-name');
let inputYear=document.querySelector('#year')

inputID.addEventListener('input',function()
{
    let request=new XMLHttpRequest();
    request.open('GET','current.json');
    request.setRequestHeader('Contentt-type','application/json; charset=utf-8');
    request.send();
    request.addEventListener('readystatechange',function()
    {
        if(request.readyState===4 && request.status=== 200)
        {
           
            let tab=JSON.parse(request.response);
            console.log( typeof inputID.value);
            
            console.log( typeof inputID.value);
                let id=tab[inputID.value];
                image.src=id.img;
                inputfName.innerHTML=id.name;
                inputYear.innerHTML=id.age;      
        }
        else
        {
            console.log("Waiting")
        }    
        })

});