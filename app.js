// GLOBAL VARIABLES
let distance;
let speed;
let time;

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

// CALCULATING SPEED TO COMPLETE
function calculateSpeed(distance, time) {
    let milesPerMinute = distance / time;
    let milesPerHour = Math.floor(milesPerMinute * 60);

    return `${milesPerHour} mph`;
}

// CALCULATING TOTAL DISTANCE TRAVELED
function calculateDistance(speed, time) {
    let milesPerMinute = speed / 60;
    let distanceTraveled = milesPerMinute * time;

    return `${distanceTraveled} miles`;
}

// DISPLAYING, GATHERING INPUTS, AND CALCULATING
// displaying elements, capturing speed and distance, and calculating results!

// calcuate time
function displayOptions() {
    document.getElementById("home").style.display = "none";
    document.getElementById("options").style.display = "block";
}

function displayTimeS1() {
    document.getElementById("options").style.display = "none";
    document.getElementById("time-s1").style.display = "block";
}

function backToOptionsTime() {
    document.getElementById("time-s1").style.display = "none";
    document.getElementById("options").style.display = "block";
}

function displayTimeS2() {
    distance = document.getElementById("distanceInputTime").value;
    document.getElementById("time-s1").style.display = "none";
    document.getElementById("time-s2").style.display = "block";
}

function backToTimeS1() {
    document.getElementById("time-s2").style.display = "none"; 
    document.getElementById("time-s1").style.display = "block";   
}

function displayResultsTime() {
    speed = document.getElementById("speedInputTime").value;
    document.getElementById("time-s2").style.display = "none"; 
    document.getElementById("time-results").style.display = "block";
    document.getElementById("speedTimeResults").innerHTML = speed;
    document.getElementById("distanceTimeResults").innerHTML = distance;
    document.getElementById("resultsOutputTime").innerHTML = calculateTime(distance, speed);
}

function displayCalculateAgainTime() {
    document.getElementById("time-results").style.display = "none";
    document.getElementById("options").style.display = "block";
}

// calculate speed

function displaySpeedS1() {
    document.getElementById("options").style.display = "none";
    document.getElementById("speed-s1").style.display = "block";
}

function backToOptionsSpeed() {
    document.getElementById("speed-s1").style.display = "none";
    document.getElementById("options").style.display = "block";
}

function displaySpeedS2() {
    distance = document.getElementById("distanceInputSpeed").value;
    document.getElementById("speed-s1").style.display = "none";
    document.getElementById("speed-s2").style.display = "block";
}

function backToSpeedS1() {
    document.getElementById("speed-s2").style.display = "none"; 
    document.getElementById("speed-s1").style.display = "block";   
}

function displayResultsSpeed() {
    time = document.getElementById("timeInput").value;
    document.getElementById("speed-s2").style.display = "none"; 
    document.getElementById("speed-results").style.display = "block";
    document.getElementById("distanceSpeedResults").innerHTML = distance;
    document.getElementById("timeSpeedResults").innerHTML = time;
    document.getElementById("resultsOutputSpeed").innerHTML = calculateSpeed(distance, time);
}

function displayCalculateAgainSpeed() {
    document.getElementById("speed-results").style.display = "none";
    document.getElementById("options").style.display = "block";
}

// calculate distance
function displayDistanceS1() {
    document.getElementById("options").style.display = "none";
    document.getElementById("distance-s1").style.display = "block";
}

function backToOptionsDistance() {
    document.getElementById("distance-s1").style.display = "none";
    document.getElementById("options").style.display = "block";
}

function displayDistanceS2() {
    time = document.getElementById("timeInputDistance").value;
    document.getElementById("distance-s1").style.display = "none";
    document.getElementById("distance-s2").style.display = "block";
}

function backToDistanceS1() {
    document.getElementById("distance-s2").style.display = "none"; 
    document.getElementById("distance-s1").style.display = "block";   
}

function displayResultsDistance() {
    speed = document.getElementById("speedInputDistance").value;
    document.getElementById("distance-s2").style.display = "none"; 
    document.getElementById("distance-results").style.display = "block";
    document.getElementById("timeDistanceResults").innerHTML = time;
    document.getElementById("speedDistanceResults").innerHTML = speed;
    document.getElementById("resultsOutputDistance").innerHTML = calculateDistance(speed, time);
}

function displayCalculateAgainDistance() {
    document.getElementById("distance-results").style.display = "none";
    document.getElementById("options").style.display = "block";
}