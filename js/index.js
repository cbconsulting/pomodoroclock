$(function () {
    var ringer = $("#ringer")[0],
        count = parseInt($("#num").html()),
        count2 = parseInt($("#breakNumber").html());

        // ringer.play();
        $("#session").hide();

$("#start").click(function(){
    var counters = setInterval(clocks,1000);
    // count  *= 60;
    // count2 *= 60;
    //just comment out count and count2 to unit test it. For the 25 minute wait to 25 seconds.
    function clocks() {
        $("#breakNumber, #m5time, #wow1, #add5Time, #minus5Break, #add5Break, #start").hide();
        $("#session").show();
        $("#session").html("Timer:  ");

        count -= 1;

        if(count===0){
            ringer.play();
            clearInterval(counters);
            $("#num").hide();
            var counters2 = setInterval(brTimer, 1000);
        }
        $("#num").html(count);

        if(count % 60 >= 10){
            $("#num").html(Math.floor(count/60) + ":" + count % 60);
        }else{
            $("#num").html(Math.floor(count/60) + ":" + "0" + count % 60);
        }
        function brTimer(){
            $("#session").html("Break Timer:   ");
            $("#breakNumber").show();
            
            count2 -= 1;

            if(count2===0){
                clearInterval(counters2);
                ringer.play();
                $("#reset").show();
                $("#session, #breakNumber").hide();
            }
            $("breakNumber").html(count2);
            if(count2 % 60 >= 10){
            $("#breakNumber").html(Math.floor(count2/60) + ":" + count2 % 60);
            }else{
                $("#breakNumber").html(Math.floor(count2/60) + ":" + "0" + count2 % 60);
            }
        }
    }
});
//W3schools setInterval()method
// controls for the buttons.
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
            count2 -= 5;
            $("#breakNumber").html(count2);
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