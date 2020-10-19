var currentTime = moment().format("ddd, MMMM Mo, h:mA");
var valueCompare = moment().format("k");
// console.log($(timeVal.attr("date-time")))

var data = {
    time7 : "",
    time8 : "",
    time9 : "",
    time10 : "",
    time11 : "",
    time12 : "",
    time13 : "",
    time14 : "",
    time15 : "",
    time16 : "",
    time17 : "",
    time18 : "",
    time19 : "",
    time20 : "",
    time21 : ""
}

// Update time / date in the header
function timeUpdate(){
    var timeEl = $("#currentDay");
    timeEl.text(currentTime);
}

$(".saveBtn").on("click", function() {
    var saveLocal = $(this).attr("save")
    var savedText = $("#time-" + saveLocal).children("textarea").val();
    console.log(savedText)
});

// compare values against current time - determine past, present, or future block
function whatTimeIsIt (){    
    for ( let i=7 ; i <= 21; i++){
        
        // var timeVal= $(".time-block").attr("data-time");
        if (i < valueCompare){
            $("#time-" + i).children("textarea").addClass("past");
        }
        else if (i == valueCompare){
            $("#time-" + i).children("textarea").addClass("present")        
        }
        else {
            $("#time-" + i).children("textarea").addClass("future")        
        }
    }
}
timeUpdate();

whatTimeIsIt(); 

