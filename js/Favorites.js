export class Favorites
{
    constructor()
    {
        this.liEdit = null;
    }

    getLinkEdit()
    {
        return this.liEdit;
    }

    setLinkEdit(link)
    {
        this.liEdit = link;
    }

    //ACTIVE / DESACTIVE FAVORITES
    active(favState,favorites)
    {
        // ----------- MAIN BUTTON --------------
        let btnFavorites = document.getElementById("btnFavorites");
        btnFavorites.addEventListener( 'click', function() 
        {
            favState = !favState;
            let favArea = document.getElementById("favArea");

            if(favState) 
            {
                document.getElementById("btnFavorites").style.backgroundColor = "rgb(93, 156, 238)";
                document.getElementById("favoritesApp").style.display = "grid";
            } 
            else 
            {
                document.getElementById("btnFavorites").style.backgroundColor = "rgb(255, 255, 255)";
                document.getElementById("favoritesApp").style.display = "none";
            }

            // ----------- ADD FAVORITES --------------
            let favBtnAdd = document.getElementById("favBtnAdd");
            favBtnAdd.addEventListener("click", function(e)
            {
                favorites.add(favArea);
                document.getElementById("favForm").reset();
            })
            
        });

        this.addDeleteEvent();
        this.addEditEvent();

    }

    addDeleteEvent()
    {
        let favArea = document.querySelector(".favArea");
        let deleteBtns = document.querySelectorAll(".deleteLink");
        for(let i = 0; i < deleteBtns.length; i++)
        {
            deleteBtns[i].addEventListener("click", e =>
            {
                this.delete(favArea,deleteBtns[i].parentNode);
            })
        }
    }

    delete(parent, link)
    {
        parent.removeChild(link);

        let a = favArea.querySelectorAll('a');
        if(a.length < 1)
        {
            document.getElementById("linkArea").style.height = "200px";
        }
        else if(a.length % 3 == 0)
        {   
            document.getElementById("linkArea").style.height = (a.length*45) + "px";
        }
    }

    addEditEvent()
    {
        let editBtns = document.querySelectorAll(".editLink");
        for(let i = 0; i < editBtns.length; i++)
        {
            editBtns[i].addEventListener("click", e =>
            {
                this.edit(editBtns[i].parentNode.firstElementChild);
            })
        }
    }

    edit(link)
    {
        document.getElementById("favBtnAdd").value = "Change";
        this.setLinkEdit(link);
        let favUrl = document.getElementById("favUrl");
        favUrl.value = link.getAttribute("href");
    }

    // CREATE LINK
    create()
    {
        const url = document.getElementById("favUrl").value;
        const https = "https://";

        // ============================================================================

        let card = document.createElement("div");
        let ref;
        let checkUrl = url.substr(0,8);

        if(checkUrl == https)
            ref = url;
        else
            ref = https + url;

        card.setAttribute("class", "card");
        card.innerHTML =   `<a class="cardLink" id="web1" href="${ref}" target="_blank">
                            <h5 class="linkName">${ref}</h5>
                            <li class="link"><img src="http://www.google.com/s2/favicons?domain=${ref}"/></li>
                            </a>
                            <button class="deleteLink" id="deleteLink">
                                <i class="fas fa-times"></i>
                            </button>
                            <button class="editLink" id="editLink">
                                <i class="fas fa-edit"></i>
                            </button>`;

        return card;
    }

    // ADD LINK
    add(favorites)
    {   
        if(document.getElementById("favUrl").value != "")
        {  
            if(favBtnAdd.value == "Change")
            {
                this.update(this.getLinkEdit());
                this.addDeleteEvent();
                this.addEditEvent();
                document.getElementById("favBtnAdd").value = "Add";
            }
            else
            { 
                let web = this.create();
                favorites.appendChild(web);
                this.addDeleteEvent();
                this.addEditEvent();

                let a = favArea.querySelectorAll('a');
                if(a.length == 1)
                {
                    document.getElementById("linkArea").style.height = "200px";
                }
                else if((a.length-1) % 3 == 0)
                {   
                    document.getElementById("linkArea").style.height = (a.length*50) + "px";
                }
            }
        }
    }

    // UPDATE LINK
    update(link)
    {   
        let favUrl = document.getElementById("favUrl");
        let a = favUrl.value;
        link.setAttribute("href", a);
        link.innerHTML = `<h5 class="linkName">${a}</h5>
                          <li class="link"><img src="http://www.google.com/s2/favicons?domain=${a}"/></li> `;
    }
}