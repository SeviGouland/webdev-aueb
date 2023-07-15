$(document).ready(function() {
    hideAllDescriptions();
    showImageText('#java', '.java-text');
    showImageText('#js', '.js-text');
    showImageText('#csharp', '.csharp-text');
})

function hideAllDescriptions() {
    let imgTexts = $('div[class*="text"]');
    imgTexts.each(function() {
        $(this).hide();
    })
    // $('.java-text').hide();
    // $('.js-text').hide();
    // $('.csharp-text').hide();

}

function showImageText(imgId, textDiv) {
    $(textDiv).prepend('<h1></h1>');
    $(textDiv + '> h1').addClass('mb-20');
    $(textDiv + '> h1').text(imgId);
    
    $(imgId).hover(function() {
        $(this).css({'box-shadow': '0 0 5px grey'});
        $(textDiv).show();
    }, function() {
        $(this).css({'box-shadow': 'none'});
        $(textDiv).hide();
    })
}