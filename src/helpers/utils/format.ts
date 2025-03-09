export class Format {
    static regExp = {
        name: /^[A-Za-zÁÉÍÓÚÑáéíóúñ\s]{3,}$/,
        dni: /^[\d\s]{6,13}$/,
        username: /^[A-Za-z0-9_.-]{4,16}$/,
        email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})|(([a-zA-Z0-9.-]+\.)+[a-zA-Z]{2,}))$/,
        token: /^[a-zA-Z0-9_-]{10}$/,
        date: /^\d{4}[-/]\d{2}[-/]\d{2}$/,
        password: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d_.-]{8,}$/,
        phone: /^\+58 \(\d{3}\) \d{3}-\d{4}$/,
        text: /^[A-Za-z0-9ÁÉÍÓÚÑáéíóúñ\s.,!?¡¿()\-_$%#@+:;'"*~`|<>]{1,}$/,
        montoBs: /^(?:Bs\. )?\d{1,3}(?:[.,]\d{3})*(?:[.,]\d{1,2})?$/,
        number: /^[0-9]+$/,
    };

    static phone = (value: string): string => {
        let num = value.replace(/\D/g, '');
        if (num.length === 0) return '';
        if (!num.startsWith('58')) num = '58' + num;
        if (num.startsWith('580')) num = '58' + num.slice(3);
        num = num.substring(0, 12);
        if (num.length > 2 && num.length <= 6) return `+58 (${num.substring(2)}`;
        else if (num.length >= 7 && num.length <= 9) return `+58 (${num.substring(2, 5)}) ${num.substring(5)}`;
        else if (num.length > 9) return `+58 (${num.substring(2, 5)}) ${num.substring(5, 8)}-${num.substring(8)}`;

        return `+58`;
    };

    static name = (value: string): string => {
        return value
            .replace(/[^\p{L}\s]/gu, '')
            .replace(/\d+/g, ' ')
            .replace(/\s+/g, ' ');
    };

    static text = (value: string): string => {
        return value
            .replace(/[^A-Za-z0-9ÁÉÍÓÚÑáéíóúñ\s.,!?¡¿()\-_$%#@+:;'"*~`|<>]/g, '')
            .replace(/<[^>]*>/g, '')
            .replace(/'/g, '')
            .replace(/"/g, '');
    };

    static email = (value: string) => {
        return value.replace(/[^a-zA-Z0-9@._-]/g, '');
    };

    static username = (value: string) => {
        return value.replace(/[^A-Za-z0-9_.-]/g, '');
    };

    static password = (value: string) => {
        return value.replace(/[^A-Za-z0-9_.-]/g, '');
    };

    static number = (value: string) => {
        if (value === undefined || value === null || value === '') {
            return ''; // Devolver una cadena vacía en lugar de undefined
        }
        value = value
            .replace(/[^0-9]/g, '')
            .replace(/\s+/g, '')
            .trim();
        if (value === '') return '';
        const valueReturn = parseFloat(value);
        return valueReturn;
    };

    static token = (value: string) => {
        return value.replace(/[^a-zA-Z0-9_.@-]/g, '');
    };

    static dni = (value: string): string => {
        const cleanedValue = value.replace(/[^\d]/g, '');
        if (!cleanedValue) return '';
        const reversedValue = cleanedValue.split('').reverse().join('');
        const formattedValue = reversedValue.match(/.{1,3}/g)?.join(' ') || '';
        return formattedValue.split('').reverse().join('');
    };

    static date = (value: string) => {
        return value.replace(/[^0-9/-]/g, '');
    };
    static montoBs = (monto: string) => {
        // var cleanValue = value.replace(/[^\d,]/g, '');

        // var parts = cleanValue.split(',');

        // // Formatear parte entera con espacio como separador de miles
        // parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');

        // var formattedValue = parts.join(',');

        // Devuelve el monto formateado
        return monto;
    };
}
