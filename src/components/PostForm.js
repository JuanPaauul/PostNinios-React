import React,{useState} from 'react';
import Axios from 'axios';

function PostForm(props) {
  const [data, setData] = useState({
    name: "",
    lastName: "",
    birthdate: "",
    ci: ""
  })
  function handle(e){
    const newData = {...data}
    newData[e.target.id] = e.target.value
    setData(newData)
    console.log(newData)
  }
  function submit(e){
    
  }
  return (
    <div>
      <form onSubmit={(e)=> submit(e)}>
        <input onChange={(e)=>handle(e)} id="name" value={data.name} placeholder='name' type='text'></input>
        <input onChange={(e)=>handle(e)} id="lastName" value={data.lastName} placeholder='lastName' type='text'></input>
        <input onChange={(e)=>handle(e)} id="birthName" value={data.birthdate} placeholder='birthdate' type='date'></input>
        <input onChange={(e)=>handle(e)} id="ci" value={data.ci} placeholder='ci' type='text'></input>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default PostForm;