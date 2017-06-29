$(function () {
    var ringer = $("#buzzer")[0],
        count = parseInt($("#num").html()),
        count2 = parseInt($("#breakNumber").html());

    $("#m5time").click(function () {
        if (count > 0) {
            count -= 5;
            $("#num").html(count);
        }
        event.preventDefault();
    });

    $("#add5Time").click(function() {
        count += 5;
        $("#num").html(count);
        event.preventDefault();
    });
    $("#minus5Break").click(function() {
        if (count2 > 0) {
            coutn2 -= 5;
            $("breakNumber").html(count2);
        }
        event.preventDefault();
    });
    $("#add5Break").click(function() {
        count2 += 5;
        $("#breakNumber").html(count2);
        event.preventDefault();
    });
    $("#reset").click(function() {
        count2 += 5;
        $("#breakNumber").html(count2);
        location.reload();
    });
});