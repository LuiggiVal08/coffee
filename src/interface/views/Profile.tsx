import { Avatar, Card } from 'flowbite-react';

const Profile = () => {
    return (
        <div className="content-center mx-auto w-fit">
            <Card className="w-fit min-w-72">
                <div className="p-4 ">
                    <Avatar img={''} rounded size="xl" color="success" className="mx-auto" />
                    <div className="text-text-tertiary text-start pt-4">
                        <p className="text-xl font-medium text-center">John Doe</p>

                        <p className="text-sm text-text-tertiary">Usuario: john</p>
                        <p className="text-sm text-text-tertiary">Correo: john@example.com</p>
                        <p className="text-sm text-text-tertiary">Teléfono: +56 987654321</p>
                        <p className="text-sm text-text-tertiary">Dirección: Sabanita, Boconó</p>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default Profile;
