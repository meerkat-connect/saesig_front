import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './styles/main.scss';
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header';
import BottomBar from './components/BottomBar';
import Components from "./pages/Components";
import Adoption_record from "./pages/adoption_record";
import Login from "./pages/login";

const App = () => {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/components" element={<Components />} />
                    <Route path="/adoption_record" element={<Adoption_record />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
                <BottomBar />
            </div>
        </Router>
    );
}

export default App;