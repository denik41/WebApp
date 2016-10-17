$(document).ready(function () {
    $(".form-horizontal").submit(function (event) {
        event.preventDefault();
        var form = $(this);
        $.ajax({
            url: '/reg',
            method: 'POST',
            data: form.serialize(),
            statusCode: {
                200: function () {
                    window.location.href = '/'
                },
                302: function () {
                    $('.help-block', form).html('Такі логін або e-mail вже існують!');
                }
            }
        })
    });

    // $('#login').change(function () {
    //     var data = $(this).val();
    //     $.post('/reglog', {login: data}, function (data, status, xhr) {
    //
    //     });
    // })
});