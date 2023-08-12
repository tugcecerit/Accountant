import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'
import Contact from '../pages/Contact'

const Main = () => {
    return (
        <Router>
            <main className="flex-grow">
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/hakkimizda" element={<About />} />
                    <Route path="/hizmetlerimiz" element={<Services />} />
                    <Route path="/iletisim" element={<Contact />} />
                </Routes>
            </main>
        </Router>
    )
}

export default Main;

