var currentTime = moment().format("ddd, MMMM Mo, h:mA");
var valueCompare = moment().format("k");

// Update time / date in the header
function timeUpdate(){
    var timeEl = $("#currentDay");
    timeEl.text(currentTime);
}

// compare values against current time - determine past, present, or future block
function whatTimeIsIt ()

timeUpdate();
