require(['jquery', 'handlebars'], function($, handlebars) {
    $.ajax({
        url: '/api/list',
        dataType: 'json',
        success: function(res) {
            var tpl = $('#tpl').html();

            var template = handlebars.compile(tpl);

            var html = template(res);

            $('.wrap').html(html);
        },
        error: function(error) {
            console.warn(error)
        }
    })
})