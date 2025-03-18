import { Card } from 'flowbite-react';

const Users = () => {
    return (
        <Card>
            <div className="w-full ">
                <h4 className="text-white font-semibold">Gestión de Usuarios</h4>
            </div>

            <div className="overflow-x-auto w-full flex flex-col gap-4 mt-4">
                <table>
                    <thead>
                        <tr className="bg-secondary text-white">
                            <th className="p-2 text-left">Nombre</th>
                            <th className="p-2 text-center">Correo</th>
                            <th className="p-2 text-center">Rol</th>
                            <th className="p-2 text-center">Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-quaternary">
                        <tr className="text-white hover:bg-[#7b5f4d81] cursor-pointer">
                            <td className="p-2 text-left">Juan Peréz</td>
                            <td className="p-2 text-center">juanexample@gmail.com</td>
                            <td className="p-2 text-center">Administrador</td>
                            <td align="center" className="p-2 ">
                                <div className="flex flex-row gap-2 items-center w-fit">
                                    <button className="bg-secondary text-white p-1 rounded">Editar</button>
                                    <button className="bg-red-500 text-white p-1 rounded">Eliminar</button>
                                </div>
                            </td>
                        </tr>
                        <tr className="text-white hover:bg-[#7b5f4d81] cursor-pointer">
                            <td className="p-2 text-left">Luis Peréz</td>
                            <td className="p-2 text-center">luisxample@gmail.com</td>
                            <td className="p-2 text-center">Usuario</td>
                            <td align="center" className="p-2 ">
                                <div className="flex flex-row gap-2 items-center w-fit">
                                    <button className="bg-secondary text-white p-1 rounded">Editar</button>
                                    <button className="bg-red-500 text-white p-1 rounded">Eliminar</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Card>
    );
};

export default Users;
