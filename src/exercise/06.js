// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {

  const inputUsername = React.useRef(null);
  const [error, setError] = React.useState(null);
  const [disabled, setDisabled] = React.useState(false);

  function handleSubmit(event){
    event.preventDefault();
    const username = inputUsername.current.value
    onSubmitUsername(username);
  };

  function handleChange(event){
    const currentValue = event.target.value;
    const isValid = currentValue === currentValue.toLowerCase();
    setError(isValid ? null : 'Username must be lower case');
    setDisabled(isValid ? false : true);
  }
 
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='usernameInput'>Username:</label>
        <input 
          ref={inputUsername} 
          id='usernameInput' 
          type="text"
          onChange={handleChange}/>
      </div>
      <div role='alert'>{error}</div>
      <button type="submit" disabled={disabled}>Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
