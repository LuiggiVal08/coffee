import { Route, Routes } from 'react-router-dom';
import Home from '../views/home';
import Profile from '../views/Profile';
import About from '../views/About';

const RoutesApp = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/*" element={<h1>404</h1>} />
            <Route path="*" element={<h1>404</h1>} />
        </Routes>
    );
};

export default RoutesApp;
