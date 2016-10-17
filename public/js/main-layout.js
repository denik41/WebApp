$(document).ready(function () {
    $('#logout').click(
        $.ajax({
            url: '/logout',
            method: 'POST'
        })
    );
});