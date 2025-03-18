// interface Props {}

import { Avatar, Dropdown } from 'flowbite-react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="w-full flex justify-between sticky top-0 z-50 bg-secondary dark:bg-dark-500 shadow-sm text-white">
            <div className="flex items-center gap-4 px-4 py-2">
                <img src="/image/logo.png" alt="logo" className="h-10" />
            </div>
            <div className="flex items-center gap-2">
                <Link to={'/'} className="px-4 py-2 text-sm text-white hover:text-success-100 dark:text-white">
                    Inicio
                </Link>
                <Link to={'/about'} className="px-4 py-2 text-sm text-white hover:text-success-100 dark:text-white">
                    Acerca de
                </Link>
                <Link to={'/dashboard'} className="px-4 py-2 text-sm text-white hover:text-success-100 dark:text-white">
                    Dashboard
                </Link>
                <Link to={'/into'} className="px-4 py-2 text-sm text-white hover:text-success-100 dark:text-white">
                    Ingreso
                </Link>
                <Link
                    to={'/raw-material'}
                    className="px-4 py-2 text-sm text-white hover:text-success-100 dark:text-white">
                    Materia Prima
                </Link>
                <Link
                    to={'/production'}
                    className="px-4 py-2 text-sm text-white hover:text-success-100 dark:text-white">
                    Producción
                </Link>

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
                    <Dropdown.Item to={'/profile'} as={Link}>
                        Profile
                    </Dropdown.Item>
                    <Dropdown.Item to={'/'} as={Link}>
                        Config
                    </Dropdown.Item>
                    <Dropdown.Item to={'/'} as={Link}>
                        Log Out
                    </Dropdown.Item>
                </Dropdown>
            </div>
        </div>
    );
};

export default Header;
