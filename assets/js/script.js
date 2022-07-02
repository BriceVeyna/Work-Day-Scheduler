// Display current day in header
var today = moment();
$('#currentDay').text(today.format("dddd, MMMM Do YYYY"));

// Store current time to track for style class
var currentTime = today.format("H");
console.log(currentTime);

// Store time block variables for each row
var nineAM = $('#09-AM');
var tenAM = $('#10-AM');
var elevenAM = $('#11-AM');
var twelvePM = $('#12-PM');
var onePM = $('#01-PM');
var twoPM = $('#02-PM');
var threePM = $('#03-PM');
var fourPM = $('#04-PM');
var fivePM = $('#05-PM');

// Store time block array to use in iterated loop
var timeBlockEl = [nineAM, tenAM, elevenAM, twelvePM, onePM, twoPM, threePM, fourPM, fivePM];

// Store variable for standard business hours
var businessHours = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];

// Iterates over business hours, attaches class of 'past', 'present', or 'future' to each to dictate what color to give it based on the current time.
for (var i = 0; i < businessHours.length; i++) {
    // Conditional statement, attaches style class to row depending on current time
    if (currentTime < businessHours[i]) {
        console.log(businessHours[i]);
        timeBlockEl[i].addClass("future");
    } else if (currentTime > businessHours[i]) {
        console.log(businessHours[i]);
        timeBlockEl[i].addClass("past");
    } else {
        console.log(businessHours[i]);
        timeBlockEl[i].addClass("present");
    }
}

// Save buttons linked to individual time fields, store and retrieve from local storage
var saveBtnEl = $('.saveBtn');

saveBtnEl.on('click', function() {
    localStorage.setItem("09AM", nineAM.val());
    console.log(nineAM.val());
});
nineAM.val(localStorage.getItem("09AM"));

saveBtnEl.on('click', function() {
    localStorage.setItem("10AM", tenAM.val());
});
tenAM.val(localStorage.getItem("10AM"));

saveBtnEl.on('click', function() {
    localStorage.setItem("11AM", elevenAM.val());
});
elevenAM.val(localStorage.getItem("11AM"));

saveBtnEl.on('click', function() {
    localStorage.setItem("12PM", twelvePM.val());
});
twelvePM.val(localStorage.getItem("12PM"));

saveBtnEl.on('click', function() {
    localStorage.setItem("01PM", onePM.val());
});
onePM.val(localStorage.getItem("01PM"));

saveBtnEl.on('click', function() {
    localStorage.setItem("02PM", twoPM.val());
});
twoPM.val(localStorage.getItem("02PM"));

saveBtnEl.on('click', function() {
    localStorage.setItem("03PM", threePM.val());
});
threePM.val(localStorage.getItem("03PM"));

saveBtnEl.on('click', function() {
    localStorage.setItem("04PM", fourPM.val());
});
fourPM.val(localStorage.getItem("04PM"));

saveBtnEl.on('click', function() {
    localStorage.setItem("05PM", fivePM.val());
});
fivePM.val(localStorage.getItem("05PM"));