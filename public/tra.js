

export class Translator
{
  active(traState)
  {

    let navTra = document.getElementById("navTra");
    navTra.addEventListener( 'click', function() 
    {   
        traState = !traState;

        if(traState)
        {
            document.getElementById("appTra").style.display = "none";
            this.style.backgroundColor = "white";
        }
        else if(!traState)
        {
            document.getElementById("appTra").style.display = "block";
            this.style.backgroundColor = "#1b65d4";
            document.getElementById("textFrom").value = "";
            document.getElementById("textTo").value = "";
        }
    });

  }

  start()
  {

    const apiKey = "4fa975bf8a609da6923334983c8ede03";
    const apiUrl = "https://translate.hirak.site/";
    let url = "";

    let text = document.getElementById("textFrom");
    let from = document.getElementById("selectFrom");
    let to = document.getElementById("selectTo");
    let textTo = document.getElementById("textTo");


    const getData = async (from, to, text) =>
    {
        try
        {
            url = `${apiUrl}/?lang=${from}-${to}&txt=${text}&token=${apiKey}`;
            await axios.get(url)
                .then(response => {
                let dato = response.data;
                if(dato.result != undefined)
                    document.getElementById("textTo").value = dato.result;
                else
                    document.getElementById("textTo").value = "";
            });

        }
        catch(error)
        {
            console.log(error);
        }
    }

    text.addEventListener("change", function()
    {
        getData(from.value, to.value, text.value);
    })

  }



}