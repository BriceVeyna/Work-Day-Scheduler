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

// Save button stores text in local storage
var saveBtnEl = $('.saveBtn');

saveBtnEl.on('click', function() {
    var textBlock = $('.description').val();
    localStorage.setItem("text-block", textBlock);
    console.log(textBlock);
});