import { Avatar, Card } from 'flowbite-react';

const Profile = () => {
    return (
        <div className="content-center mx-auto w-fit">
            <Card className="w-fit min-w-72">
                <div className="p-4 ">
                    <Avatar img={''} rounded size="xl" color="success" className="mx-auto" />
                    <div className="text-white text-start pt-4">
                        <p className="text-xl font-medium text-center">John Doe</p>

                        <p className="text-sm text-gray-200">Usuario: john</p>
                        <p className="text-sm text-gray-200">Correo: john@example.com</p>
                        <p className="text-sm text-gray-200">Teléfono: +56 987654321</p>
                        <p className="text-sm text-gray-200">Dirección: Sabanita, Boconó</p>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default Profile;
