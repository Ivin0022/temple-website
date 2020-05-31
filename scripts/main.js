let url = new URL(window.location.href)
let lang = url.searchParams.get('lang') || 'en'


window.addEventListener("load", function (event) {
    $('a').each(function (index, value) {
        let href = $(this).attr('href');
        $(this).attr('href', href + "?lang=" + lang)
    })

    if (lang === 'ml') {
        $('.eng').each(function (index, value) {
            $(this).css('display', 'none')
        });
        $('.mal').each(function (index, value) {
            $(this).css('display', 'inherit')
        });
    } else {
        $('.mal').each(function (index, value) {
            $(this).css('display', 'none')

        });
    }

    $('.btn-trans').click(function () {
        if (lang === 'en') {
            url.searchParams.set('lang', 'ml')
        } else {
            url.searchParams.set('lang', 'en')
        }

        window.location.assign(url.toString())
    })
});