import React,{useState} from 'react';
import Axios from 'axios';

function PostForm(props) {
  const [data, setData] = useState({
    name: "",
    lastName: "",
    birthdate: "",
    ci: ""
  })
  return (
    <div>
      <form>
        <input placeholder='name' type='text'></input>
        <input placeholder='lastName' type='text'></input>
        <input placeholder='birthdate' type='date'></input>
        <input placeholder='ci' type='text'></input>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default PostForm;