today = new Date();

year = today.getFullYear();
month = today.getMonth();
calendarTitle = document.getElementById("calendar_title");
calendarTitle.innerText = `${year}년 ${month + 1}월`;

first_date = new Date(year, month, 1).getDate();
last_date = new Date(year, month + 1, 0).getDate();

first_day = new Date(year, month, 1).getDay();

function makeCalendar() {
  calendar = document.getElementById("calendar");
  row = calendar.insertRow();
  for (i = 0; i < first_day; i++) {
    cell = row.insertCell();
  }
  for (i = 1; i <= last_date; i++) {
    if (first_day !== 7) {
      cell = row.insertCell();
      cell.setAttribute("id", [i]);
      cell.innerText = [i];
      first_day += 1;
    } else {
      row = calendar.insertRow();
      cell = row.insertCell();
      cell.setAttribute("id", [i]);
      cell.innerText = [i];
      first_day = first_day - 6;
    }
  }
}

makeCalendar();

function TodayDateCheck() {
  today_date = today.getDate();
  for (i = 1; i <= last_date; i++) {
    dateId = document.getElementById([i]);
    if (today_date == dateId.getAttribute("id")) {
      dateId.bgColor = "white";
    }
  }
}
TodayDateCheck();

function before_month() {
  while (calendar.rows.length >= 2) {
    calendar.deleteRow(calendar.rows.length - 1);
  }
  month = month - 1;
  if (month === -1) {
    year = year - 1;
    month = month + 12;
  }
  calendarTitle.innerText = `${year}년 ${month + 1}월`;
  first_date = new Date(year, month, 1).getDate();
  last_date = new Date(year, month + 1, 0).getDate();
  first_day = new Date(year, month, 1).getDay();
  makeCalendar();
}

function next_month() {
  while (calendar.rows.length >= 2) {
    calendar.deleteRow(calendar.rows.length - 1);
  }
  month = month + 1;
  if (month === 12) {
    year = year + 1;
    month = month - 12;
  }
  calendarTitle.innerText = `${year}년 ${month + 1}월`;
  first_date = new Date(year, month, 1).getDate();
  last_date = new Date(year, month + 1, 0).getDate();
  first_day = new Date(year, month, 1).getDay();
  makeCalendar();
}

const leftBtn = document.querySelector("#calendar_left");
const rightBtn = document.querySelector("#calendar_right");

leftBtn.addEventListener("click", before_month);
rightBtn.addEventListener("click", next_month);
