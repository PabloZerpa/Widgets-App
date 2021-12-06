export class Traslate
{
    start(traslateState)
    {
        let btnTraslate = document.getElementById("btnTraslate");
        btnTraslate.addEventListener( 'click', function() {
        traslateState = !traslateState;
        if(traslateState) 
        {
            document.getElementById("btnTraslate").style.backgroundColor = "rgb(93, 156, 238)";
            document.getElementById("traslateApp").style.display = "grid";
        } 
        else 
        {
            document.getElementById("btnTraslate").style.backgroundColor = "rgb(255, 255, 255)";
            document.getElementById("traslateApp").style.display = "none";
        }
        });
    }
}