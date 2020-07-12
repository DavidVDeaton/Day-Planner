function updateTime () {
    var now = moment().format("dddd, MMMM Do, YYYY, h:mm:ss A");
  
    $("#currentDay").text(now);
    $("#currentDay2").text(now);

};

setInterval(updateTime, 1000);

updateTime();

var hour = moment().format("h");

var ampm = moment().format("A");


function midnight () {

    $("#am9, #am10, #am11, #pm12, #pm1, #pm2, #pm3, #pm4, #pm5").addClass("future");

};

function present9AM () {

    $("#am9").addClass("present");
    $("#am10, #am11, #pm12, #pm1, #pm2, #pm3, #pm4, #pm5").addClass("future");
    
};

function present10AM () {

    $("#am10").addClass("present");
    $("#am11, #pm12, #pm1, #pm2, #pm3, #pm4, #pm5").addClass("future");
    
};

function present11AM () {

    $("#am11").addClass("present");
    $("#pm12, #pm1, #pm2, #pm3, #pm4, #pm5").addClass("future");

};

function present12PM () {

    $("#pm12").addClass("present");
    $("#pm1, #pm2, #pm3, #pm4, #pm5").addClass("future");
  
};

function present1PM () {

    $("#pm1").addClass("present");
    $("#pm2, #pm3, #pm4, #pm5").addClass("future");

};

function present2PM () {

    $("#pm2").addClass("present");
    $("#pm3, #pm4, #pm5").addClass("future");

};

function present3PM () {

    $("#pm3").addClass("present");
    $("#pm4, #pm5").addClass("future");

};

function present4PM () {

    $("#pm4").addClass("present");
    $("#pm5").addClass("future");

};

function present5PM () {

    $("#pm5").addClass("present");
 
};

function updateHour() {

    if (hour === "12" && ampm === "AM") {
        midnight();
    }

    else if (hour === "1" && ampm === "AM") {
        midnight();
    }

    else if (hour === "2" && ampm === "AM") {
        midnight();
    }

    else if (hour === "3" && ampm === "AM") {
        midnight();
    }

    else if (hour === "4" && ampm === "AM") {
        midnight();
    }

    else if (hour === "5" && ampm === "AM") {
        midnight();
    }

    else if (hour === "6" && ampm === "AM") {
        midnight();
    }

    else if (hour === "7" && ampm === "AM") {
        midnight();
    }

    else if (hour === "8" && ampm === "AM") {
        midnight();
    }

    else if (hour === "9" && ampm === "AM") {
        present9AM();
    }

    else if (hour === "10" && ampm === "AM") {
        present10AM();
    }

    else if (hour === "11" && ampm === "AM") {
        present11AM();
    }

    else if (hour === "12" && ampm === "PM") {
        present12PM();
    }

    else if (hour === "1" && ampm === "PM") {
        present1PM();
    }

    else if (hour === "2" && ampm === "PM") {
        present2PM();
    }

    else if (hour === "3" && ampm === "PM") {
        present3PM();
    }

    else if (hour === "4" && ampm === "PM") {
        present4PM();
    }

    else if (hour === "5" && ampm === "PM") {
        present5PM();
    }
    
    console.log(hour);
    console.log(ampm);

};

setInterval(updateHour, 60000); 
updateHour();

