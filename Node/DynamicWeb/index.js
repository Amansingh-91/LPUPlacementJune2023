const btn =  document.querySelector("button");
const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    console.log("#" + randomColor);
  }


btn.addEventListener("click",e=>{
    setBg();
})