import { Card, TextInput } from 'flowbite-react';

const Home = () => {
    return (
        <div className="w-full flex flex-col gap-4 ">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
            <Card>
                <div className="flex gap-4 items-center justify-between">
                    <h1 className="text-2xl font-semibold text-white">Proveedores</h1>
                    <input
                        className="min-w-72 rounded-md border-[1px] border-white h-10 p-4 bg-transparent text-white placeholder:text-white outline-none"
                        placeholder="Buscar Proveedor"
                    />
                </div>
                <div className="w-full overflow-x-auto flex py-4">
                    <table className="w-full text-white">
                        <thead>
                            <tr className="bg-secondary">
                                <th className="p-2" align="left">
                                    Nombre
                                </th>
                                <th className="p-2" align="center">
                                    Dirección
                                </th>
                                <th className="p-2" align="center">
                                    Teléfono
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-quaternary">
                            <tr className="hover:bg-secondary cursor-pointer">
                                <td className="p-2"> XYZ</td>
                                <td className="p-2" align="center">
                                    Sabanita, Boconó
                                </td>
                                <td className="p-2" align="center">
                                    +56 987654321
                                </td>
                            </tr>

                            <tr className="hover:bg-secondary cursor-pointer">
                                <td className="p-2"> ABC</td>
                                <td className="p-2" align="center">
                                    Sabanita, Boconó
                                </td>
                                <td className="p-2" align="center">
                                    +56 987654321
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Card>
        </div>
    );
};

export default Home;
