// Display current day in header
var today = moment();
$('#currentDay').text(today.format("dddd, MMMM Do YYYY"));

var currentTime = today.format("hh A");
console.log(currentTime);

var rowOne = moment('09', 'kk').format('hh A');
var rowTwo = moment('10', 'kk').format('hh A');
var rowThree = moment('11', 'kk').format('hh A');
var rowFour = moment('12', 'kk').format('hh A');
var rowFive = moment('13', 'kk').format('hh A');
var rowSix = moment('14', 'kk').format('hh A');
var rowSeven = moment('15', 'kk').format('hh A');
var rowEight = moment('16', 'kk').format('hh A');
var rowNine = moment('17', 'kk').format('hh A');
console.log(rowNine);

var timeBlockEl = $('.time-block');



if (currentTime < i) {
    timeBlockEl.removeclass("past");
    timeBlockEl.removeclass("present");
    timeBlockEl.attr('class', 'future');
} else if (currentTime > i) {
    timeBlockEl.attr('class', 'past');
    timeBlockEl.removeclass("present");
    timeBlockEl.removeclass("future");
} else {
    timeBlockEl.removeclass("past");
    timeBlockEl.attr('class', 'present');
    timeBlockEl.removeclass("present");
}