
import { Task } from "./Task.js";

export class Todo
{
  //ACTIVE / DESACTIVE TO-DO LIST
  active(todoState)
  {
    let btnTodo = document.getElementById("btnTodo");
    btnTodo.addEventListener( 'click', function() 
    {
      todoState = !todoState;
      if(todoState) 
      {
        document.getElementById("btnTodo").style.backgroundColor = "rgb(93, 156, 238)";
        document.getElementById("appTodo").style.display = "grid";

        document.getElementById("taskForm").reset();

        while (document.getElementById("todoTask").firstChild) 
          document.getElementById("todoTask").removeChild(document.getElementById("todoTask").firstChild);
        document.getElementById("todo").style.height = 300 + "px";

        while (document.getElementById("doingTasks").firstChild) 
          document.getElementById("doingTasks").removeChild(document.getElementById("doingTasks").firstChild);
        document.getElementById("doing").style.height = 300 + "px";

        while (document.getElementById("doneTasks").firstChild) 
          document.getElementById("doneTasks").removeChild(document.getElementById("doneTasks").firstChild);
        document.getElementById("done").style.height = 300 + "px";
      }
      else 
      {
        document.getElementById("btnTodo").style.backgroundColor = "rgb(255, 255, 255)";
        document.getElementById("appTodo").style.display = "none";
      }
    });
  }

  //ADD TASK TO TO-DO LIST
  addTask()
  {
    const todo = document.getElementById("todoTask");
    let parentTodo = document.querySelector('#todo');
    let parentDoing = document.querySelector('#doing');
    let parentDone = document.querySelector('#done');
    let li, quantityTodo, quantityDoing, quantityDone;
    let dragElement;

    //ADD NEW TASK
    document.getElementById("addButton").addEventListener("click", function (e) 
    {
      e.preventDefault();
      
      const title = document.getElementById("titleTask").value;
      const description = document.getElementById("descriptionTask").value;
      const priority = document.getElementById("priorityTask").value;

      if (title !== "" || description !== "")
      {
        const task = new Task(title,description,priority);
        task.add(todo);

        li = parentTodo.querySelectorAll('li');
        quantityTodo = li.length;

        if(quantityTodo > 1)
          document.getElementById("todo").style.height = (quantityTodo*250) + "px";
        
        document.getElementById("taskForm").reset();
      }
    });

    this.drag(dragElement, parentTodo, parentDoing, parentDone, li, quantityTodo, quantityDoing, quantityDone);
  }

  //DRAG TASK FUNCTION
  drag(dragElement, parentTodo, parentDoing, parentDone, li, quantityTodo, quantityDoing, quantityDone)
  {
    //---------------------------START DRAG//---------------------------
    document.addEventListener("dragstart", function( event ) 
    {
      event.dataTransfer.setData('text/plain',null)
      dragElement = event.target;
      event.target.style.opacity = .5;
    }, false);

    //---------------------------END DRAG//---------------------------
    document.addEventListener("dragend", function( event ) 
    {
      event.target.style.opacity = 1;
    }, false);

    //---------------------------ITEM OVER//---------------------------
    document.addEventListener("dragover", function( event ) 
    {
      event.preventDefault();
    }, false);

    //---------------------------ITEM INSIDE//---------------------------
    document.addEventListener("dragenter", function( event ) 
    {
      if ( event.target.className == "todo" || event.target.className == "doing" || event.target.className == "done" ) {
        event.target.style.background = "grey";
      }
    }, false);

    //---------------------------ITEM LEAVE//---------------------------
    document.addEventListener("dragleave", function( event ) 
    { console.log("LEAVE");
      if ( event.target.className == "todo" || event.target.className == "doing" || event.target.className == "done" ) {
        event.target.style.background = "";
        
        if(event.target.className == "todo")
        {
          li = parentTodo.querySelectorAll('li');
          quantityTodo = li.length;
          console.log('Cantidad en TODO: ' + quantityTodo);

          if(quantityTodo > 1)
            document.getElementById("todo").style.height = ((quantityTodo+1)*200) + "px";
          else
            document.getElementById("todo").style.height = 300 + "px";
        }
        else if(event.target.className == "doing")
        {
          li = parentDoing.querySelectorAll('li');
          quantityDoing = li.length;
          console.log('Cantidad en DOING: ' + quantityDoing);

          if(quantityDoing > 1)
            document.getElementById("doing").style.height = ((quantityDoing+1)*200) + "px";
          else
            document.getElementById("doing").style.height = 300 + "px";
        }
        else if(event.target.className == "done")
        {
          li = parentDone.querySelectorAll('li');
          quantityDone = li.length;
          console.log('Cantidad en DONE: ' + quantityDone);

          if(quantityDone > 1)
            document.getElementById("done").style.height = ((quantityDone+1)*200) + "px";
          else
            document.getElementById("done").style.height = 300 + "px";
        }
      }
    }, false);

    //---------------------------ITEM DROP//---------------------------
    document.addEventListener("drop", function( event ) 
    {   console.log("DROP");
        event.preventDefault();

        if ( event.target.className == "todo" || event.target.className == "doing" || event.target.className == "done" ) {
            event.target.style.background = "";

            if(event.target.className == "todo")
            { 
              li = parentTodo.querySelectorAll('li');
              quantityTodo = li.length;

              if(quantityTodo > 0)
                document.getElementById("todo").style.height = ((quantityTodo+1)*200) + "px";
              else
                document.getElementById("todo").style.height = 300 + "px";

              dragElement.parentNode.removeChild( dragElement );
              document.getElementById("todoTask").appendChild( dragElement );
            }

            else if(event.target.className == "doing")
            {
              li = parentDoing.querySelectorAll('li');
              quantityDoing = li.length;

              if(quantityDoing > 0)
                document.getElementById("doing").style.height = ((quantityDoing+1)*200) + "px";
              else
                document.getElementById("doing").style.height = 300 + "px";

              dragElement.parentNode.removeChild( dragElement );
              document.getElementById("doingTasks").appendChild(dragElement)
            }

            else if(event.target.className == "done")
            {
              li = parentDone.querySelectorAll('li');
              quantityDone = li.length;

              if(quantityDone > 0)
                document.getElementById("done").style.height = ((quantityDone+1)*200) + "px";
              else
                document.getElementById("done").style.height = 300 + "px";

              dragElement.parentNode.removeChild( dragElement );
              document.getElementById("doneTasks").appendChild( dragElement );
            }

            //dragElement.parentNode.removeChild( dragElement );
            //event.target.appendChild( dragElement );
      }
    }, false);
  }

}

