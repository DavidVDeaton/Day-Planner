// Yesterday's Date and Variables

var day = moment().subtract(1, "days").format("dddd");

var yesterday = moment().subtract(1, "days").format("dddd, MMMM Do, YYYY");

$("#yester").text(yesterday);

$("#yester2").text(yesterday);

var today = moment().format("dddd");

$("#today").text(today);

// Navigate to Today

$("#today").click(function() {
    
    window.location.href = "index.html";
    
});

//Local storage set and get

$(".saveyest").click(function() {

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

function yesterdaySchedule () {

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

yesterdaySchedule();