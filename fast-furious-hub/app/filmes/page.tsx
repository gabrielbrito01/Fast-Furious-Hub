import CarouselFilmes from "../components/carousel/Carousel";

export default function OrdemFilmes() {
    return (
        <div className="flex flex-col items-center justify-center p-20 bg-gray-100">
            <h1 className="text-4xl font-extrabold text-red-600 mb-4 shadow-md">
                Ordem dos Filmes
            </h1>
            <p className="text-lg text-gray-700 text-center mb-8 max-w-2xl">
                Aqui você encontra a ordem cronológica da franquia Velozes & Furiosos!
            </p>
            <CarouselFilmes />
            <div className="mt-4">
                <a href="/mais" className="bg-red-600 text-white py-2 px-6 rounded-lg hover:bg-red-700 transition duration-300 p-20">
                    Ver Mais Filmes
                </a>
            </div>
        </div>
    );
}