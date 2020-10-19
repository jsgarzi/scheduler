var currentTime = moment().format("ddd, MMMM Mo, h:mmA");
var valueCompare = moment().format("k");
//check to see if data exists on load
var data = JSON.parse(localStorage.getItem("data"));
if (data == null){

//store area for the schedule input text
data = {
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
}

// Update time / date in the header
function timeUpdate(){
    var timeEl = $("#currentDay");
    timeEl.text(currentTime);
}
//save text to local store
$(".saveBtn").on("click", function() {
    var saveLocal = $(this).attr("save")
    var savedText = $("#time-" + saveLocal).children("textarea").val();
    data["time"+saveLocal] = savedText;
    localStorage.setItem("data", JSON.stringify(data));
});

// compare values against current time - determine past, present, or future block
function whatTimeIsIt (){    
    for ( let i=7 ; i <= 21; i++){
        $("#time-" + i).children("textarea").text(data["time"+i])
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

