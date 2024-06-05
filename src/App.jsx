import { useState } from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Home from "./pages/Home";
import About from "./pages/About";
import Notfound from "./pages/Notfound";

function App() {

  const [isRefresh, setIsRefresh] = useState(true)

  const setRefresh = (status) => {
    setIsRefresh(status)
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="App">
            <Home/>
            <div className="content">
              <Header setRefresh={setRefresh} />
              <TodoList setRefresh={setRefresh} isRefresh={isRefresh} />
            </div>
          </div>
        }/>
        <Route path="/about" element={<About/>}/>
        <Route path="*" element={<Notfound/>}/>
      </Routes>
    </Router>
  );
}

export default App;