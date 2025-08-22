import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Header from "./Mycomponents/Header";
import Footer from "./Mycomponents/Footer";
import Todos from "./Mycomponents/Todos";
import AddTodo from "./Mycomponents/Addtodos";
import About from "./Mycomponents/About";

function App() {
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to market",
      desc: "You need to go to the market to get this job done",
    },
    {
      sno: 2,
      title: "Go to school",
      desc: "You need to go to the school to get this job done",
    },
    {
      sno: 3,
      title: "Go to office",
      desc: "You need to go to the office to get this job done",
    },
  ]);

  // Delete Todo
  const onDelete = (todo) => {
    setTodos(todos.filter((e) => e !== todo));
  };

  // Add Todo
  const addTodo = (title, desc) => {
    const sno = todos.length > 0 ? todos[todos.length - 1].sno + 1 : 1;
    const myTodo = {
      sno,
      title,
      desc,
    };
    setTodos([...todos, myTodo]);
  };

  return (
    <Router>
      <div className="app"> 
        <Header title="My Todo List" searchbar={false} />

      <main className="container my-3">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <Footer />
      </div>
    </Router>
  );
}

export default App;
