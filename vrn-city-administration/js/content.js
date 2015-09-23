$(function() {
    // Загружаем настройки из локального хранилища.
    chrome.storage.sync.get({
            email: '',
            pass1: '',
            pass2: '',
            pass3: ''
        }, function(items) {
            // Заполняем форму значениями из настроек.
            $('input#ContentPlaceHolderMaster_Tbx_Email').val(items.email);
            $('input#ContentPlaceHolderMaster_Tbx_Pwd1').val(items.pass1);
            $('input#ContentPlaceHolderMaster_Tbx_Pwd2').val(items.pass2);
            $('input#ContentPlaceHolderMaster_Tbx_Pwd3').val(items.pass3);
        });
    $('input#ContentPlaceHolderMaster_Tbx_Captcha').focus();
});