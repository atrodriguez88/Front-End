$().ready(function() {
    //alert("Hola Jquery");
    $('button').click(function() {
        alert("button");

        $("#div1").load("abc.txt", function(responseTxt, statusTxt, xhr) {
            if (statusTxt == "success")
                alert("External content loaded successfully!");
            if (statusTxt == "error")
                alert("Error: " + xhr.status + ": " + xhr.statusText);
        });
    });



    $('.list-tap').click(function() {
        $('.list-tap').removeClass('active');
        var ele = $(this).attr('data-elem');
        $(this).addClass('active');
        $('.data').hide();
        $('#' + ele).show();
    });
});
