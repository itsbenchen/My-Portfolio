function showFullDate() {
    var date = new Date();

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var month = date.getMonth() // 0-11 (11 is December; 0 is January)
    var day = date.getDate(); // Day of the month 1-31
    var year = date.getFullYear(); // Full year format

    // Full Date

    var fullDate = monthNames[month] + " " + day + ", " + year;
    document.getElementById("calendar-date").innerHTML = fullDate;
    document.getElementById("calendar-date").textContent = fullDate;

    setTimeout(showFullDate, 1000);
}

showFullDate();