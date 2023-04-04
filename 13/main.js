function ciclu()
{
     let n=document.getElementById("insert").value;
     n=+n;
    for (i=0;i<n;i++)
    {        
        if(i=='10' || i=='15')
        {
             console.log(" ");
             i=++i;
        }
        console.log(i);
    }
    console.log("Finish----------------")
}

var nr_imatriculare,model,madeIn,years,col;

let cars=
[  
    { nr_imatriculare:"ZZZ123",model:"Bmw",madeIn:"Germany",years:"2010",col:"Green"},
    { nr_imatriculare:"MER563",model:"Mercedes",madeIn:"Germany",years:"2008",col:"Black"},
    { nr_imatriculare:"SUS552",model:"Mercedes",madeIn:"Germany",years:"2008",col:"Blue"},
    { nr_imatriculare:"DIM007",model:"HONDA",madeIn:"MOLDOVA",years:"2022",col:"BLACK"},
];  
remove_car_first();
console.log(cars);


function addcardow()
{ 
    in_nr_c=document.getElementById("numar").value;
    modelul=document.getElementById("model1").value;
    made=document.getElementById("country").value;
    anul=document.getElementById("anul1").value;
    color=document.getElementById("culoare").value;  
    cars.push
    (
        {
        nr_imatriculare:in_nr_c,
        model:modelul,
        madeIn:made,
        years:anul,
        col:color,
        }
    )
    alert("A fost adaugat ultimul element cu succes");
}
function addcarfirst()
{
    in_nr_c=document.getElementById("numar").value;
    modelul=document.getElementById("model1").value;
    made=document.getElementById("country").value;
    anul=document.getElementById("anul1").value;
    color=document.getElementById("culoare").value;  
    cars.unshift
    (
        {
        nr_imatriculare:in_nr_c,
        model:modelul,
        madeIn:made,
        years:anul,
        col:color,
        }
    )
    alert("A fost adaugat primul element cu succes")
}
function viewcar()
{
    console.log("--------------------------------------------------");
    alert("In stoc sunt :"+cars.length +"car(s)");
   for (let i=0;i<cars.length;i++)
   {
    console.log(cars[i]);
   }
   console.log("--------------------------------------------------")
} 
function remove_car_down()
{
    cars.pop();
    alert("In stoc au ramas  numai :"+cars.length+" masini");   
    console.log(cars)    
}
function remove_car_first()
{
    cars.shift();
    alert("In stoc au ramas  numai :"+cars.length+" masini");   
       
}

function cauta() 
{ 
    inm=document.getElementById("numar").value;
        
   let car=cars.find(item=>item.nr_imatriculare==inm);

   alert("Modelul: "+car.model+"; Tara de originre : "+car.madeIn+"; Anulu fabricarii :"+car.years+"; Culoarea :"+car.col);    
    

}
function inlocuire()
{
    nr_inm=document.getElementById("inmatriculat").value;
    vall=document.getElementById("valoare").value;   

   let car =cars.find(item=>item.nr_imatriculare==nr_inm);
  
    car.model=vall;
   alert("Modelul a fost modificat cu succes");
}
   

