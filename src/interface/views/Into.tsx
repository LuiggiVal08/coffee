import { Button, Card, HR, TextInput } from 'flowbite-react';
import { useForm } from 'react-hook-form';

const FormInto = () => {
    const { register, handleSubmit, formState, setValue } = useForm();
    const { errors, isValid } = formState;
    const onSubmit = handleSubmit((data) => {
        if (isValid) {
            console.log(data);
        }
    });
    return (
        <form onSubmit={onSubmit} className="flex flex-col gap-4">
            <div className="w-full bg-secondary min-h-10 flex items-center justify-between rounded-md px-4">
                <label
                    htmlFor="type"
                    className="before:w-4 before:h-4 before:bg-white before:block flex flex-row gap-4 items-center before:rounded-full rounded-full">
                    Tipo de Ingreso
                </label>
                <input
                    {...register('type', {
                        required: {
                            value: true,
                            message: 'El tipo de ingreso es requerido',
                        },
                    })}
                    id="type"
                    className="w-fit min-w-36 rounded-md border-[1px] !outline-none border-white h-8 p-4 bg-transparent text-white"></input>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 ">
                <div className="flex gap-4 flex-col">
                    <div className="w-full  min-h-10 flex flex-col items-start justify-between rounded-md px-4">
                        <label htmlFor="line" className="flex flex-row gap-4 pb-2 items-center rounded-full">
                            Linea
                        </label>
                        <input
                            {...register('line', {
                                required: {
                                    value: true,
                                    message: 'La linea es requerida',
                                },
                            })}
                            id="line"
                            className="w-full min-w-36 rounded-md border-[1px] !outline-none border-white h-8 p-4 bg-transparent text-white"></input>
                    </div>
                    <div className="flex flex-row gap-4">
                        <div className="w-full  min-h-10 flex flex-col items-start justify-between rounded-md px-4">
                            <label
                                htmlFor="number_tulas"
                                className="flex flex-row gap-4 pb-2 items-center rounded-full">
                                Numero de Tulas
                            </label>
                            <input
                                id="number_tulas"
                                className="w-full min-w-36 rounded-md border-[1px] !outline-none border-white h-8 p-4 bg-transparent text-white"></input>
                        </div>
                        <div className="w-full  min-h-10 flex flex-col items-start justify-between rounded-md px-4">
                            <label htmlFor="destares" className="flex flex-row gap-4 pb-2 items-center rounded-full">
                                Destares de Tulas
                            </label>
                            <input
                                id="type"
                                className="w-full min-w-36 rounded-md border-[1px] !outline-none border-white h-8 p-4 bg-transparent text-white"></input>
                        </div>
                    </div>
                    <div className="flex flex-row gap-4">
                        <div className="w-full  min-h-10 flex flex-col items-start justify-between rounded-md px-4">
                            <label
                                htmlFor="number_costales"
                                className="flex flex-row gap-4 pb-2 items-center rounded-full">
                                Numero de Costales
                            </label>
                            <input
                                id="number_costales"
                                {...register('number_costales', {
                                    required: {
                                        value: true,
                                        message: 'El numero de costales es requerido',
                                    },
                                })}
                                className="w-full min-w-36 rounded-md border-[1px] !outline-none border-white h-8 p-4 bg-transparent text-white"></input>
                        </div>
                        <div className="w-full  min-h-10 flex flex-col items-start justify-between rounded-md px-4">
                            <label
                                htmlFor="destares_costales"
                                className="flex flex-row gap-4 pb-2 items-center rounded-full">
                                Destares de Costales
                            </label>
                            <input
                                id="destares_costales"
                                {...register('destares_costales', {
                                    required: {
                                        value: true,
                                        message: 'El destare de costales es requerido',
                                    },
                                })}
                                className="w-full min-w-36 rounded-md border-[1px] !outline-none border-white h-8 p-4 bg-transparent text-white"></input>
                        </div>
                    </div>
                    <div className="w-full  min-h-10 flex flex-col items-start justify-between rounded-md px-4">
                        <label htmlFor="rbm" className="flex flex-row gap-4 pb-2 items-center rounded-full">
                            RBM
                        </label>
                        <input
                            {...register('rbm', {
                                required: {
                                    value: true,
                                    message: 'El RBM es requerido',
                                },
                            })}
                            id="rbm"
                            className="w-full min-w-36 rounded-md border-[1px] !outline-none border-white h-8 p-4 bg-transparent text-white"></input>
                    </div>
                </div>
                <div className="flex gap-4 flex-col">
                    <div className="w-full  min-h-10 flex flex-col items-start justify-between rounded-md px-4">
                        <label htmlFor="diversity" className="flex flex-row gap-4 pb-2 items-center rounded-full">
                            Variedad
                        </label>
                        <input
                            id="diversity"
                            {...register('diversity', {
                                required: {
                                    value: true,
                                    message: 'La variedad es requerida',
                                },
                            })}
                            className="w-full min-w-36 rounded-md border-[1px] !outline-none border-white h-8 p-4 bg-transparent text-white"></input>
                    </div>
                    <div className="w-full  min-h-10 flex flex-col items-start justify-between rounded-md px-4">
                        <label htmlFor="hours" className="flex flex-row gap-4 pb-2 items-center rounded-full">
                            Horas de Fermentación
                        </label>
                        <input
                            id="hours"
                            {...register('hours', {
                                required: {
                                    value: true,
                                    message: 'Las horas de fermentación son requeridas',
                                },
                            })}
                            className="w-full min-w-36 rounded-md border-[1px] !outline-none border-white h-8 p-4 bg-transparent text-white"></input>
                    </div>
                    <div className="w-full  min-h-10 flex flex-col items-start justify-between rounded-md px-4">
                        <label htmlFor="peso" className="flex flex-row gap-4 pb-2 items-center rounded-full">
                            Peso Bruto
                        </label>
                        <input
                            id="peso"
                            {...register('peso', {
                                required: {
                                    value: true,
                                    message: 'El peso bruto es requerido',
                                },
                            })}
                            className="w-full min-w-36 rounded-md border-[1px] !outline-none border-white h-8 p-4 bg-transparent text-white"></input>
                    </div>
                    <div className="w-full  min-h-10 flex flex-col items-start justify-between rounded-md px-4">
                        <label htmlFor="type_coffee" className="flex flex-row gap-4 pb-2 items-center rounded-full">
                            Tipo
                        </label>
                        <input
                            id="type_coffee"
                            {...register('type_coffee', {
                                required: {
                                    value: true,
                                    message: 'El tipo de café es requerido',
                                },
                            })}
                            className="w-full min-w-36 rounded-md border-[1px] !outline-none border-white h-8 p-4 bg-transparent text-white"></input>
                    </div>
                </div>
            </div>
            <Button type="submit" className="w-full bg-secondary hover:!bg-primary ">
                Guardar
            </Button>
        </form>
    );
};

const Into = () => {
    return (
        <div className="w-full flex flex-col gap-4 ">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <div className="flex flex-col min-h-16 justify-between">
                        <p className="text-white">Sombre de la Finca</p>
                        <span className="text-gray-200">Sin datos</span>
                    </div>
                </Card>
                <Card>
                    <div className="flex flex-col min-h-16 justify-between">
                        <p className="text-white">Cantidad</p>
                        <span className="text-gray-200">0 kg</span>
                    </div>
                </Card>
                <Card>
                    <div className="flex flex-col min-h-16 justify-between">
                        <p className="text-white">Sistema de Secado</p>
                        <span className="text-gray-200">Sin datos</span>
                    </div>
                </Card>
                <Card>
                    <div className="flex flex-col min-h-16 justify-between">
                        <p className="text-white">Tipo de Café</p>
                        <span className="text-gray-200">Café en Grano</span>
                    </div>
                </Card>
            </div>
            <Card>
                <h2 className="text-xl font-semibold text-white">Datos de Ingreso</h2>
                <HR className="mt-0" />
                <FormInto />
            </Card>
        </div>
    );
};

export default Into;
