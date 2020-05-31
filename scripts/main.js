let url = new URL(window.location.href)
let lang = url.searchParams.get('lang') || 'en'


window.addEventListener("load", function (event) {

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
});