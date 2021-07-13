import { Nav } from "./Nav.js";
import { Todo } from "./Todo.js";
import { Calculator } from "./Calc.js";
import { Clock } from "./Clock.js";
import { Favorites } from "./Favorites.js";
import { Traslate } from "./Traslate.js";
import { Calendar } from "./Calendar.js";

let todoState = false;
let clockState = false;
let calcState = false;
let calendarState = false;
let traslateState = false;
let favState = false;

document.getElementById("appTodo").style.display = "none";
document.getElementById("calcApp").style.display = "none";
document.getElementById("calendarApp").style.display = "none";
document.getElementById("clockApp").style.display = "none";
document.getElementById("traslateApp").style.display = "none";
document.getElementById("favoritesApp").style.display = "none";

//----------------MAIN CLOCK------------------------
let clockDigital;
const mainClock = document.getElementById("mainClock");
const openClock = document.getElementById("openClock");
const closeClock  = document.getElementById("closeClock");
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
clockDigital = setInterval(mainTime, 1000);

function mainTime()
{
  let time = new Date();
  let d = time.getDay();
  let dayName = days[d];
  let h = time.getHours();
  let m = time.getMinutes();
  let s = time.getSeconds();
  
  document.getElementById("mainDay").innerText = dayName + ":";

  if(h == 0)
    document.getElementById("mainHour").innerText = "0" + h + ":";
  else
    document.getElementById("mainHour").innerText = h + ":";

  if(m < 10)
    document.getElementById("mainMinute").innerText = "0" + m + ":";
  else
    document.getElementById("mainMinute").innerText = m + ":";
    
  document.getElementById("mainSecond").innerText = s;
  if(h > 12)
    document.getElementById("mainAmpm").innerText = " pm";
  else
    document.getElementById("mainAmpm").innerText = " am";
}

openClock.addEventListener("click", function()
{
  mainClock.style.display = "none";
  openClock.style.display = "none";
  closeClock.style.display = "block";
})

closeClock.addEventListener("click", function()
{
  mainClock.style.display = "flex";
  closeClock.style.display = "none";
  openClock.style.display = "block";
})

//----------------NAVEGATION------------------------
const nav = new Nav();
nav.active();

//----------------TODO LIST------------------------
const todo = new Todo();
todo.active(todoState);
todo.addTask();

//----------------CALCULATOR------------------------
const calculator = new Calculator();
calculator.active(calcState);
calculator.start();

//--------------------CLOCK-------------------------
const clock = new Clock();
clock.start(clockState);

//--------------------CALENDAR-------------------------
const calendar = new Calendar();
calendar.active(calendarState);
calendar.start();

//----------------FAVORITES------------------------
const favorites = new Favorites();
favorites.active(favState,favorites);

//----------------TRASLATE------------------------
const traslate = new Traslate();
traslate.start(traslateState);

//----------------SIGN OUT------------------------
let btnSignOut = document.getElementById("btnSignOut")
btnSignOut.addEventListener("click", function(e)
{
  if (window.confirm("Are you sure to sign off?"))
  {
    location.href="sign.html";
  }
});