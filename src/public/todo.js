
class Task
{
    constructor(title,description,priority)
    {
        this.title = title;
        this.description = description;
        this.priority = priority;
    }

    //CREATE A NEW TASK
    create()
    {

        let parentTodo = document.querySelector('#todo');
        let parentDoing = document.querySelector('#doing');
        let parentDone = document.querySelector('#done');

        let newTask = document.createElement("li");

        let date = new Date();
        let time = date.getDay() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear() 
                                 + " " + date.getHours() + ":" + date.getMinutes();

        newTask.innerHTML = 
        `
            <input value=${this.title} >
            <textarea>${this.description}</textarea>
            <label>${this.priority}</label>
            <label>${time}</label>
            
            
        `;

        let deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.setAttribute("class", "listButton");
        deleteButton.addEventListener( "click", function()
        { 
            if (window.confirm("Are you sure to deleted the task?"))
            {
                let listTask = this.parentNode;
                let taskToDelete = listTask.parentNode;
                taskToDelete.removeChild(listTask);

            }
        });

        let backButton = document.createElement("button");
        backButton.innerHTML = `<i id="previus" class="fas fa-chevron-left"></i>`;
        backButton.setAttribute("class", "moveTask back");
        backButton.addEventListener( "click", function()
        {

            let listTask = this.parentNode.parentNode.parentNode.parentNode;
            let taskToMove = this.parentNode.parentNode;

            if (listTask.className == "doing taskArea") 
            {
              moveTaskElement(parentDoing,parentTodo,taskToMove,"doing","todo");

            }
            else if (listTask.className == "done taskArea") 
            {
              moveTaskElement(parentDone,parentDoing,taskToMove,"done","doing");
            }

        });

        let nextButton = document.createElement("button");
        nextButton.innerHTML = `<i id="previus" class="fas fa-chevron-right"></i>`;
        nextButton.setAttribute("class", "moveTask next");
        nextButton.addEventListener( "click", function()
        {

            let listTask = this.parentNode.parentNode.parentNode.parentNode;
            let taskToMove = this.parentNode.parentNode;

            if (listTask.className == "todo taskArea") 
            {
              moveTaskElement(parentTodo,parentDoing,taskToMove,"todo","doing");

            }
            else if (listTask.className == "doing taskArea") 
            {
              moveTaskElement(parentDoing,parentDone,taskToMove,"doing","done");

            }

        });


        function moveTaskElement(parentCurrent, parentNext, task, current, next)
        { 
            parentNext.lastElementChild.appendChild(task);

            let li = parentNext.querySelectorAll('li');
            let quantity = li.length;

            if(quantity <= 1)
              document.getElementById(next).style.height = 300 + "px";
            else
              document.getElementById(next).style.height = (quantity*300) + "px";

            li = parentCurrent.querySelectorAll('li');
            quantity = li.length;
            if(quantity <= 1)
              document.getElementById(current).style.height = 300 + "px";
            else
              document.getElementById(current).style.height = (quantity*300) + "px";

        }
        
        let moveButtons = document.createElement("div");
        moveButtons.setAttribute("class", "moveButtons");
        moveButtons.appendChild(backButton);
        moveButtons.appendChild(nextButton);


        newTask.appendChild(deleteButton);
        newTask.appendChild(moveButtons);
        
        return newTask;

    }

    //ADD TASK TO "TO DO" AREA
    add(todo)
    {
        let listTask = this.create();

        todo.appendChild(listTask);
    }

}

export class Todo
{
  //ACTIVE / DESACTIVE TO-DO LIST
  active(todoState)
  {

    let navTodo = document.getElementById("navTodo");
    navTodo.addEventListener( 'click', function() 
    {   
        todoState = !todoState;

        if(todoState)
        {
            document.getElementById("appTodo").style.display = "none";
            this.style.backgroundColor = "white";
            document.getElementById("taskForm").reset();
        }
        else if(!todoState)
        {
            this.style.backgroundColor = "#1b65d4";
            document.getElementById("appTodo").style.display = "grid";
        }
    });

  }

  //ADD TASK TO TO-DO LIST
  addTask()
  {
    const todoList = document.getElementById("todoTask");
    let parentTodo = document.querySelector('#todo');
    let parentDoing = document.querySelector('#doing');
    let parentDone = document.querySelector('#done');

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
        task.add(todoList);

        let li = parentTodo.querySelectorAll('li');
        let quantityTodo = li.length;
        if(quantityTodo > 1)
          document.getElementById("todo").style.height = (quantityTodo*300) + "px";
        
        document.getElementById("taskForm").reset();
      }
    });
  }

}