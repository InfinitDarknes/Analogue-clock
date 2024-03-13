const HourHand = document.getElementById("hour-hand");
const MinuteHand = document.getElementById("minute-hand");
const SecondHand = document.getElementById("second-hand");
const Numbers = document.querySelectorAll(".number");
function AlignNumbers() {
  for (n = 0; n < Numbers.length; n++) {
    Numbers[n].style.rotate = `${(n + 1) * 6}deg`;
  }
}
function UpdateClock() {
  let DateObj = new Date();
  UpdateHourHand(DateObj);
  UpdateMinuteHand(DateObj);
  UpdateSecondHand(DateObj);
}
function UpdateHourHand(DateObj) {
  let Hour = DateObj.getHours();
  let _12HFormat = Hour > 12 ? Hour - 12 : Hour;
  let Minute = DateObj.getMinutes() / 60;
  let HourAndMinute = _12HFormat + Minute;
  HourHand.style.rotate = `${HourAndMinute * 30}deg`;
  console.log(Hour, _12HFormat, Minute, HourAndMinute);
}
function UpdateMinuteHand(DateObj) {
  let Minute = DateObj.getMinutes();
  let Seconds = DateObj.getSeconds() / 100;
  let MinuteAndSecond = Minute + Seconds;
  MinuteHand.style.rotate = `${MinuteAndSecond * 6}deg`;
}
function UpdateSecondHand(DateObj) {
  let Second = DateObj.getSeconds();
  let SecondDegree = `${Second * 6}deg`;
  SecondHand.style.rotate = SecondDegree;
}

window.onload = () => {
  AlignNumbers();
  setInterval(UpdateClock, 1000);
};
