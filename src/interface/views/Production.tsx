import { Card } from 'flowbite-react';

const Production = () => {
    return (
        <div className="flex flex-col gap-4">
            <Card>
                <div className="w-full ">
                    <h4 className="text-white font-semibold">Tipo de Producción</h4>
                </div>
            </Card>
            <Card>
                <div className="w-full ">
                    <h4 className="text-white font-semibold">Total en Producción</h4>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 mt-4">
                    <div className="rounded-md bg-secondary min-h-14 p-4 flex justify-center items-center flex-col text-white">
                        <p className="text-center">Total Item</p>
                        <span>0</span>
                    </div>
                    <div className="rounded-md bg-secondary min-h-14 p-4 flex justify-center items-center flex-col text-white">
                        <p className="text-center">Total Tiempo</p>
                        <span>1 hora</span>
                    </div>
                    <div className="rounded-md bg-secondary min-h-14 p-4 flex justify-center items-center flex-col text-white">
                        <p className="text-center">Pérdida Total</p>
                        <span>$0</span>
                    </div>
                    <div className="rounded-md bg-secondary min-h-14 p-4 flex justify-center items-center flex-col text-white">
                        <p className="text-center">Lotes Activos</p>
                        <span>0</span>
                    </div>
                </div>
                <div className="overflow-x-auto w-full flex flex-col gap-4 mt-4">
                    <table>
                        <thead>
                            <tr className="bg-secondary text-white">
                                <th className="p-2 text-left">Prducción</th>
                                <th className="p-2 text-center">Id Lote</th>
                                <th className="p-2 text-center">Fecha</th>
                                <th className="p-2 text-center">Temperatura</th>
                                <th className="p-2 text-center">Perdida de Peso</th>
                                <th className="p-2 text-center">Tiempo</th>
                                <th className="p-2 text-center">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-quaternary">
                            <tr className="text-white hover:bg-[#7b5f4d81] cursor-pointer">
                                <td className="p-2 text-left">Café en Grano</td>
                                <td className="p-2 text-center">001</td>
                                <td className="p-2 text-center">00/00/0000</td>
                                <td className="p-2 text-center">--</td>
                                <td className="p-2 text-center">--</td>
                                <td className="p-2 text-center">1 hora</td>
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
        </div>
    );
};

export default Production;
