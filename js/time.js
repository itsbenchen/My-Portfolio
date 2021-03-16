function showFullTime() {
    var date = new Date();

    var hour = date.getHours(); // 0-23
    var minute = date.getMinutes(); // 0-59
    var second = date.getSeconds(); // 0-59
    var meridiem; // "AM" or "PM"

    // Clock (12-hour format)
    if (hour >= 12) {
        meridiem = "PM";
    }
    else {
        meridiem = "AM"
    }

    if (hour == 0) {
        hour = 12;
    }
    else if (hour > 12) {
        hour -= 12;
    }

    if (hour < 10) {
        hour = "0" + hour; 
    }
    if (minute < 10) {
        minute = "0" + minute; 
    }

    var fullTime = hour + ":" + minute + " " + meridiem;
    document.getElementById("clock").innerHTML = fullTime;
    document.getElementById("clock").textContent = fullTime;
    setTimeout(showFullTime, 1000);
}

showFullTime();