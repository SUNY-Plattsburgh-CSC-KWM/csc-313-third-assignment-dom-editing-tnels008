let workItems = [];
class WorkItem {
  #task;
    #dueDate;
    #priority;
    #complete;
  constructor(task, dueDate, priority) {
        this.#task = task;
        this.#dueDate = dueDate;
        this.#priority = priority;
        this.#complete = false;
    }
   getTask() {
        return this.#task;
    }

    getDueDate() {
        return this.#dueDate;
    }

    getPriority() {
        return this.#priority;
    }

    getComplete() {
        return this.#complete;
      
    }
  document.getElementById("addItem").addEventListener("click", function() {
    let task = prompt("Enter task description:");
    let dueDate = prompt("Enter due date:");
    let priority = prompt("Enter priority:");

    if (task && dueDate && priority) {
        let newItem = new WorkItem(task, dueDate, priority);
        workItems.push(newItem);
        redraw();
    }
});

document.getElementById("completeItem").addEventListener("click", function() {
    let index = prompt("Enter task number to mark complete:");

    index = parseInt(index);

    if (!isNaN(index) && index >= 0 && index < workItems.length) {
        workItems[index].setComplete(true);
        redraw();
    } else {
        alert("Invalid task number.");
    }
});

function redraw() {
    let tasksDiv = document.getElementById("tasks");

    
    while (tasksDiv.firstChild) {
        tasksDiv.removeChild(tasksDiv.firstChild);
    }

    
    for (let i = 0; i < workItems.length; i++) {
        let item = workItems[i];

        let p = document.createElement("p");

        p.textContent = `${i}: ${item.getTask()} | Due: ${item.getDueDate()} | Priority: ${item.getPriority()}`;

        if (item.getComplete()) {
            p.style.color = "green";
        } else {
            p.style.color = "red";
        }

        tasksDiv.appendChild(p);
    }
}




