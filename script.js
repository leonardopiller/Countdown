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
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const giveaway =  document.querySelector(".giveaway");
  const deadline = document.querySelectorAll(".deadline");
  const items = document.querySelectorAll(".deadline-format h4");

  //Christmas Veve  
  let futureDate = new Date(2023, 11, 25, 0, 0);
  console.log(futureDate);
const year = futureDate.getFullYear();
let hours = futureDate.getHours();
if(+hours < 10){
    hours = '0' + hours;
}


let minutes = futureDate.getMinutes();
if(+minutes  < 10){
    minutes = '0' + minutes;
}
let month = futureDate.getMonth();
month = months[month];
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];
  giveaway.textContent = `Giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;
const futureTime = futureDate.getTime();

  function getRemainingTime(){
    const today = new Date().getTime(); //result comes in milisec
    const t = futureTime - today;
    //1s = 1000ms
    //1m = 60s
    //1hr = 60min
    //1d = 24hr
    
    //values in ms
    const oneDay = 24*60*60*1000;
    const oneHour = 60*60*1000;
    const oneMinute = 60*1000;
    //calculate all values
    let days = t / oneDay;
    days = Math.floor(days);
    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000)

    //set values array
    const values = [days, hours, minutes,seconds];
    function format(item){
      if(item < 10){
        return item = `0${item}`
      }
      return item;
    }

    items.forEach(function(item, index){
      item.innerHTML = format(values[index]);
    })
    }

    //countdown
    let countdown = setInterval(getRemainingTime, 1000);
  getRemainingTime();