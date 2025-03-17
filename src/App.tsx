import { Card } from 'flowbite-react';
import Layout from './interface/layout';
import { BrowserRouter } from 'react-router-dom';
import RoutesApp from './interface/routes';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <RoutesApp />
            </Layout>
        </BrowserRouter>
    );
};

export default App;
