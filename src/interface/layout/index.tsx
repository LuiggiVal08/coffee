// manolo?
import Footer from './footer';
import Header from './header';
import Main from './Main';

interface Props {
    children: React.ReactNode | React.ReactNode[];
}
const Layout = ({ children }: Props) => {
    return (
        <>
            <Header />
            <div className="scrollbar">
                <Main>
                    <main className="min-h-[calc(100vh-90px)] md:min-h-[calc(100vh-155px)] bg-fixed relative dark:bg-[radial-gradient(ellipse_90%_95%_at_50%_-20%,rgba(120,119,198,0.2),rgba(255,255,255,0))] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] sm:rounded-lg p-3 ">
                        {children}
                    </main>
                </Main>
                <Footer />
            </div>
        </>
    );
};

export default Layout;
