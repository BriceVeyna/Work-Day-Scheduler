// Display current day in header
var today = moment();
$('#currentDay').text(today.format("dddd, MMMM Do YYYY"));

// Store current time to track for style class
var currentTime = today.format("h");
console.log(currentTime);

// Store variable for standard business hours
var businessHours24 = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];

for (var i = 0; i < businessHours24.length; i++) {

    var timeBlockEl = $('.description');
    var businessHours = moment(businessHours24, "k").format("h");

    // Conditional statement, attaches style class to row depending on current time
    if (currentTime < businessHours[i]) {
        console.log(businessHours[i]);
        timeBlockEl.removeClass("past");
        timeBlockEl.removeClass("present");
        timeBlockEl.addClass("future");
    } else if (currentTime > businessHours[i]) {
        console.log(businessHours[i]);
        timeBlockEl.addClass("past");
        timeBlockEl.removeClass("present");
        timeBlockEl.removeClass("future");
    } else {
        console.log(businessHours[i]);
        timeBlockEl.removeClass("past");
        timeBlockEl.addClass("present");
        timeBlockEl.removeClass("present");
    }
}

// Save buttons linked to individual time fields, store and retrieve from local storage
var saveBtnEl = $('.saveBtn');

var nineAM = $('#09-AM');
var tenAM = $('#10-AM');
var elevenAM = $('#11-AM');
var twelvePM = $('#12-PM');
var onePM = $('#01-PM');
var twoPM = $('#02-PM');
var threePM = $('#03-PM');
var fourPM = $('#04-PM');
var fivePM = $('#05-PM');

saveBtnEl.on('click', function() {
    localStorage.setItem("09AM", nineAM.val());
    console.log(nineAM.val());
});

saveBtnEl.on('click', function() {
    localStorage.setItem("10AM", tenAM.val());
});

saveBtnEl.on('click', function() {
    localStorage.setItem("11AM", elevenAM.val());
});

saveBtnEl.on('click', function() {
    localStorage.setItem("12PM", twelvePM.val());
});

saveBtnEl.on('click', function() {
    localStorage.setItem("01PM", onePM.val());
});

saveBtnEl.on('click', function() {
    localStorage.setItem("02PM", twoPM.val());
});

saveBtnEl.on('click', function() {
    localStorage.setItem("03PM", threePM.val());
});

saveBtnEl.on('click', function() {
    localStorage.setItem("04PM", fourPM.val());
});

saveBtnEl.on('click', function() {
    localStorage.setItem("05PM", fivePM.val());
});