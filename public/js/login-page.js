$(document).ready(function () {
    $('.form-horizontal').submit(function (event) {
        event.preventDefault();
        var form = $(this);
        $.ajax({
            url: '/login',
            method: 'POST',
            data: form.serialize(),
            statusCode: {
                200: function () {
                    window.location.href = '/'
                },
                403: function () {
                    $('.help-block', form).text('Логін або пароль введений невірно!');
                }
            }
        })
    })
});
