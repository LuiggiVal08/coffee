import { Button } from 'flowbite-react';
import Auth from './Auth';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [showAuthModal, setShowAuthModal] = useState(false);
    return (
        <div className="w-full flex flex-col gap-4  justify-center items-center h-[calc(100vh-8rem)]">
            {showAuthModal && <Auth isOpen={showAuthModal} setIsOpen={() => setShowAuthModal(!showAuthModal)} />}
            <div className="flex flex-col gap-4 w-full justify-center items-center">
                <div className="rounded-full overflow-hidden p-6 border-4 border-quaternary aspect-square flex justify-center items-center">
                    <img src="/image/logo_2.png" alt="logo" className="w-full max-w-28" />
                </div>
                <h1 className="text-2xl font-bold text-white">Bienvenido a Café 5.0</h1>
                <p className="text-lg text-white">Sistema de gestión de café para café amateur</p>
            </div>
            <div className="flex justify-center w-full items-center gap-4 py-4 ">
                <Button
                    type="button"
                    onClick={() => setShowAuthModal(true)}
                    className="font-medium bg-secondary hover:!bg-primary">
                    Iniciar Sessión
                </Button>
                <Button
                    to={'/sing-up'}
                    as={Link}
                    className="font-medium bg-transparent hover:!bg-secondary border-secondary border-2">
                    Crear Cuenta
                </Button>
            </div>
        </div>
    );
};

export default Home;
