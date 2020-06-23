window.addEventListener("load", function (event) {

    $('a').not('.payment').each(function (index, value) {
        let href = $(this).attr('href');
        if (!href.includes('#')) {
            $(this).attr('href', href + "?lang=" + lang)
        }
    })

    // lang is defined in the head of the index.html
    $('.btn-trans').click(function () {
        if (lang === 'en') {
            url.searchParams.set('lang', 'ml')
        } else {
            url.searchParams.set('lang', 'en')
        }

        window.location.assign(url.toString())
    })
});