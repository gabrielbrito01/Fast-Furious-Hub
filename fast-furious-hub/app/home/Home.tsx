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
      </main>
    </div>
    );
}