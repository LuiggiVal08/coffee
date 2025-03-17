// manolo?
import Aside from './Aside';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';

interface Props {
    children: React.ReactNode | React.ReactNode[];
}
const Layout = ({ children }: Props) => {
    return (
        <>
            <div className="scrollbar flex flex-row w-full">
                <Aside />
                <Main>
                    <Header />
                    <main
                        className="min-h-[calc(100vh-90px)] bg-fixed relative
                    bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,#d1c5b8,#9e724e)] p-3 ">
                        {children}
                    </main>
                    <Footer />
                </Main>
            </div>
        </>
    );
};

export default Layout;
