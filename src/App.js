import { useEffect, useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

const todoList = [
  {
    id: 1,
    text: "React ile todolist uygulaması",
    completed: false,
  },
  {
    id: new Date().getTime(),
    text: "uuid kullanımı",
    completed: false,
  },
];

function App() {
  const [todos,setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || todoList)

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  return (
    <div className="container">
      <Header setTodos={setTodos} todos={todos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
