var counter = 0;

$(document).ready(function() {
    $('#counter').text(counter);

    $('#sub-button').click(function(){
        $('#counter').text(--counter);
    });

    $('#sum-button').click(function(){
        $('#counter').text(++counter);
    });
});