import React, {useState} from 'react';
// import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [name, setName] = useState('');
  const [alias, setAlias] = useState('');

  const handleInputChange = (e) => {
    const {id , value} = e.target;
    if(id === 'name'){
        setName(value);
    }
    if(id === 'alias'){
        setAlias(value);
    }
}
const handleSubmit  = () => {
  var hero = {'name': name, 'alias': alias}
  const response = fetch('http://localhost:8000/heroes/', {  
      method: 'POST', 
      headers: {'Content-Type': 'application/json',},
      body: JSON.stringify(hero) 
    }).then(() => {
      console.log(hero);
    })
    
  }

  return (
    <div>
      Name
      <input  type='text' id='name' onChange = {(e) => handleInputChange(e)}/>
      Alias
      <input  type='text' id='alias' onChange = {(e) => handleInputChange(e)}/>
      <button onClick={()=>handleSubmit()} type='submit'>Submit</button>
    </div>              
  );
}

export default CreatePost;

