let loader = $('.loader');
$('#submit').click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    let name = $('#name');
    let yourPhone = $('#phone');
    let order =  $('#order');
    let red_input1 = $('.name');
    let red_input2 = $('.red-2');
    let red_input3 = $('.red-3');

    let hasError = false;

    $('.error-input').hide();
    red_input1.css('border-color','rgb(130, 19, 40)');
    red_input2.css('border-color','rgb(130, 19, 40)');
    red_input3.css('border-color','rgb(130, 19, 40)');
    if (!order.val()) {
        order.next().show();
        hasError = true;
        red_input1.css('border-color','red');
    }
    if (!name.val()) {
        name.next().show();
        hasError = true;
        red_input2.css('border-color','red');
    }
    if (!yourPhone.val()) {
        yourPhone.next().show();
        hasError = true;
        red_input3.css('border-color','red');
    }


   if (!hasError) {
       loader.css('display','flex');
        $.ajax({
            method: "post",
            url: "http://testologia.site/checkout",
            data: {yourPhone: yourPhone.val(), order: order.val(), name: name.val()}
        })
            .done(function (message) {
                loader.hide();
                if (message.success) {
                    $('#order-for').hide();
                    $('.success-form').show();
                    $('#btn_s').click (function (e) {
                        location.reload();
                    });
                } else {
                    alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ.');
                    form.reset();
                }
            });
    }
});

$('.button').click (event => {
    $('.order')[0].scrollIntoView({behavior:"smooth"});
    $('#order')
        .val($(event.target)
            .parents('.macaroon')
            .find('.macaroon-desc')
            .text());
});