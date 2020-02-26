$(document).ready(function () {
    $.get('http://data.fixer.io/api/latest?access_key=ccbf66963f07351926fa29d9ea4c7fc1&&symbols=RUB', function (response) {
        setTimeout(function () {
            $('#left-block').append('<div class="currency"><h4>1 ' + response.base + ' = ' + response.rates.RUB + ' RUB</h4></div>');
            $('.currency').css({
                paddingTop: '20px',
                marginTop: '10px',
                borderTop: '1px solid rgba(0,0,0,.3)',
                textAlign: 'center'
            })
        }, 1000)
    });

    $('.menu-button').on('click', function () {
        if ($('.mobile-menu').css('display') == 'none') {
            $('.mobile-bar').animate({
                'padding': '0'
            });
            $('.mobile-menu').slideDown(800);
            $('body').css({
                'overflow': 'hidden'
            });
        } else {
            $('.mobile-bar').animate({
                'padding': '50px 0'
            });
            $('.mobile-menu').slideUp(800);
            $('body').css({
                'overflow': 'auto'
            });
        }

        $('#top-bar').css({
            'box-shadow': '0 4px 20px rgba(0, 0, 0, 0.07)'
        })
    })
})