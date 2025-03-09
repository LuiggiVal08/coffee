interface Props {
    children: React.ReactNode | React.ReactNode[];
}
const Main = ({ children }: Props) => {
    return (
        <div className="h-[calc(100vh-51px)] overflow-auto bg-white scrollbar sm:p-5 sm:py-0 pb-2 dark:bg-primary">
            {children}
        </div>
    );
};

export default Main;
