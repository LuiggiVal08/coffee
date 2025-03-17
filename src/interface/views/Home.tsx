import { Card } from 'flowbite-react';

const Home = () => {
    return (
        <div className="w-full flex flex-col gap-4 ">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
            <Card></Card>
        </div>
    );
};

export default Home;
