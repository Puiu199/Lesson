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
];  
let n=cars.length;
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
    alert("In stoc sunt numai :"+cars.length);   
       return console.log(cars);      
} 
function remove_car()
{
    cars.pop();
    console.log(cars)
}
function cauta() 
{ 
    num_val=document.getElementById("val").value;

    
       
}