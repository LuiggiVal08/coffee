// interface Props {}

import { Avatar, Dropdown } from 'flowbite-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Auth from './components/Auth';

const Header = () => {
    const [session, setSession] = useState(false);
    const [showAuthModal, setShowAuthModal] = useState(false);
    return (
        <div className="w-full flex justify-between sticky top-0 z-50 bg-secondary dark:bg-dark-500 shadow-sm text-white">
            {showAuthModal && <Auth isOpen={showAuthModal} setIsOpen={() => setShowAuthModal(!showAuthModal)} />}
            <div className="flex items-center gap-4 px-4 py-2">
                <img src="/image/logo.png" alt="logo" className="h-10" />
            </div>
            <div className="flex items-center gap-4">
                {session ? (
                    <Dropdown
                        inline={true}
                        arrowIcon={false}
                        label={
                            <div className="flex items-center gap-2 px-4 py-2">
                                <Avatar img={''} rounded size="sm" color="success" />
                                <div className="text-text-tertiary text-start">
                                    <p className="text-sm font-medium">John Doe</p>
                                    <p className="text-xs text-text-tertiary">john@example.com</p>
                                </div>
                            </div>
                        }>
                        <Dropdown.Item to={'/'} as={Link}>
                            Profile
                        </Dropdown.Item>
                        <Dropdown.Item to={'/'} as={Link}>
                            Config
                        </Dropdown.Item>
                        <Dropdown.Item to={'/'} as={Link}>
                            Log Out
                        </Dropdown.Item>
                    </Dropdown>
                ) : (
                    <button
                        onClick={() => setShowAuthModal(true)}
                        className="px-4 py-2 text-sm text-white bg-success-100 rounded-md hover:bg-success-200 dark:bg-success-200 dark:hover:bg-success-300">
                        Iniciar Sesión
                    </button>
                )}
            </div>
        </div>
    );
};

export default Header;
