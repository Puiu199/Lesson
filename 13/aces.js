var login_admin,pass_admin;
    login_admin=document.getElementById("log").value;
    pass_admin=document.getElementById("pass").value;    
    
let user=
[
   {login:"admin", password:"admin"},
   {login:"eu",password:"tu"} 
]
function connect()
{ 
    login_admin=document.getElementById("log").value;
    pass_admin=document.getElementById("pass").value;

    if(login_admin==user[0].login && pass_admin==user[0].password)
    {
       document.getElementById("add_car").style.display="grid";       
        document.getElementById("login").style.display="none";
    } 
     else
       {
        alert("Datele introduse sunt incorecte, mai incercati");
    }

}