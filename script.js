var currentTime = moment().format("ddd, MMMM Mo, h:mA");

function timeUpdate(){
    var timeEl = $("#currentDay");
    timeEl.text(currentTime);
}

timeUpdate();