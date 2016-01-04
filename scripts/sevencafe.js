$(document).ready(function () {

    setInterval(function () {

        $.ajax({
            url: "doStuff.py",
            success: function (data) {
                if (data === "0") {
                    $("#container-btn").addClass("disp-none");
                    $("#container-shadow").removeClass("disp-none");
                    $(".btn").removeClass("btn-scale");
                } else if (data === "1") {
                    $("#container-btn").removeClass("disp-none");
                    $("#container-shadow").addClass("disp-none");
                } else if (data === "2") {
                    $("#container-btn").removeClass("disp-none");
                    $("#container-shadow").addClass("disp-none");
                    $(".btn").addClass("btn-scale");
                }
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

// $("#chkM").click(function(){
//   if ($("#chkM").prop("checked")) {
// 	  $("#container-btn").removeClass("disp-none");
// 	  $("#container-shadow").addClass("disp-none");
//   } else {
// 	  $("#container-btn").addClass("disp-none");
// 	  $("#container-shadow").removeClass("disp-none");
//   }
// });
// 
// $("#chkL").click(function(){
//   if ($("#chkL").prop("checked")) {
// 	  $("#container-btn").removeClass("disp-none");
// 	  $("#container-shadow").addClass("disp-none");
// 	  $(".btn").addClass("btn-scale");
//   } else {
// 	  $("#container-btn").addClass("disp-none");
// 	  $("#container-shadow").removeClass("disp-none");
// 	  $(".btn").removeClass("btn-scale");
//   }
// });
