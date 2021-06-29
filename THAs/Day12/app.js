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
        // let delBtn = document.createElement("button");
        // delBtn.classList.add("delete-btn", "hide");
        // delBtn.textContent = "DEL";
        // let checkBtn = document.createElement("button");
        // checkBtn.classList.add("done-btn", "hide");
        // checkBtn.textContent = "DONE";
        
        
    
        document.getElementById("todo-list").appendChild(newTodo);
        newTodo.id = "itm" + numberOfTasks++;
        newTodo.classList.add("itm");
        // newTodo.textContent = input;
        newTodo.innerHTML = '<button class="delete-btn hide">DEL</button><span class="list-input">' + input + '</span><button class="done-btn hide">CHECK</button>'
        let buttons = newTodo.querySelectorAll('button');
        console.log(buttons);
        buttons.forEach(addFunctionality);
        todoInput.value = "";
}

function addFunctionality(btn) {
    btn.addEventListener('click', addButtonFunction);
}

function addButtonFunction() {
    if(this.classList.contains('delete-btn')) {
        let currTodo = this.parentElement;
        currTodo.remove();
        return;
    }

    if(this.classList.contains('done-btn')) {
        let currTodo = this.parentElement;
        console.log(currTodo);
        let listInput = currTodo.querySelector(".list-input").classList;
        if(listInput.contains("checked")) {
            listInput.remove("checked");
            this.innerHTML = "CHECK";
        } else {
            listInput.add("checked");
            this.innerHTML = "UNCHECK";
        }
        return;
    }
}

