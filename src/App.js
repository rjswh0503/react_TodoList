import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TodoList from './Component/TodoList';
import Header from './Component/Header';
import Footer from './Component/Footer';
import About  from './Component/About';
import Home from './Component/Home';



// 항상 대문자로 써야 됨
function  App (){
    return(
        <Router>
            <div>
                <Header />
                <nav>
                    <ul>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/todo">할 일 목록</Link>
                        </li>
                    </ul>
                </nav>
                <hr />
                <Routes>

                    <Route path="/todo" element={<TodoList/>}></Route>
                </Routes>
                <Routes>

                    <Route path="/home" element={<Home/>}></Route>
                    </Routes>
                <Footer/>
            </div>
        </Router>
    )
}

export default App;


