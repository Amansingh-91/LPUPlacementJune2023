import React,{useState,useRef,useEffect} from 'react'

const GeneratorForm = () => {
    const [passwordCons,setPasswordCons] = useState({
        length:5,
        lowercase:false,
        uppercase:false,
        number:false,
        symbol:false,
    });// rerender on every state change
    const lengthRef = useRef();

    const count = useRef(0);
    useEffect(()=>{
        console.log(count.current);
        count.current = count.current +1;
        
    });
    // const []

    const [pass,setPass] = useState("");

    function handleChange(e){
        // console.log(e.target.name);
        if(e.target.name === "length"){
            if(e.target.value <=5){
                setPasswordCons(prev=>{
                    return {...prev,[e.target.name]:5};
                });
            }
            else{
                setPasswordCons(prev=>{
                    return {...prev,[e.target.name]:e.target.value};
                });
            }
        }
        else{
            setPasswordCons(prev=>{
                // console.log(e.target.name,e.target.checked);
                // const newState = {...prev,[e.target.name]:e.target.checked};
                // console.log(newState);
                return  {...prev,[e.target.name]:e.target.checked};
            });
        }
        // console.log(passwordCons);
    }

    function genPassword(e) {
        e.preventDefault();
        const num = "0123456789";
        const lowercasechar ="abcdefghijklmnopqrstuvwxyz";
        const uppercasechar  = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const symbols = "!@#$%^&*()"
        var chars ="" ;
        const {lowercase,uppercase,number,symbol} = passwordCons;
        
        if(lowercase){
            chars += lowercasechar;
        }
        if(uppercase){
            chars += uppercasechar;
        }
        if(number){
            chars += num;
        }
        if(symbol){
            
            chars += symbols;
        }
        // console.log(chars);
        var passwordLength = passwordCons.length;
        var password = "";
     for (var i =1; i <= passwordLength; i++) {
       var randomNumber = Math.floor(Math.random() * chars.length);
       password += chars.substring(randomNumber, randomNumber +1);
      }
        //   console.log(password);
          setPass(password);  
     }

  return (
    <div className='generatorForm'>
        <input type="text" placeholder='Generated Password' value={pass} readOnly/>
        <input type="number"  placeholder='length of password' name ="length" onChange={handleChange}/>
        <label>
            inclue Numbers: <input type='checkbox' name ="number" onChange={handleChange} value={passwordCons.length} />
        </label>
        <label>
            inclue lowercase Letters: <input type='checkbox' name ="lowercase" onChange={handleChange} />
        </label>
        <label>
            inclue uppercase Letters: <input type='checkbox' name ="uppercase" onChange={handleChange} />
        </label>
        <label>
            inclue sybmols: <input type='checkbox' name ="symbol" onChange={handleChange}/>
        </label>
        <button onClick={genPassword}>Generate Password</button>

    </div>
  )
}

export default GeneratorForm