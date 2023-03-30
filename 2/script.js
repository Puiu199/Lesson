
function cancel()
{
 document.getElementById("regis").style.display="none";
 document.getElementById("login").style.display="none";
 }

function unhide()
{
 document.getElementById("login").style.display="block";
 document.getElementById("regis").style.display="none";
}
function unhideregistre()
{
document.getElementById("login").style.display="none";
 document.getElementById("regis").style.display="block";
}
function hidelog()
{
 document.getElementById("login").style.display="none";
}
 function back()
 {
   
   document.getElementById("regis").style.display="none";
   document.getElementById("login").style.display="block";
 }
function validate()
{
  var all=document.getElementById().value

   if (all=="") 
   {
      alert("Itroduceti datele necesare");
      return false;
   } 
   else {
     console.log('Bleaaa')
   }
}



