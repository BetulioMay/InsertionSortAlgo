
var switcherBtn = $('#toggle-switcher');
var bod = $('body');

var lightTheme = {
    background: 'rgb(225, 225, 233, 1)',
    header: 'rgb(225, 225, 233)',
    algoText: 'rgb(0, 0, 0)'
}

var darkTheme = {
    background: 'rgb(9, 9, 61,1)',
    header: 'rgb(5, 10, 36)',
    algoText: 'rgb(255,255,255)'
}

switcherBtn.click(function(){
    
    if (switcherBtn.attr('class') == 'far fa-moon') {
        lightMode();
    }else if(switcherBtn.attr('class') == 'fas fa-moon'){
        darkMode();
    }


});

function lightMode() {
    bod.css('background-color', lightTheme.background);
    $('.mainHeader').css('background', lightTheme.header);
    $('.mainHeader div').css('color', lightTheme.algoText);

    $('#toggle-switcher').attr('class', 'fas fa-moon');
}
function darkMode() {
    bod.css('background-color', darkTheme.background);
    $('.mainHeader').css('background', darkTheme.header);
    $('.mainHeader div').css('color', darkTheme.algoText);

    $('#toggle-switcher').attr('class', 'far fa-moon');
}