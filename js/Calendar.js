export class Calendar
{
    active(calendarState)
    {
        let btnCalendar = document.getElementById("btnCalendar");
        btnCalendar.addEventListener( 'click', function() 
        {
            calendarState = !calendarState;
            if(calendarState) 
            {
                document.getElementById("btnCalendar").style.backgroundColor = "rgb(93, 156, 238)";
                document.getElementById("calendarApp").style.display = "grid";
            }
            else 
            {
                document.getElementById("btnCalendar").style.backgroundColor = "rgb(255, 255, 255)";
                document.getElementById("calendarApp").style.display = "none";
            }
        })
    }

    start()
    {
        // -------------------- DATE VARIABLES --------------------
        const monthName = ["January", "February", "March", "April", "May", "June", "July", 
                        "August", "September", "Octuber", "November", "December"];
        let currentDate = new Date();
        let currentMonth = currentDate.getMonth();
        let currentYear = currentDate.getFullYear();

        // -------------------- BUTTON VARIABLES --------------------
        let previus = document.getElementById("previus");
        let next = document.getElementById("next");
        let month = document.getElementById("month");
        let selectMonth = document.getElementById("selectMonth");
        let year = document.getElementById("year");
        let selectYear = document.getElementById("selectYear");
        selectYear.value = currentYear;
        let date = document.getElementById("date");

        month.innerText = monthName[currentMonth];
        year.innerText = currentYear.toString();
        
        this.printDays(date,currentMonth,currentYear);

        // -------------------- SHOW SELECT MONTH --------------------
        selectMonth.addEventListener("change", e => 
        {
            date.innerHTML = ``;
            this.printDays(date,selectMonth.selectedIndex,currentYear);
        })

        // -------------------- CHANGE YEAR --------------------
        let selectYearClass = document.querySelector(".selectYear");
        selectYearClass.addEventListener("change", e =>
        {   
            date.innerHTML = ``;
            this.printDays(date,selectMonth.selectedIndex,selectYear.value);
        })

        // -------------------- NEXT METHOD --------------------
        next.addEventListener("click", () =>
        {
            if(selectMonth.selectedIndex == 11)
            {
                selectYear.value++;
                selectMonth.options[0].selected = "selected";
                year.innerText = currentYear.toString();
            }
            else
                selectMonth.options[selectMonth.selectedIndex+1].selected = "selected";

            month.innerText = monthName[currentMonth];

            date.innerHTML = ``;
            this.printDays(date,selectMonth.selectedIndex,currentYear);
        })

        // -------------------- PREVIUS METHOD --------------------
        previus.addEventListener("click", () =>
        {
            if(selectMonth.selectedIndex == 0)
            {
                selectYear.value--;
                selectMonth.options[11].selected = "selected";
                year.innerText = currentYear.toString();
            }
            else
                selectMonth.options[selectMonth.selectedIndex-1].selected = "selected";
                
            month.innerText = monthName[currentMonth];

            date.innerHTML = ``;
            this.printDays(date,selectMonth.selectedIndex,currentYear);
        })
    }

    // -------------------- PRINT DAYS --------------------
    printDays(date, month, year)
    {   
        for (let i=this.startDay(month,year); i>0; i--) 
        {
            date.innerHTML += `<p class="ghostDay">${this.monthDay(month-1,year) - (i-1)}</p>`;
        }
        
        let currentDate = new Date();
        for(let i=1; i<=this.monthDay(month,year); i++)
        {
            if((currentDate.getMonth() == month) && (currentDate.getDate() == i))
                date.innerHTML += `<p class="current">${i}</p>`;
            else
                date.innerHTML += `<p>${i}</p>`;
        }
    }

    // -------------------- MONTH DAYS --------------------
    monthDay(month,year)
    { 
        if(month == 0 || month == 2 || month == 4 || month == 6 || 
            month == 7 || month == 9 || month == 11)
        {
            return 31;
        }
        else if(month == 3 || month == 5 || month == 8 || month == 10)
        {
            return 30;
        }
        else
        {
            if(this.leap(year))
                return 29;
            else
                return 28;
        }
    }

    // -------------------- LEAP --------------------
    leap(year)
    {
        return ((year % 100 != 0) && (year % 4 == 0) || (year % 400 == 0))
    }

    // -------------------- START DAYS --------------------
    startDay(month,year)
    {
        let start = new Date(year, month, 1);
        return ((start.getDay()-1) == -1) ? 6 : start.getDay()-1;
    }
    
}