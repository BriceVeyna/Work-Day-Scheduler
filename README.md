# Work-Day-Scheduler
This program creates a calendar application that allows users to save events throughout the day.

## Description
This projest is a program that creates a simple calendar application for work day scheduling. The application displays the current day and allows the user to input text in fields for every hour of the work day. The text is saved to the browser by clicking the save icon to the right of each text block. Additionally, the current time is tracked by color coding of the text fields: green indicates future, red is present, and grey is past.

## Deployed Application
[Work-Day-Scheduler](https://briceveyna.github.io/Work-Day-Scheduler/)

## Usage
The current day display shown below was created using moment.js to retrieve the date and format it. It was then displayed using jQuery format to pull the correct Id and write to it.

![Current-Day](./assets/images/current-day.JPG)

Color assignment of the text fields was done using a for loop, iterating over the length of an array created for the listed business hours. A conditional statement was then executed with respect to the relationship between the current time, defined using moment.js, and the array of business hours at the index value. For each case, a class was assigned with an associated color value.

![Color-Assignment](./assets/images/color-assignment.JPG)

The save function was performed by using a click event on a button to trigger local storage of that associated text box. That information was then immediately retrieved from local storage and displayed so that it would persist on the page even once the page is reloaded.

![Save-Button](./assets/images/save-button.JPG)

## Technologies Used
- JavaScript
- HTML
- CSS
- moment.js

## License
[MIT](https://choosealicense.com/licenses/mit/)

## Developer Information
- [LinkedIn](https://www.linkedin.com/in/brice-veyna/)
- [Portfolio](https://briceveyna.github.io/Portfolio/)
