// import './App.css';
// import ToDo from "./Widget";

// function App() {

//   const todos = ["Do HW", "Bake Cookies", "Shower"];

//   return (
//     <div className="App">
//       <ul>
//         {todos.map(todo => <ToDo text={todo} />)}
//       </ul>
//     </div>
//   );
// }

// export default App;
import React, { useState, useEffect } from "react";
import Todo from "./Widget";
import './App.css';

function App() {

const [todos, setTodos] = useState([]);
const [input, setInput] = useState("");

const updateInput = (e) => {
  setInput(e.target.value);
}

const addTodo = () => {
  if(input !== "") {
    const updatedTodo = [...todos, input];
    setTodos(updatedTodo);
    setInput("");
  }
}

  return (
    // <div style={{textAlign: "center"}}>
    //   <Widget text="Web Impact is awesome!"/>
    // </div>
    <div className = "App">
      <label htmlFor="newTodo">Enter new todo item:</label>
      <input type="text" id="newTodo" value={input} onChange={updateInput}></input>
      <button onClick={addTodo}>Enter</button>

      <ul>
        {todos.map((todo, index) => <Todo text={todo} />)}
      </ul>
    </div>
  );
}

export default App;

