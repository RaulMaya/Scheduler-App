// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var today = dayjs();
var mainHour, goal;

function dayName(date, locale) {
  var dayOfInterest = new Date(date);
  return dayOfInterest.toLocaleDateString(locale, { weekday: "long" });
}

function time() {
  var liveDate = dayjs();
  var actualTime = $("#currentDay");
  var weekday = dayName(liveDate.format("DD-MMM-YYYY"), "en-us");
  actualTime[0].textContent =
    weekday + ", " + liveDate.format("DD-MMM-YYYY  hh:mm:ss A");
}

console.log(dayjs().day(1));
var hours = $(".time-block");
var resetBtn = $("#resetSchedule");

for (hour of hours) {
  mainHour = $("#" + hour.id);
  goal = localStorage.getItem(hour.id);
  mainHour[0].children[1].textContent = goal;
  if (parseInt(hour.id.split("-")[1]) < parseInt(today.format("HH"))) {
    mainHour.removeClass("present");
    mainHour.removeClass("future");
    mainHour.addClass("past");
  } else if (parseInt(hour.id.split("-")[1]) > parseInt(today.format("HH"))) {
    mainHour.removeClass("present");
    mainHour.removeClass("past");
    mainHour.addClass("future");
  } else {
    mainHour.addClass("present");
    mainHour.removeClass("past");
    mainHour.removeClass("future");
  }
}

$(function () {
  $(".saveBtn").on("click", function () {
    console.log(this);
    console.log(this.parentElement);
    console.log(this.previousElementSibling);
    console.log(this.parentElement.id);
    console.log(this.previousElementSibling.value);
    if (this.previousElementSibling.value == "") {
      console.log("Vacio");
    }
    localStorage.setItem(
      this.parentElement.id,
      this.previousElementSibling.value
    );
  });

  $(resetBtn).on("click", function () {
    console.log("reset");
    localStorage.clear();
    location.reload();
  });
});

setInterval(time, 1000);
