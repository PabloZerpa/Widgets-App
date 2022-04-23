// -------------------- BOOKMARKS --------------------------

export class BookMark
{

    constructor()
    {
      this.editState = false;
    }

    // ACTIVE / DESACTIVE FAVORITES
    active(markState,bookMark)
    {
      let markArea = document.getElementById("markArea");

      // ----------- MAIN BUTTON --------------
      let navMark = document.getElementById("navMark");
      navMark.addEventListener( 'click', function() 
      {
        markState = !markState;

        if(markState) 
        {
          this.style.backgroundColor = "white";
          document.getElementById("appMark").style.display = "none";
        } 
        else 
        {
          this.style.backgroundColor = "#1b65d4";
          document.getElementById("appMark").style.display = "block";
        }
            
      });

      // ----------- ADD BUTTON --------------
      let markBtnAdd = document.getElementById("markBtnAdd");
      markBtnAdd.addEventListener("click", this.create);

    }

    // CREATE LINK
    create()
    {

      if(document.getElementById("markUrl").value != "")
      {
        const url = document.getElementById("markUrl").value;
        const https = "https://";

        // ============================================================================

        let ref;
        let checkUrl = url.substr(0,8);
        if(checkUrl == https)
          ref = url;
        else
          ref = https + url;

        let name = ref.charAt(8).toUpperCase() + ref.slice(9);

        let card = document.createElement("div");
        card.setAttribute("class", "card");
        card.innerHTML =   
        `
          <a class="cardLink" id="web1" href="${ref}" target="_blank">
            <h5 class="linkName">${name}</h5>
            <li class="link"><img src="http://www.google.com/s2/favicons?domain=${ref}"/></li>
          </a>
        `;

        // --------------- DELETE BUTTON ---------------
        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = `<i class="fas fa-times"></i>`;
        deleteButton.setAttribute("class", "deleteLink");
        deleteButton.addEventListener( "click", function()
        { 
          if (window.confirm("Are you sure to deleted this bookmark?"))
          {
            let link = this.parentNode;
            let linkParent = link.parentNode;
            linkParent.removeChild(link);
          }
        });
        card.appendChild(deleteButton);

        // --------------- EDIT BUTTON ---------------
        let editButton = document.createElement("button");
        editButton.innerHTML = `<i class="fas fa-edit"></i>`;
        editButton.setAttribute("class", "editLink");
        editButton.addEventListener( "click", function()
        { 

          // --------------- GET URL FOR EDIT ---------------
          if(this.editState)
          {
            let link = this.parentNode;
            let a = link.firstElementChild;
            let editLink = document.getElementById("markUrl").value;

            let ref;
            let checkUrl = editLink.substr(0,8);
            if(checkUrl == https)
              ref = editLink;
            else
              ref = https + editLink;

            let name = ref.charAt(8).toUpperCase() + ref.slice(9);


            a.setAttribute("href", editLink);
            a.innerHTML = `<h5 class="linkName">${name}</h5>
                              <li class="link"><img src="http://www.google.com/s2/favicons?domain=${editLink}"/></li> `;

            this.editState = !this.editState;
            document.getElementById("markForm").reset();
          }

          // --------------- CHANGE URL ---------------
          else if(!this.editState)
          {
            let link = this.parentNode;
            let a = link.firstElementChild;

            let markUrl = document.getElementById("markUrl");
            markUrl.value = a.getAttribute("href");

            this.editState = !this.editState;
          }

        });
        card.appendChild(editButton);


        let markArea = document.getElementById("markArea");
        markArea.appendChild(card);

        let quantity = markArea.querySelectorAll('a');
        if(quantity.length == 1)
        {
          document.getElementById("linkArea").style.height = "200px";
        }
        else if((quantity.length-1) % 6 == 0)
        {   
          document.getElementById("linkArea").style.height = (quantity.length*55) + "px";
        }


        document.getElementById("markForm").reset();

      }

    }

}