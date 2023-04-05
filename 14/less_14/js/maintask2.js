



function check()
{
input_name=document.querySelector('.name').value;
input_phone=document.querySelector('.phone').value;

console.log(input_name)
if(input_name=="" && input_phone!=="")
{
alert("Nu ati introdus numele"); 
}
 return alert("Buna ziua"+input_name,input_phone);

alert(input_name);

}
