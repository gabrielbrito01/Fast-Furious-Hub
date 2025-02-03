import Cards from "../components/card/Card";
import MenuLink from "../components/menuLink/MenuLink";

export default function Home() {
    return(
        <div className="bg-gray-100 min-h-screen flex flex-col">
        <title>Velozes e Furiosos</title>
        <meta name="description" content="O mundo de Velozes e Furiosos" />


      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Velozes e Furiosos</h1>
        <p className="text-lg text-center text-gray-600 mb-8">
          Explore os filmes da saga Velozes e Furiosos!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        </div>
        <div className="flex gap-5">
        <Cards src="/dogge.png" alt = "" title="Dodge Charger R/T 1970" text="Um dos carros mais icônicos da franquia, o Dodge Charger de 1970 pertence a Dominic Toretto. Com um motor superalimentado e um design imponente, ele representa a força e a velocidade extrema nas corridas de rua."/>
        <Cards src="/skyline.png" alt = "" title="Nissan GTR Skyline R34" text="O lendário Nissan Skyline R34 é o carro favorito de Brian O'Conner. Com sua performance incrível e modificações para corridas, esse modelo azul se tornou um dos mais amados pelos fãs da saga e do automobilismo."/>
        <Cards src="/mazda.png" alt = "" title="Mazda RX-7" text="Dirigido por Han Lue, o Mazda RX-7 é um esportivo japonês com um motor rotativo único e um design aerodinâmico impressionante. Seu estilo arrojado e pintura marcante fazem dele um destaque em qualquer corrida de drift."/>
        </div>
      </main>
    </div>
    );
}