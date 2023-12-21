import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TodoList from './Component/TodoList';
import Header from './Component/Header';
import Footer from './Component/Footer';
import About  from './Component/About';
import Home from './Component/Home';
import Board from './Component/Board';
import 'bootstrap/dist/css/bootstrap.min.css'; 




// 항상 대문자로 써야 됨
function  App (){
    return(
        <Router>
            <div style={{overflowY:'scroll', maxHeight:'850px'}}>
                <Header />
                <nav>
                    <ul>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/todo">할 일 목록</Link>
                        </li>
                        <li>
                            <Link to="/board">게시판</Link>
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

                    <Routes>

                    <Route path="/board" element={<Board/>}></Route>
                    </Routes>
                        <Footer/>
    
                
            </div>
        </Router>
    )
}

export default App;


