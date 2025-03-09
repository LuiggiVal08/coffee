import { Flowbite, ThemeProps } from 'flowbite-react';
import { FlowbiteConfigProps } from './configTypes';

export const FlowbiteConfig: React.FC<FlowbiteConfigProps> = ({ children, theme }) => {
    // Tema por defecto
    const defaultTheme: ThemeProps = {
        theme: {
            card: {
                root: {
                    base: 'flex rounded-lg border border-gray-300 bg-white dark:bg-primary shadow-md dark:border-gray-700 ',
                    children: 'h-full  py-4 px-2 sm:px-4',
                },
            },
            button: {
                color: {
                    blue: 'border border-transparent bg-tertiary-100 text-white focus:ring-4 focus:ring-blue-300 enabled:hover:bg-blue-500  dark:hover:bg-blue-500 dark:focus:ring-blue-800',
                },
            },
            avatar: {
                root: {
                    base: 'flex items-center rounded gap-2 flex items-center justify-around  rounded flex-wrap w-fit ',
                    img: {
                        base: ' w-full min-h-full object-cover  top-0',
                    },
                },
            },
            dropdown: {
                floating: {
                    style: {
                        auto: 'bg-white dark:bg-primary dark:text-text-primary py-2  border border-gray-200 dark:border-gray-700',
                    },
                    item: {
                        base: 'bg-white dark:bg-primary min-w-[250px] flex w-full gap-4 cursor-pointer items-center justify-start px-4 py-4 text-sm text-text-primary hover:bg-primary dark:hover:bg-secondary hover:text-tertiary-100 duration-300 hover:border-l-4 border-tertiary-100',
                    },
                    header: 'bg-white dark:bg-primary block px-4 py-2 text-sm text-gray-700 dark:text-gray-200',
                    base: 'z-50 w-fit divide-y divide-gray-100 rounded shadow focus:outline-none',
                    arrow: {
                        base: 'z-50 w-fit divide-y divide-gray-100 rounded shadow focus:outline-none',
                    },
                },
            },
            badge: {
                root: {
                    color: {
                        success:
                            'bg-success-100 text-green-800 group-hover:bg-green-200 dark:bg-success-200 dark:text-green-900 dark:group-hover:bg-green-300',
                    },
                },
            },
            tabs: {
                tablist: {
                    tabitem: {
                        variant: {
                            default: {
                                active: {
                                    on: 'bg-gray-100 text-tertiary-100 dark:bg-gray-800 ',
                                    // off
                                },
                            },
                        },
                    },
                },
            },
            navbar: {
                root: {
                    base: 'bg-white px-2 py-2.5 dark:border-gray-700 dark:bg-primary sm:px-4',
                },
                link: {
                    base: 'block md:pt-2 py-2 inline-block pl-3 md:pb-2 pr-4  border-b-[2px] border-transparent duration-300',
                    active: {
                        on: 'text-tertiary-100 md:hover:pb-0 hover:border-b-[2px] border-tertiary-100',
                        off: 'text-text-tertiary md:pb-2 md:hover:pb-0  hover:border-tertiary-100',
                    },
                },
            },
            footer: {
                root: {
                    base: 'w-full rounded-lg bg-white dark:bg-primary md:flex md:items-center md:justify-between',
                },
            },
            hr: {
                icon: {
                    hrLine: 'mx-auto my-4 h-1 w-60 rounded border-0 bg-tertiary-100  md:my-6',

                    icon: {
                        base: 'absolute left-1/2 -translate-x-1/2 bg-secondary px-4 dark:bg-primary',
                        icon: 'h-4 w-4 text-text-secondary dark:text-gray-300',
                    },
                },
                trimmed: {
                    base: 'mx-auto my-4 h-1 w-48 rounded border-0 bg-tertiary-100  md:my-6',
                },
            },
            modal: {
                root: {
                    base: 'fixed inset-x-0 top-0 bg-red-100 z-50 mt-[33px] h-[calc(100vh-33px)] md:h-[calc(100vh-33px)] overflow-hidden md:inset-0 scrollbar min-h-fit',

                    show: {
                        on: ' flex bg-opaco backdrop-blur-sm ',
                        off: 'hidden',
                    },
                },
                content: {
                    base: 'px-4 w-full ',
                    inner: ' border border-gray-200 dark:border-gray-700 relative max-h-[calc(100vh-33px)] md:max-h-[calc(100vh-33px)] overflow-y-auto scrollbar shadow rounded-lg bg-white dark:bg-primary',
                },
                body: {
                    base: 'flex-1 overflow-auto p-6 scrollbar',
                },
            },
        },
        // Agrega el resto de los componentes como en tu configuración original...
    };

    const mergedTheme = {
        ...defaultTheme,
        ...theme, // Sobrescribe solo las propiedades que se pasen
    };

    return <Flowbite theme={mergedTheme}>{children}</Flowbite>;
};
