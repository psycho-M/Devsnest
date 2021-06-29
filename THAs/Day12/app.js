let todoInput = document.getElementById("input");
console.log(todoInput);
let addButton = document.getElementById("add-btn");
let numberOfTasks = 1;
let todoList = document.getElementById("todo-list");

todoInput.addEventListener("keypress", function(Event) {
    if(Event.key === "Enter") {
        addToDo();
    }
});

addButton.addEventListener('click', addToDo);

// document.getElementsByTagName("button").forEach(btnPress);

// function btnPress(item) {
//     if(item.classList.contains("delete-btn")) {
//         item.addEventListener
//     }
// } 

function addToDo() {
        if(todoInput.value == "") {
            return;
        }
        let input = todoInput.value;
        let newTodo = document.createElement("li");
        let delBtn = document.createElement("button");
        delBtn.classList.add("delete-btn", "hide");
        delBtn.textContent = "DEL";
        let checkBtn = document.createElement("button");
        checkBtn.classList.add("done-btn", "hide");
        checkBtn.textContent = "DONE";
        
        
    
        document.getElementById("todo-list").appendChild(newTodo);
        newTodo.id = "itm" + numberOfTasks++;
        newTodo.classList.add("itm");
        newTodo.textContent = input;

        todoInput.value = "";
}

