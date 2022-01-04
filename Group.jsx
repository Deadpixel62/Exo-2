import React, {useState} from 'react'
import Form from './form'
import Menu from './Menu'

const items = ["COFFEE", "EXPRESSO", "CAPUCCINO", "ICED"]

function Group() {
     const [value, setValue] = useState("");

     const handleSubmit = (e) => {
   
     setValue((value) => "");
           console.log(value);
       e.preventDefault();
        if(items.includes(value.toUpperCase())){
           
           alert(`Your order ${value} is ready!`);
             
        } 
        else{
return alert("your order doesn't exist")
        }
              

     };

     const handleChange = (e) => {
       setValue(e.target.value);
     };



    return (
        <div>
            <Form handleSubmit={handleSubmit} handleChange={handleChange} value={value}/>
            <Menu menu={items}/>
        </div>
    )
}

export default Group
