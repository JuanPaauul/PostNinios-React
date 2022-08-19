yimport React from 'react';
import Axios from 'axios';

function PostForm(props) {
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