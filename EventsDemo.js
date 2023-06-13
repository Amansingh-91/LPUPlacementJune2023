// Events Basic

// select element on which you want to listen for event

const para =  document.querySelector("p");
let toggle = 1;
// add event listner
const changeColor = (e)=>{
    console.log(e);
    if(toggle === 1){
        para.setAttribute("style","color:red");
        toggle = 2;
    }
    else{
    para.setAttribute("style",["color:blue","font-size:35px"]);
        toggle = 1;
    }
}
para.addEventListener("click",changeColor);


const form =  document.querySelector("form");
const nameList = document.querySelector("ul");

form.addEventListener("submit",e=>{
    e.preventDefault();
    const name =e.target[0].value;
    if(name.trim().length !==0){
        const li = document.createElement("li");
        li.textContent = name;
        nameList.appendChild(li);
    }
    form.reset();
    
})
