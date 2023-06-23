

const lengthValidator =(data, desiredLen)=>{
    // console.log(data.length);
    if(data.length >= desiredLen){
        return true;
    }
    return false;
}

const isEmpty = (data)=>{
    if(data.length >0){
        return false;
    }
    else{
        return true;
    }
}

const validator = (formData)=>{
    for(let field in formData){
        console.log(field);
        if(isEmpty(formData[field])){
            alert(`${field} can't be empty. please provide the value`)
        }
    }
}
export {validator};
