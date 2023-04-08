$('.char').on ('click',function()
{    console.log("sadadas")
    $(this).addClass('uff')
})
$('.reset').on('click',function()
{
    $('.char').removeClass('uff');
})