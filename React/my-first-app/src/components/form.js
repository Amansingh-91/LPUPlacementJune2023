import React, { useState } from 'react'

import { validator } from '../utils/FormValidation';
// unControlled component
// const Form = () => {
//    const handleSubmit = (e)=>{
//         e.preventDefault();
//         console.log(e.target[0].value);
//    }
//   return (
//     <div>
//         <form onSubmit={handleSubmit}>
//             <input placeholder='First name'></input>
//         </form>
//     </div>
//   )
// };

// controlled component 
const Form =()=>{
    const [formData,setFormData] = useState({
        fName:"",
        lName:"",
        email:"",
        
    });
    
    
    const handleInput =(e)=>{
        // console.log(e);
        
        const pvalue = e.target.value;
        setFormData((prev)=>{
            return {...prev, [e.target.name]: pvalue };
        });
        

    };
    const handleSubmit = e=>{
        e.preventDefault();
        console.log(formData);
        validator(formData);

        // setFName();
    }
    return (
            <div>
                <form onSubmit={handleSubmit}>
                    <input placeholder='First name' name="fName" onChange={handleInput} value={formData.fName}></input>
                    <input placeholder='Last name' name="lName" onChange={handleInput} value={formData.lName}></input>
                    <input type='email' name="email" value={formData.email} onChange={handleInput}></input>
                    <button type={'submit'}>submit</button>
                </form>
            </div>
          );
}

export default Form;