import { Card } from 'flowbite-react';

const Dashboard = () => {
    return (
        <div className="container mx-auto flex flex-col gap-4 ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card>
                    <div className="min-h-24 flex justify-between flex-col">
                        <div className="w-full ">
                            <h4 className="text-white font-semibold">Materia Prima</h4>
                        </div>
                        <div className="">
                            <p className="text-2xl text-white font-bold">120kg</p>
                            <span className="text-sm text-gray-200">Granos de CAfé en Stock</span>
                        </div>
                    </div>
                </Card>
                <Card>
                    <div className="min-h-24 flex justify-between flex-col">
                        <div className="w-full ">
                            <h4 className="text-white font-semibold">Productos Terminados</h4>
                        </div>
                        <div className="">
                            <p className="text-2xl text-white font-bold">300</p>
                            <span className="text-sm text-gray-200">Paquetes Listos</span>
                        </div>
                    </div>
                </Card>
                <Card>
                    <div className="w-full ">
                        <h4 className="text-white font-semibold">Alertas</h4>
                    </div>
                    <div className=""></div>
                </Card>
            </div>
            <Card>
                <div className="w-full ">
                    <h4 className="text-white font-semibold">Producción Mensual</h4>
                </div>
            </Card>
        </div>
    );
};

export default Dashboard;
