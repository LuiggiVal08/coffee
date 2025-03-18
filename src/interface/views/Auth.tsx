import { Button, Modal, TextInput } from 'flowbite-react';
import { useForm } from 'react-hook-form';
import { Format } from '../../helpers/utils/format';

const Auth = ({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: () => void }) => {
    const { register, handleSubmit, formState, setValue } = useForm();
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
                    <div className="flex flex-col ">
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
                                onChange: (e) => {
                                    const valueFormat = Format.email(e.target.value);
                                    setValue('email', valueFormat, { shouldValidate: true });
                                },
                                pattern: {
                                    value: Format.regExp.email,
                                    message: 'Formato de email incorrecto',
                                },
                            })}
                            color="gray"
                            placeholder="Email"
                            type="email"
                        />
                        {errors.email && <span className="text-red-500">{errors.email.message?.toString()}</span>}
                    </div>

                    <div className="flex flex-col ">
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
                                onChange: (e) => {
                                    const valueFormat = Format.password(e.target.value);
                                    setValue('password', valueFormat, { shouldValidate: true });
                                },
                                pattern: {
                                    value: Format.regExp.password,
                                    message: 'Formato de contraseña incorrecto',
                                },
                            })}
                            color="gray"
                            placeholder="Contraseña"
                            type="password"
                        />
                        {errors.password && errors.password.message && (
                            <span className="text-red-500">{errors.password.message?.toString()}</span>
                        )}
                    </div>

                    <Button type="submit" className="w-full bg-secondary hover:!bg-primary">
                        Iniciar Sesión
                    </Button>
                </form>
            </Modal.Body>
        </Modal>
    );
};

export default Auth;
