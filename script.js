// Running Clock

function updateTime () {
    var now = moment().format("dddd, MMMM Do, YYYY, h:mm:ss A");
  
    $("#currentDay").text(now);
    $("#currentDay2").text(now);

};

setInterval(updateTime, 1000);
updateTime();

// Past, Present, Future Textarea Highlights

var hour = moment().format("hA");

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

setInterval(updateHour, 15000); 
updateHour();

// Save to localStorage

$("#save9").click(function() {

var text9 = document.getElementById("am9").value;

console.log(text9);

localStorage.setItem("9AM", text9);

});

$("#save10").click(function() {

var text10 = document.getElementById("am10").value;
    
console.log(text10);
    
localStorage.setItem("10AM", text10);
    
});

$("#save11").click(function() {

var text11 = document.getElementById("am11").value;
        
console.log(text11);
        
localStorage.setItem("11AM", text11);
        
});

$("#save12").click(function() {

var text12 = document.getElementById("pm12").value;
    
console.log(text12);
    
localStorage.setItem("12PM", text12);
    
});
    
$("#save1").click(function() {
    
var text1 = document.getElementById("pm1").value;
        
console.log(text1);
        
localStorage.setItem("1PM", text1);
        
});
    
$("#save2").click(function() {
    
var text2 = document.getElementById("pm2").value;
            
console.log(text2);
            
localStorage.setItem("2PM", text2);
            
});

$("#save3").click(function() {

var text3 = document.getElementById("pm3").value;
        
console.log(text3);
        
localStorage.setItem("3PM", text3);
        
});
    
$("#save4").click(function() {
        
var text4 = document.getElementById("pm4").value;
            
console.log(text4);
            
localStorage.setItem("4PM", text4);
    
});
        
$("#save5").click(function() {
        
var text5 = document.getElementById("pm5").value;
                
console.log(text5);
                
localStorage.setItem("5PM", text5);
                
});

// Display previously stored items from localStorage

function dailySchedule () {

    document.getElementById("am9").value = localStorage.getItem("9AM");
    document.getElementById("am10").value = localStorage.getItem("10AM");
    document.getElementById("am11").value = localStorage.getItem("11AM");
    document.getElementById("pm12").value = localStorage.getItem("12PM");
    document.getElementById("pm1").value = localStorage.getItem("1PM");
    document.getElementById("pm2").value = localStorage.getItem("2PM");
    document.getElementById("pm3").value = localStorage.getItem("3PM");
    document.getElementById("pm4").value = localStorage.getItem("4PM");
    document.getElementById("pm5").value = localStorage.getItem("5PM");

    console.log(localStorage.getItem("9AM"));
};

dailySchedule();
