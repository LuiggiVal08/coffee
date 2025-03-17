import { Route, Routes } from 'react-router-dom';
import Home from '../views/home';

const RoutesApp = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<h1>About</h1>} />
            <Route path="/contact" element={<h1>Contact</h1>} />
            <Route path="/login" element={<h1>Login</h1>} />
            <Route path="/register" element={<h1>Register</h1>} />
            <Route path="/*" element={<h1>404</h1>} />
            <Route path="*" element={<h1>404</h1>} />
        </Routes>
    );
};

export default RoutesApp;
