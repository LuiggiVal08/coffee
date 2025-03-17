import { Button, Modal, TextInput } from 'flowbite-react';
import { useForm } from 'react-hook-form';

const Auth = ({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: () => void }) => {
    const { register, handleSubmit, formState } = useForm();
    const { errors, isValid } = formState;
    const onSubmit = handleSubmit((data) => {
        if (isValid) {
            console.log(data);
        }
    });

    return (
        <Modal show={isOpen} onClose={() => setIsOpen()} size="lg" dismissible>
            <Modal.Header>Iniciar Sesión</Modal.Header>
            <Modal.Body>
                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                    <TextInput
                        {...register('email', {
                            required: {
                                value: true,
                                message: 'El email es requerido',
                            },
                            minLength: {
                                value: 5,
                                message: 'El email debe tener al menos 5 caracteres',
                            },
                        })}
                        color="gray"
                        placeholder="Email"
                        type="email"
                    />
                    {errors.email && <span className="text-red-500">{errors.email.message?.toString()}</span>}

                    <TextInput
                        {...register('password', {
                            required: {
                                value: true,
                                message: 'La contraseña es requerida',
                            },
                            minLength: {
                                value: 8,
                                message: 'La contraseña debe tener al menos 8 caracteres',
                            },
                        })}
                        color="gray"
                        placeholder="Contraseña"
                        type="password"
                    />

                    {errors.password && errors.password.message && (
                        <span className="text-red-500">{errors.password.message?.toString()}</span>
                    )}

                    <Button type="submit" color="blue" className="w-full">
                        Iniciar Sesión
                    </Button>
                </form>
            </Modal.Body>
        </Modal>
    );
};

export default Auth;
