const listTodo = document.querySelector("#list_todo");
const formTodo = document.querySelector("#form_submit");
const todoInput = formTodo.querySelector("input")
const noText = listTodo.querySelector("p");

let newtodo = []

function SubmitTodo(event) {
    const todoval = todoInput.value;
    event.preventDefault();
    todoInput.value = "";
    newdo = {"id":Date.now(),"text":todoval}
    newtodo.push(newdo);
    AddTodo(newdo);
    saveTodo();
}

function AddTodo(todoli) {
    noText.classList.add("no_div");
    const div = document.createElement("div");
    div.classList.add("box_todo");
    div.id = todoli.id;
    const p = document.createElement("p");
    p.innerText = todoli.text;
    const btn = document.createElement("button")
    btn.innerHTML = "완료";
    btn.addEventListener("click", deleteTodo);
    div.appendChild(p);
    div.appendChild(btn);
    listTodo.appendChild(div);
}

function saveTodo(){
    localStorage.setItem("todo", JSON.stringify(newtodo));
}

function deleteTodo(element){
    const del = element.target.parentElement;
    del.remove();
    newtodo = newtodo.filter((element) => element.id !== parseInt(del.id));
    saveTodo();
    console.log(newtodo);
    if(newtodo.length == 0){
        noText.classList.remove("no_div");
    }
}

const savedtodo = localStorage.getItem("todo");
if(savedtodo){
    const psavedtodo = JSON.parse(savedtodo);
    newtodo = psavedtodo;
    psavedtodo.forEach(AddTodo);
}else{
    noText.classList.add("no_div");
}

formTodo.addEventListener("submit", SubmitTodo);