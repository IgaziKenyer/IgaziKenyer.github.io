// Empty JS for your own code to be here
var TaleURL = 0;
function updateTale(t){
TaleURL = t;
}

$('#button-1').click(function() {
    updateTale('https://igazikenyer.github.io/text1.html');
    populatePre(TaleURL)
    $(this).parent().parent().remove();

});

$('#button-2').click(function() {
    updateTale('https://igazikenyer.github.io/text2.html');
    populatePre(TaleURL)
    $(this).parent().parent().remove();

});

$('#button-3').click(function() {
    updateTale('https://igazikenyer.github.io/text3.html');
    populatePre(TaleURL)
    $(this).parent().parent().remove();

});








function populatePre(TaleURL) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        document.getElementById('contents').innerHTML += this.responseText;
    };
    xhr.open('GET', TaleURL);
    xhr.send();
}
populatePre(TaleURL);






    



