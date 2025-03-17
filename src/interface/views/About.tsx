import { Card, HR } from 'flowbite-react';

const About = () => {
    return (
        <div>
            <Card className="w-fit min-w-72">
                <div className="p-4 ">
                    <h1 className="text-2xl font-semibold text-white">Acerca de</h1>
                    <HR className="my-4" />
                    <p className="text-white">Esta es una aplicación de ejemplo para el manejo de inventario de café</p>
                    <br />
                    <p className="text-white">
                        <img src="/image/images.jpg" alt="logo" className="float-right h-40 ml-4 rounded-md" />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus
                        tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam.
                        Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec
                        nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis
                        arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus
                        volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede.
                        Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante
                        ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac
                        mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.
                    </p>
                </div>
            </Card>
        </div>
    );
};

export default About;
