import { Route, Routes } from 'react-router-dom';
import Home from '../views/Home';
import Profile from '../views/Profile';
import About from '../views/About';
import Into from '../views/Into';
import SingUp from '../views/SingUp';
import Dashboard from '../views/Dashboard';
import RawMaterial from '../views/RawMaterial';
import Production from '../views/Production';

const RoutesApp = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/into" element={<Into />} />
            <Route path="/sing-up" element={<SingUp />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/raw-material" element={<RawMaterial />} />
            <Route path="/production" element={<Production />} />

            <Route path="/*" element={<h1>404</h1>} />
            <Route path="*" element={<h1>404</h1>} />
        </Routes>
    );
};

export default RoutesApp;
