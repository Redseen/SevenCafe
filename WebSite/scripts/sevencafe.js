$(document).ready(function () {

    setInterval(function () {

        $.ajax({
            url: "http://192.168.0.212/doStuff.py",
            success: function (data) {
                if (data === "0") {
                    $(".btn").removeClass("btn-scale");
                } else {
                    $(".btn").addClass("btn-scale");
                }
                $("#aaaa").html(data);
            }
        });

    }, 1000)

    //$("#chkScale").click(function () {
    //    if ($("#chkScale").prop("checked")) {
    //        $(".btn").addClass("btn-scale");
    //    } else {
    //        $(".btn").removeClass("btn-scale");
    //    }
    //});

});


