// Adding task to todo

const newTask = document.querySelector(".task");
const tasks = document.querySelector("ul");
const search = document.querySelector(".search");

const addNewTask = e=>{
    e.preventDefault();// will stop all default things which happen on submit event
    // console.log(e.target[0].value);
    if(e.target[0].value.trim() !== ""){
        const newTodo = document.createElement("LI");
        // newTodo.addEventListener('click',e=>{
        //     e.target.parentElement.removeChild(e.target);
        // });
        newTodo.textContent = `${e.target[0].value}` ;
        newTodo.innerHTML += "<span>X</span>"
        tasks.appendChild(newTodo);
    }
    
    newTask.reset();


}

newTask.addEventListener("submit",addNewTask);

// delete the task

// const allTasks = document.querySelectorAll("li");
// console.log(allTasks);

// allTasks.forEach(task =>{
//     task.addEventListener('click',e=>{
//         e.target.parentElement.removeChild(e.target);
//     });
// })
// event delegation

const deleteTask = e=>{
    console.log(e);
    
    if(e.target.tagName === 'LI'){
        // console.log(e.target);

        // tasks.removeChild(e.target);
        e.target.style.textDecoration = "line-through";
    }
    else if(e.target.tagName === 'SPAN'){
        tasks.removeChild(e.target.parentNode);
    }
};

tasks.addEventListener('click',deleteTask);

// search for tasks

const searchTask = e=>{
    // console.log(e.target.value);
    const listOfTodo = Array.from(tasks.children);
    listOfTodo.forEach(todo=>{
        if(!todo.textContent.toLowerCase().includes(e.target.value.toLowerCase())){
            todo.classList.add("hidden");
        }
        else{
            todo.classList.remove("hidden");
        }
    })

};

search.addEventListener("keyup",searchTask)
