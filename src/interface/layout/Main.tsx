interface Props {
    children: React.ReactNode | React.ReactNode[];
}
const Main = ({ children }: Props) => {
    return <div className="h-[100vh] overflow-auto bg-white scrollbar  dark:bg-primary w-full">{children}</div>;
};

export default Main;
