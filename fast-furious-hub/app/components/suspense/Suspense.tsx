import { Suspense } from "react";
import Cards from "../card/Card"; 

export default function ServerComponent() {
  return (
    <Suspense fallback={<p>Carregando card...</p>}>
      <Cards
        src="/mazda.png"
        alt="Imagem da Mazda"
        title="Mazda RX-7"
        text="Um dos carros icônicos de Velozes e Furiosos."
      />
    </Suspense>
  );
}
