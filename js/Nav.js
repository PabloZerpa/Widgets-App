export class Nav
{
    //ACTIVE / DESATIVE NAVEGATION
    active()
    {
        this.background();
        
        const addBtn = document.querySelector(".add");
        const nav = document.querySelector(".nav");
        nav.classList.toggle("nav-open");

        addBtn.addEventListener("click", () => 
        {
            nav.classList.toggle("nav-open");
            document.getElementById("Background").style.backgroundColor = "rgb(255, 255, 255)";
            document.getElementById("bgColor").style.display = "none";
        
            document.getElementById("btnTodo").style.backgroundColor = "rgb(255, 255, 255)";
            document.getElementById("appTodo").style.display = "none";
        
            document.getElementById("btnCalculator").style.backgroundColor = "rgb(255, 255, 255)";
            document.getElementById("calcApp").style.display = "none";

            document.getElementById("btnCalendar").style.backgroundColor = "rgb(255, 255, 255)";
            document.getElementById("calendarApp").style.display = "none";
        
            document.getElementById("btnClock").style.backgroundColor = "rgb(255, 255, 255)";
            document.getElementById("clockApp").style.display = "none";
        
            document.getElementById("btnTraslate").style.backgroundColor = "rgb(255, 255, 255)";
            document.getElementById("traslateApp").style.display = "none";
        
            document.getElementById("btnFavorites").style.backgroundColor = "rgb(255, 255, 255)";
            document.getElementById("favoritesApp").style.display = "none";
        });
    }

    //ACTIVE / DESACTIVE BACKGROUND SELECTOR
    background()
    {
        const bgBody = document.querySelector("body");
        let colorSelector = document.getElementById("color");
        colorSelector.addEventListener( 'mouseover', function() 
        {
    
            document.getElementById("Background").style.backgroundColor = "rgb(93, 156, 238)";
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
            document.getElementById("Background").style.backgroundColor = "rgb(255, 255, 255)";
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
    }


}