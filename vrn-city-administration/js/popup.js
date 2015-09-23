$(function() {
    $('#open-reception').click(function() { openReception(); });
});

function openReception() {
    chrome.tabs.create({url: 'http://reception.voronezh-city.ru/'});
}