
import {Todo} from "./todo.js"
import {Calculator} from "./calc.js"
import {Calendar} from "./cale.js"
import {Clock} from "./clock.js"
import {BookMark} from "./mark.js"
import {Translator} from "./tra.js"

let todoState = true;
let calcState = true;
let caleState = true;
let clockState = true;
let markState = true;
let traState = true;
document.getElementById("appTodo").style.display = "none";
document.getElementById("appCalc").style.display = "none";
document.getElementById("appCale").style.display = "none";
document.getElementById("clockApp").style.display = "none";
document.getElementById("appMark").style.display = "none";
document.getElementById("appTra").style.display = "none";

// -------------------- NAV --------------------------

let open = true;
let navOpen = document.getElementById("navOpen");
navOpen.addEventListener('click', function()
{
    if (open) 
    {
        this.style.transform = "rotate(-90deg)";
        hiddenNavButton(false);
        open = false;
        console.log("Opcion 1 ejecutada");
    }
    else if(!open) 
    {
        this.style.transform = "rotate(135deg)";
        resetNavButton();
        hiddenNavButton(true);
        open = true;
        console.log("Opcion 2 ejecutada");
    }
});

function resetNavButton()
{
    let elements = document.getElementsByClassName("navButton");
    for(let i = 1; i < elements.length; i++)
    {
        elements[i].style.backgroundColor = "white";
    }
}

function hiddenNavButton(hidden)
{
    let elements = document.getElementsByClassName("navButton");
    for(let i = 1; i < elements.length; i++)
    {
        if(hidden)
            elements[i].style.opacity = "1";
        else
            elements[i].style.opacity = "0";
    }
    document.getElementById("appTodo").style.display = "none";
    document.getElementById("appCalc").style.display = "none";
    document.getElementById("appCale").style.display = "none";
    document.getElementById("clockApp").style.display = "none";
    document.getElementById("appMark").style.display = "none";
    document.getElementById("appTra").style.display = "none";
}


const bgBody = document.querySelector("body");
let colorSelector = document.getElementById("color");
  
  colorSelector.addEventListener( 'mouseover', function() 
  {
    
    document.getElementById("navBg").style.backgroundColor = "#1b65d4";
    document.getElementById("bgColor").style.display = "inline";
    
    let colors = document.querySelectorAll("ul.backgroundColor > li");
    for (let color of colors) 
    {
      color.addEventListener("click", function(e)
      {
        let colorSelected = e.target;
    
        if(colorSelected.innerText == "White")
        {
          bgBody.style.background = "#fff";
        }
        else if(colorSelected.innerText == "Blue")
        {
          bgBody.style.background = "RGBA(0,164,255,0.75)";
        }
        else if(colorSelected.innerText == "Yellow")
        {
          bgBody.style.background = "RGBA(255,255,0,0.5)";
        }
        else if(colorSelected.innerText == "Red")
        {
          bgBody.style.background = "RGBA(255,26,0,0.75)";
        }
        else if(colorSelected.innerText == "Green")
        {
          bgBody.style.background = "RGBA(66,255,125,0.75)";
        }
        else if(colorSelected.innerText == "Black")
        {
          bgBody.style.background = "RGBA(15,15,15,1)";
        }
      });
    }
  });

colorSelector.addEventListener( 'mouseout', function() 
{
  document.getElementById("navBg").style.backgroundColor = "rgb(255, 255, 255)";
  document.getElementById("bgColor").style.display = "none";
});
    
document.getElementById("pictureFile").addEventListener("change", function(e)
{
  let picture = URL.createObjectURL(e.target.files[0]);
  console.log(picture);
  bgBody.style.backgroundImage = "url(" + picture + ")";
  bgBody.style.backgroundRepeat = "repeat";
  bgBody.style.backgroundSize = "cover";
})

// -------------------- MAIN CLOCK --------------------------

let clockDigital;
const mainClock = document.getElementById("mainClock");
const openClock = document.getElementById("openClock");
const closeClock  = document.getElementById("closeClock");
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let clockMainDigital;
clockMainDigital = setInterval(mainTime, 1000);

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


// -------------------- TO-DO --------------------

const todo = new Todo();
todo.active(todoState);
todo.addTask();


// -------------------- CALCULATOR --------------------

const calculator = new Calculator();
calculator.active(calcState);
calculator.start();


// -------------------- CALENDAR --------------------

const calendar = new Calendar();
calendar.active(caleState);
calendar.start();

// -------------------- CLOCK --------------------

const clock = new Clock();
clock.start(clockState);

// -------------------- BOOKMARK --------------------

const bookMark = new BookMark();
bookMark.create();
bookMark.active(markState,this);

// -------------------- TRASLATOR --------------------

const translator = new Translator();
translator.active(traState);
translator.start();