// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {

  const inputUsername = React.useRef(null);
  //const [error, setError] = React.useState(null);
  //const [disabled, setDisabled] = React.useState(false);
  const [username, setUsername] = React.useState('');
  
  function handleSubmit(event){
    event.preventDefault();
    const username = inputUsername.current.value
    onSubmitUsername(username);
  };

  function handleChange(event){
    const currentValue = event.target.value;
    setUsername(currentValue.toLowerCase());
  }
 
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='usernameInput'>Username:</label>
        <input 
          ref={inputUsername} 
          id='usernameInput' 
          type="text"
          onChange={handleChange}
          value={username}/>
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
