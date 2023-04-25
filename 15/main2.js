let all=[];
$('.wrap-img').on('click',function()
{
    let i=0;
    i=all.length;
     console.log(i);
     let elem=$(this).attr('data-para');   
     $(this).addClass('active');      
     if(i<2)
     {
         for(i=0;i<1;i++)
        {
        all.unshift(elem); 
        }
        console.log(all); 

        if(all[0]==all[1])
        {
        $('[data-para="'+elem+'"]').addClass('list_none');
        
        all.pop(); 
        all.shift();
        alert("Good job!"); 
        }
    }
        else if (i>1)
    {   $('.wrap-img').removeClass('active');        
        all.shift();
        all.pop()
        all.push(elem);    
        $(this).addClass('active'); 
            
    }
})


