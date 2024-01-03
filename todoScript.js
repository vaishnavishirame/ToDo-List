let task = document.getElementById("task");
let taskList = document.querySelector(".task-list");

function addTask() {
    let newTask = task.value;
    if (newTask!="") {
        let li = document.createElement("li");
        li.innerHTML = newTask;
        let span = document.createElement("span");
        span.innerHTML = "❌";
        li.appendChild(span);
        taskList.appendChild(li);
        console.log(newTask);
    }
    else{
        alert("Enter a Task");
    }
    saveData();
    task.value = "";
}

taskList.addEventListener("click",function(event){
    if (event.target.tagName=="LI") {
        event.target.classList.toggle("checked");
        saveData();
    } else if(event.target.tagName=="SPAN"){
        event.target.parentElement.remove();
        saveData();
    }
},
false
);

function saveData() {
    localStorage.setItem("data", taskList.innerHTML);
}
function fetchData() {
    taskList.innerHTML=localStorage.getItem("data")
}
fetchData();