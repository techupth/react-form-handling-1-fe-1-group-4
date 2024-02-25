import "./App.css";
import { useState } from "react";

function App() {
  const [inputMessage, setInputMessage] = useState("");
  const [greetingMessage, setGreetingMessage] = useState("Greeting Message");

  const handleSubmit = (event) => {
    event.preventDefault();
    setGreetingMessage(inputMessage);
  }
  
  return (
    <div className="App">
      <div className="greeting-container">{greetingMessage}</div>
      <div className="input-container">
        <form onSubmit={handleSubmit}>
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input id="greeting-message" 
        type="text" 
        value={inputMessage}
        onChange={(event) => {
          setInputMessage(event.target.value);
        }}/>
      
      <div className="buttons">
        <button type="submit">Update text</button>
      </div>
      </form>
      </div>
    </div>
  );
}

export default App;
