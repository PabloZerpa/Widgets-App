
export class Task
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
        let newTask = document.createElement("li");
        newTask.draggable = true;

        let date = new Date();
        let time = date.getDay() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes();

        //CREATE THE HTML ELEMENTS
        let titleTask = document.createElement("input");
        let descriptionTask = document.createElement("textarea");
        let priorityTask = document.createElement("label");
        let dateTask = document.createElement("label");
        let deleteButton = document.createElement("button");

        //ADD TEXTS TO THE ELEMENTS
        titleTask.setAttribute("value", this.title);
        titleTask.setAttribute("readonly", "readonly");
        titleTask.addEventListener("mouseenter", function (e)
        {
            titleTask.readOnly = false;
        });
        titleTask.addEventListener("mouseleave", function (e)
        {
            titleTask.readOnly = true;
        });

        descriptionTask.innerText = this.description;
        descriptionTask.setAttribute("readonly", "readonly");
        descriptionTask.addEventListener("mouseenter", function (e)
        {
            descriptionTask.readOnly = false;
        });
        descriptionTask.addEventListener("mouseleave", function (e)
        {
            descriptionTask.readOnly = true;
        });

        priorityTask.innerText = this.priority;
        dateTask.innerText = time;
        
        //DELETE BUTTON EVENT
	    deleteButton.innerText = "Delete";
        deleteButton.className = "delete";
        deleteButton.setAttribute("class", "listButton");
        deleteButton.addEventListener("click",function (e)
        { 
            if (window.confirm("Are you sure to deleted the task?"))
            {
                let listTask = this.parentNode;
                let taskToDelete = listTask.parentNode;
                taskToDelete.removeChild(listTask);

                // Selector Padre
                let parentTodo = document.querySelector('#todo');
                let li = parentTodo.querySelectorAll('li');
                let cantidad = li.length;
                console.log('Cantidad: ' + cantidad);

                if(cantidad > 1)
                    document.getElementById("todo").style.height = cantidad*250 + "px";
                else
                    document.getElementById("todo").style.height = 300 + "px";

            }
        });
        
        //ADD ELEMENTS TO THE NEWTASK "li"
        newTask.appendChild(titleTask);
        newTask.appendChild(descriptionTask);
        newTask.appendChild(priorityTask);
        newTask.appendChild(dateTask);
        newTask.appendChild(deleteButton);
        
        return newTask;
    }

    //ADD TASK TO "TO DO" AREA
    add(todo)
    {
        let listTask = this.create();

        todo.appendChild(listTask);
    }

}