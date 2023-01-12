// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var mainHour;
var hours = $(".time-block");
var today = dayjs();
for (hour of hours) {
  mainHour = $("#" + hour.id);
  console.log(hour.id)
  if (parseInt(hour.id.split("-")[1]) < parseInt(today.format("HH"))) {
    console.log(mainHour)
    console.log("Past")
    mainHour.removeClass("present")
    mainHour.removeClass("future")
    mainHour.addClass("past")
  } else if (parseInt(hour.id.split("-")[1]) > parseInt(today.format("HH"))){
    console.log(mainHour)
    console.log("Future")
    mainHour.removeClass("present")
    mainHour.removeClass("past")
    mainHour.addClass("future")
  } else {
    console.log(mainHour)
    console.log("Future")
    mainHour.addClass("present")
    mainHour.removeClass("past")
    mainHour.removeClass("future")
  }
  console.log(hour);

  console.log(today.format("HH"));
  console.log(hour.id.split("-")[1]);
  console.log("===================");
}
console.log(hours[0].id);
console.log(hours[0].id.split("-")[1]);
console.log(today.format("HH"));

$(function () {
  $(".saveBtn").on("click", function () {
    console.log(this);
    console.log(this.parentElement);
    console.log(this.previousElementSibling);
    console.log(this.previousElementSibling.value);
  });
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
