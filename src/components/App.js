import React from 'react'
import '../styles/App.css';
const App =() => {

  const submitButton=()=>{
    console.log("form submitted");
  }

  return (
    <div id="main">
      <form>
        <label htmlFor='name'>Name</label>
        <input id="name" type={"text"} />

        <br />
        <br />
        <button type='submit' onclick={submitButton}>Submit</button>
      </form>
    </div>
  )
}


export default App;
