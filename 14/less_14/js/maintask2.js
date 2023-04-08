function validare()
{
    let nr_name=$('.name').val();
    let nr_phone=$('.phone').val();  
        if(nr_name==0 && nr_phone==0)
    {
        $('.name').addClass('error');
        $('.phone').addClass('error');
        alert('вы не заполняль поле имя и телефон')
    }
    else if (nr_name==0)
    {
        $('.name').addClass('error');
        $('.phone').removeClass('error');
        $('.phone').addClass('done');
        alert('вы не заполняль поле имя');
    }
    else if (nr_phone==0)   
    {
        $('.phone').addClass('error');
        $('.name').removeClass('error');
        $('.name').addClass('done');
        alert('вы не заполняль поле телефон');
    }
    else { $('.phone').removeClass('error');
    $('.phone').addClass('done');
    $('.name').removeClass('error');
    $('.name').addClass('done');
    let all=[$('.name').val(),$('.phone').val()];
    alert("Ваше имя :  "+all[0]+"; Ваш телефон  :"+all[1]);
}
};

$('.btn').on('click',validare);

