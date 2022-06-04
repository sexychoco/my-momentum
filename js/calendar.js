const date = new Date();

const renderCalendar = () => {
  date.setDate(1);
  const calendar = document.querySelector("calendar");
  const monthTitle = document.querySelector(".date h1");
  const subTitle = document.querySelector(".date p");
  const monthDays = document.querySelector(".days");
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  monthTitle.innerHTML = months[date.getMonth()];
  subTitle.innerHTML = date.toDateString();

  let days = "";

  const firstDayIndex = date.getDay();
  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();
  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();
  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const nextDays = 7 - lastDayIndex - 1;

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() == new Date().getMonth()
    ) {
      days += `<div class="date today">${i}</div>`;
    } else {
      days += `<div class="date">${i}</div>`;
    }
    monthDays.innerHTML = days;
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next">${j}</div>`;
    monthDays.innerHTML = days;
  }
};

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

prev.addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

next.addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();
