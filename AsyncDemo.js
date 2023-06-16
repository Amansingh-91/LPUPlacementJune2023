// const helpDesk =()=>{
//     console.log("how may I help you");
// }
// const personJoined =()=>{
//     for(let i =0 ;i< 1000;i++){
//         console.log(" hii") ;
//     }
//     console.log("all person joined");
// }

// helpDesk();
// helpDesk();
// personJoined();
// helpDesk()
// helpDesk();


// console.log("async function demo");
// helpDesk();
// helpDesk();
// // asyncronous nature
//     setTimeout(()=>{
//         console.log("I am non Blockiong");
//     },3000);
// helpDesk()
// helpDesk();

// network request

// console.log("hello");
// const xhr = new XMLHttpRequest();
// console.log("UNSENT", xhr.readyState); // readyState will be 0
// console.log("hello");
// xhr.addEventListener("readystatechange",e=>{
//     // console.log(e);
//     if(e.target.readyState === 4 && e.target.status === 200 ){
//         console.log(e.target.responseText);
//     }
//     else{
//         console.log("error occured");
//     }
// });
// console.log("hello");
// xhr.open("GET", "https://jsonplaceholder.typicode.com/todo", true);



// xhr.send();


// promise => it will take some time to do
const mypromise = new Promise((response,reject)=>{
    const resultOfExam ="A";
    if(resultOfExam === "A"){
        response({prize:"Going to have chocolate IceCream",Grade:"A"});//on success
    }
    else if(resultOfExam === "B"){
        response("Going to have butterScotch IceCream");//on success
    }
    if(resultOfExam === "C"){
        response("Going to have vanilla IceCream");//on success
    }

    else{
        reject("No iceCream");// when some error or failed to keap the promise
    }
    
});

mypromise.then((value)=>{
    console.log(value);
}).catch(err=>{
    console.log(err);
})

// Fetch Api




// fetch("https://jsonplaceholder.typicode.com/todo").then(res=>{
//     return res.json();
    
// }).then(data=>{
//     console.log(data);
// })
// .catch(err=>{
//     console.log(err);
// });

// async await

const getData = async ()=>{
    const res= await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json(); 
    console.log(data);
}


getData();
