export const addComma = (value) => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const removeFormatDate = (date) => {
  var d = new Date(date);
  let month = d.getMonth() + 1;
  let day = d.getDate();
  if (month < 10) {
    month = "0" + month;
  }
  if (day < 10) {
    day = "0" + day;
  }
  let returnedDate = d.getFullYear() + "-" + month + "-" + day;

  return returnedDate;
};

export const validEmail = (email) => {
  var emailReg = /^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  return emailReg.test(email);
};

export const formateDateAndTimeByName = (newDate) => {
  const d = new Date(newDate);
  const year = d.getFullYear(); // 2019
  const date = d.getDate();
  // const days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  var hours = d.getHours();
  var minutes = d.getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  // date = date < 10 ? "0" + minutes : date;
  var strTime = hours + ":" + minutes + " " + ampm;

  // const dayIndex = d.getDay();
  // const dayName = days[dayIndex];

  const monthIndex = d.getMonth();
  const monthName = months[monthIndex];
  // ${dayName},
  const formatted = ` ${
    date < 10 ? "0" + date : date
  } ${monthName} ${year}, ${strTime}`;

  return formatted;
};
