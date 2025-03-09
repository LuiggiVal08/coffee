// interface Props {}

import { Avatar } from 'flowbite-react';

const Header = () => {
    return (
        <div className="w-full flex justify-between sticky top-0 z-50 bg-white dark:bg-dark-500 ">
            <div className="flex items-center gap-4 px-4 py-2">
                <img src="assets/images/logo.png" alt="logo" className="w-8 h-8" />
                <h1 className="text-2xl font-bold">Coffee</h1>
            </div>
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 px-4 py-2">
                    <Avatar img={''} rounded size="sm" color="success" />
                    <div className="text-text-tertiary">
                        <p className="text-sm font-medium">John Doe</p>
                        <p className="text-xs text-text-tertiary">john@example.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
