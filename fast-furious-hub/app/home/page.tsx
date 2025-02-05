import Cards from "../components/card/Card";
import { Suspense } from "react";
import content from "@/public/data/texto.json"; 

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <title>{content.title}</title>
      <meta name="description" content={content.description} />

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          {content.tituloDois}
        </h1>
        <p className="text-lg text-center text-gray-600 mb-8">
          {content.subtitulo}
        </p>

        <Suspense fallback={<p className="text-center text-gray-500">{content.fallbackText}</p>}>
          <div className="flex gap-5">
            <Cards
              src={content.card1.src}
              alt={content.card1.alt}
              title={content.card1.title}
              text={content.card1.text}
            />
            <Cards
              src={content.card2.src}
              alt={content.card2.alt}
              title={content.card2.title}
              text={content.card2.text}
            />
            <Cards
              src={content.card3.src}
              alt={content.card3.alt}
              title={content.card3.title}
              text={content.card3.text}
            />
          </div>
        </Suspense>
      </main>
    </div>
  );
}
