// GLOBAL VARIABLES
let distance;
let speed;

// CALCULATING ESTIMATED TIME TO COMPLETE
function calculateTime(distance, speed) {
    // function to figure out time to complete in minutes
    function speedToTime(speed) {
        let milePerMinutes = speed / 60;
        let timeToComplete = distance / milePerMinutes;
        return timeToComplete;
    };

    // function to convert minutes into hours and minutes
    function minutesToHoursAndMins (minutes) {
        let hours = minutes / 60;
        let totalHours = Math.floor(hours);
        let hoursLeftover = hours - totalHours;
        let remainingMinutes = Math.floor(hoursLeftover * 60);
        return `${totalHours} hours & ${remainingMinutes} minutes`;
    };
    
    // lets calculate some things
    let totalInMinutes = speedToTime(speed);
    let totalInHoursAndMinutes = minutesToHoursAndMins(totalInMinutes);

    return totalInHoursAndMinutes;
}

// DISPLAYING, GATHERING INPUTS, AND CALCULATING
// displaying elements, capturing speed and distance, and calculating results!
function displayOptions() {
    document.getElementById("home").style.display = "none";
    document.getElementById("options").style.display = "block";
}

function displayTimeS1() {
    document.getElementById("options").style.display = "none";
    document.getElementById("time-s1").style.display = "block";
}

function backToOptions() {
    document.getElementById("time-s1").style.display = "none";
    document.getElementById("options").style.display = "block";
}

function displayTimeS2() {
    distance = document.getElementById("distanceInput").value;
    document.getElementById("time-s1").style.display = "none";
    document.getElementById("time-s2").style.display = "block";
}

function backToTimeS1() {
    document.getElementById("time-s2").style.display = "none"; 
    document.getElementById("time-s1").style.display = "block";   
}

function displayResults() {
    speed = document.getElementById("speedInput").value;
    document.getElementById("time-s2").style.display = "none"; 
    document.getElementById("time-results").style.display = "block";
    document.getElementById("speed").innerHTML = speed;
    document.getElementById("distance").innerHTML = distance;
    document.getElementById("resultsOutput").innerHTML = calculateTime(distance, speed);
}

function displayCalculateAgain() {
    document.getElementById("time-results").style.display = "none";
    document.getElementById("options").style.display = "block";
}