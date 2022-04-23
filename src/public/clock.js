// -------------------- CLOCK --------------------------

export class Clock
{
  
  // -------------------------- ANALOGIC CLOCK -------------------------
  setDate()
  {
    const date = new Date();
    
    const hours = ((date.getHours() + 11) % 12 + 1);
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    
    const hour = hours * 30;
    const minute = minutes * 6;
    const second = seconds * 6;
    
    document.querySelector('.hourArrow').style.transform = `rotate(${hour}deg)`;
    document.querySelector('.minuteArrow').style.transform = `rotate(${minute}deg)`;
    document.querySelector('.secondArrow').style.transform = `rotate(${second}deg)`;

  }

  start(clockState)
  {

    let navClock = document.getElementById("navClock");
    let clockDigital;
    document.getElementById("hour").innerText = "00:";
    document.getElementById("minute").innerText = "00:";
    document.getElementById("second").innerText = "00";

    let hour = 0;
    let minute = 0;
    let second = 0;

    setInterval(this.setDate, 1000);

    // ============================================================================

    navClock.addEventListener( 'click', function() 
    {
      clockState = !clockState;
      if(clockState) 
      {
        document.getElementById("navClock").style.backgroundColor = "#1b65d4";
        document.getElementById("clockApp").style.display = "grid";

        //------------------------------------------ TIMER EVENT -----------------------------------------------//
        document.getElementById("timerCheck").addEventListener("change", function()
        {
          document.getElementById("timerBtn").style.display = "flex";
          document.getElementById("chronoBtn").style.display = "none";
          document.getElementById("alarmBtn").style.display = "none";

          document.getElementById("hour").innerText = "";
          document.getElementById("minute").innerText = "";
          document.getElementById("second").innerText = "";
          document.getElementById("ampm").innerText = "";
        })

        //-------------------------- PLAY TIMER EVENT -------------------------------//
        document.getElementById("playTimer").addEventListener("click", function()
        {
            document.getElementById("playTimer").style.display = "none";
            document.getElementById("pauseTimer").style.display = "block";
            let timerTime = document.getElementById("timerTime").value;

            document.getElementById("hour").innerText = timerTime;
            document.getElementById("minute").innerText = "";
            document.getElementById("second").innerText = "";

            clockDigital = setInterval(function(){
              if(timerTime > 0)
              {
                timerTime--;
                document.getElementById("hour").innerText = timerTime;
              }
            }, 1000) 

        })

        //-------------------------- PAUSE TIMER EVENT -------------------------------//
        document.getElementById("pauseTimer").addEventListener("click", function()
        {
          document.getElementById("playTimer").style.display = "block";
          document.getElementById("pauseTimer").style.display = "none";
          clearInterval(clockDigital);
          document.getElementById("timerTime").value = document.getElementById("hour").innerText;
        })

        //-------------------------- RESET TIMER EVENT -------------------------------//
        document.getElementById("resetTimer").addEventListener("click", function()
        {
          document.getElementById("playTimer").style.display = "block";
          document.getElementById("pauseTimer").style.display = "none";
          clearInterval(clockDigital);
          document.getElementById("hour").innerText = "";
          document.getElementById("minute").innerText = "";
          document.getElementById("second").innerText = "";
          document.getElementById("ampm").innerText = "";

          document.getElementById("timerTime").value = "";
        })

        //-------------------------- PAUSE CHRONOMETER -------------------------------//
        document.getElementById("chronoPause").addEventListener("click", function(e)
        {
          if(document.getElementById("chronoCheck").checked)
          {

            document.getElementById("chronoPause").style.display = "none";
            document.getElementById("chronoPlay").style.display = "flex";
            clearInterval(clockDigital);
          }
        })

        //-------------------------- PLAY CHRONOMETER -------------------------------//
        document.getElementById("chronoPlay").addEventListener("click", function(e)
        {
          if(document.getElementById("chronoCheck").checked)
          {
            document.getElementById("chronoPlay").style.display = "none";
            document.getElementById("chronoPause").style.display = "flex";

            clockDigital = setInterval(function()
            { 
              second++;
              if(second > 59)
              {
                minute++;
                second = 0;
              }
              if(minute > 59)
              {
                hour++;
                minute = 0;
              }

              if(hour < 10)
                document.getElementById("hour").innerText = "0" + hour + ":";
              else
                document.getElementById("hour").innerText = hour + ":";
              if(minute < 10)
                document.getElementById("minute").innerText = "0" + minute + ":";
              else
                document.getElementById("minute").innerText = minute + ":";
              if(second < 10)
                document.getElementById("second").innerText = "0" + second;
              else
                document.getElementById("second").innerText = second; 
            }, 1000);
          }
        })

        //-------------------------- REDO CHRONOMETER -------------------------------//
        document.getElementById("chronoRedo").addEventListener("click", function(e)
        {
          if(document.getElementById("chronoCheck").checked)
          {
            clearInterval(clockDigital);
            document.getElementById("chronoPause").style.display = "none";
            document.getElementById("chronoPlay").style.display = "flex";

            document.getElementById("hour").innerText = "00:";
            document.getElementById("minute").innerText = "00:";
            document.getElementById("second").innerText = "00";
            hour = 0;
            minute = 0;
            second = 0;
          }
        })

        //-------------------------- RADIO-BUTTON CHRONOMETER -------------------------------//
        document.getElementById("chronoCheck").addEventListener("change", function()
        {
          if(document.getElementById("chronoCheck").checked)
          {
            clearInterval(clockDigital);
            document.getElementById("alarmBtn").style.display = "none";
            document.getElementById("timerBtn").style.display = "none";
            document.getElementById("chronoBtn").style.display = "flex";

            document.getElementById("hour").innerText = "00:";
            document.getElementById("minute").innerText = "00:";
            document.getElementById("second").innerText = "00";
            document.getElementById("ampm").innerText = "";
          }
        })

        //-------------------------- ALARM EVENT -------------------------------//
        document.getElementById("alarmCheck").addEventListener("change", function()
        {
          if(document.getElementById("alarmCheck").checked)
          {
            clearInterval(clockDigital);
            document.getElementById("chronoBtn").style.display = "none";
            document.getElementById("timerBtn").style.display = "none";
            document.getElementById("alarmBtn").style.display = "flex";

            document.getElementById("hour").innerText = "00:";
            document.getElementById("minute").innerText = "00";
            document.getElementById("second").innerText = "";
          }
        })

        //-------------------------- DESACTIVE ALARM -------------------------------//
        document.getElementById("alarmDesactive").addEventListener("click", function(e)
        {
          if(document.getElementById("alarmCheck").checked)
          {
            clearInterval(clockDigital);
            document.getElementById("alarmDesactive").style.display = "none";
            document.getElementById("alarmTime").style.display = "none";
            document.getElementById("alarmActive").style.display = "flex";

            let alarmTime = document.getElementById("alarmTime").value;
            let alarmHour = alarmTime.substring(0,2);
            let alarmMinute = alarmTime.substring(3,5);

            document.getElementById("hour").innerText = alarmHour + ":";
            document.getElementById("minute").innerText = alarmMinute;
            if(alarmHour > 12)
              document.getElementById("ampm").innerText = " pm";
            else
              document.getElementById("ampm").innerText = " am";

            clockDigital = setInterval(function(){
              let currentTime = new Date();
              let curretHour = currentTime.getHours();
              let currentMinutes = currentTime.getMinutes();
              if(curretHour == alarmHour && currentMinutes == alarmMinute)
              {
                console.log("ALARM");
                clearInterval(clockDigital);
              }
            }, 1000) 

          }
        })

        //-------------------------- ACTIVE ALARM -------------------------------//
        document.getElementById("alarmActive").addEventListener("click", function(e)
        {
          if(document.getElementById("alarmCheck").checked)
          {
            clearInterval(clockDigital);
            document.getElementById("alarmActive").style.display = "none";
            document.getElementById("alarmDesactive").style.display = "flex";
            document.getElementById("alarmTime").style.display = "flex";

            document.getElementById("hour").innerText = "00:";
            document.getElementById("minute").innerText = "00";
            document.getElementById("second").innerText = "";
          }
        })

      }
      else 
      {
        document.getElementById("navClock").style.backgroundColor = "rgb(255, 255, 255)";
        document.getElementById("clockApp").style.display = "none";
        clearInterval(clockDigital);
      }
    });
  }

  startDigital()
  {
    let time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    
    if(h == 0)
      document.getElementById("hour").innerText = "0" + h + ":";
    else
      document.getElementById("hour").innerText = h + ":";
  
    if(m < 10)
      document.getElementById("minute").innerText = "0" + m + ":";
    else
      document.getElementById("minute").innerText = m + ":";
      
    document.getElementById("second").innerText = s;
    if(h > 12)
      document.getElementById("ampm").innerText = " pm";
    else
      document.getElementById("ampm").innerText = " am";
  }

}
