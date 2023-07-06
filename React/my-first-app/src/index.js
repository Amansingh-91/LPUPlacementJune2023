import React from "react";
import ReactDOM  from "react-dom/client";

import {BrowserRouter} from 'react-router-dom';
import App from "./App";

import store from "./store";
import {Provider} from "react-redux";

//external css
import "./index.css" ;

// components are special function 
// component name always are in capital 
// and always return JSX => syntax is similar to html

const root = ReactDOM.createRoot(document.getElementById("root"));


// first component
// const Greeting = ()=>{
  
//     return (
//           // <React.Fragment>
//           //   <h1>Hello Friends</h1>
//           //   <h1>I am aman</h1>
//           // </React.Fragment>
//           <div>
//             <h1>Hello Friends</h1>
//             <h1>I am aman</h1>
//           </div>
//       );
// };
// Jsx Rule
// jsx should return single element . no parallel elements are allowed as return 
// That all the html elements should be closed
// insted of class we use className property to add classes to html element
// we user lowercamaelcase format to write css properties 
// for eg. font-size => fontSize 


// Amazon best seller book



// nested component

// props or properties / parameters 

root.render(
        <Provider store={store}>
          <App/>      
        </Provider>
           
);
