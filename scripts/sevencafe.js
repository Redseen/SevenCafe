$(document).ready(function () {

    setInterval(function () {

        $.ajax({
            url: "doStuff.py",
            success: function (data) {
                if (data === "0") {
                    $(".btn").removeClass("btn-scale");
                } else {
                    $(".btn").addClass("btn-scale");
                }
                $("#aaaa").html(data);
            }
        });

    },500)

    //$("#chkScale").click(function () {
    //    if ($("#chkScale").prop("checked")) {
    //        $(".btn").addClass("btn-scale");
    //    } else {
    //        $(".btn").removeClass("btn-scale");
    //    }
    //});

});


