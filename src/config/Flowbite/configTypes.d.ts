import { ThemeProps } from 'flowbite-react';

interface FlowbiteConfigProps {
    children: React.ReactNode; // Cambiado a ReactNode para permitir cualquier tipo de hijo
    theme?: ThemeProps; // Tema opcional
}
