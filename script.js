// Running Clock 

function updateTime () {
    
    var now = moment().format("dddd, MMMM Do, YYYY, h:mm:ss A");
  
    $("#currentDay").text(now);

    $("#currentDay2").text(now);

};

setInterval(updateTime, 1000);
updateTime();

// Yesterday, Day and Tomorrow Variables + Navigation to Yesterday and Tomorrow's scheduler

var yesterday = moment().subtract(1, "days").format("dddd");

$("#yesterday").text(yesterday);

$("#yesterday").click(function() {
    
    window.location.href = "yesterday.html";

});

var day = moment().format("dddd");

var tomorrow = moment().add(1, "days").format("dddd");

$("#tomorrow").text(tomorrow);

$("#tomorrow").click(function() {
    
    window.location.href = "tomorrow.html";
    
});

// Past, Present, Future Textarea Highlights

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

function updateHighlight() {

    var hour = moment().format("hA");

    if (hour === "12AM") {midnight();}

    else if (hour === "1AM") {midnight();}

    else if (hour === "2AM") {midnight();}

    else if (hour === "3AM") {midnight();}

    else if (hour === "4AM") {midnight();}

    else if (hour === "5AM") {midnight();}

    else if (hour === "6AM") {midnight();}

    else if (hour === "7AM") {midnight();}

    else if (hour === "8AM") {midnight();}

    else if (hour === "9AM") {present9AM();}

    else if (hour === "10AM") {present10AM();}

    else if (hour === "11AM") {present11AM();}

    else if (hour === "12PM") {present12PM();}

    else if (hour === "1PM") {present1PM();}

    else if (hour === "2PM") {present2PM();}

    else if (hour === "3PM") {present3PM();}

    else if (hour === "4PM") {present4PM();}

    else if (hour === "5PM") {present5PM();}
    
    console.log(hour);
};

updateHighlight();

function updateHour() {

    var newHour = moment().format("mmss");

    if (newHour === "0000") {updateHighlight();}

};

setInterval(updateHour, 1000); 
updateHour();

// Local storage set and get

$(".save").click(function() {

var text9 = document.getElementById("am9").value;
var text10 = document.getElementById("am10").value;
var text11 = document.getElementById("am11").value;
var text12 = document.getElementById("pm12").value;
var text1 = document.getElementById("pm1").value;
var text2 = document.getElementById("pm2").value;
var text3 = document.getElementById("pm3").value;
var text4 = document.getElementById("pm4").value;
var text5 = document.getElementById("pm5").value; 

localStorage.setItem(day + "9", text9);
localStorage.setItem(day + "10", text10);
localStorage.setItem(day + "11", text11);
localStorage.setItem(day + "12", text12);
localStorage.setItem(day + "1", text1);
localStorage.setItem(day + "2", text2);
localStorage.setItem(day + "3", text3);
localStorage.setItem(day + "4", text4);
localStorage.setItem(day + "5", text5);
});

function todaySchedule () {

    document.getElementById("am9").value = localStorage.getItem(day + "9");
    document.getElementById("am10").value = localStorage.getItem(day + "10");
    document.getElementById("am11").value = localStorage.getItem(day + "11");
    document.getElementById("pm12").value = localStorage.getItem(day + "12");
    document.getElementById("pm1").value = localStorage.getItem(day + "1");
    document.getElementById("pm2").value = localStorage.getItem(day + "2");
    document.getElementById("pm3").value = localStorage.getItem(day + "3");
    document.getElementById("pm4").value = localStorage.getItem(day + "4");
    document.getElementById("pm5").value = localStorage.getItem(day + "5");
};

todaySchedule();

function schedulerClear () {

    var old = moment().subtract(2, "days").format("dddd");

    localStorage.removeItem(old + "9");
    localStorage.removeItem(old + "10");
    localStorage.removeItem(old + "11");
    localStorage.removeItem(old + "12");
    localStorage.removeItem(old + "1");
    localStorage.removeItem(old + "2");
    localStorage.removeItem(old + "3");
    localStorage.removeItem(old + "4");
    localStorage.removeItem(old + "5");
};

schedulerClear();