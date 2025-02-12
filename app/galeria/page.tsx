import { Card } from "../components/ui/card";
import Image from "next/image";

const carrosEvolucao = [
  {
    titulo: "Dodge Charger",
    antesSrc: "/doggeAntes.png",
    depoisSrc: "/doggeD.png",
    descricao: "Evolução do icônico Dodge Charger."
  },
  {
    titulo: "Toyota Supra",
    antesSrc: "/supraA.png",
    depoisSrc: "/supraD.png",
    descricao: "Evolução do lendário Toyota Supra."
  }
];

const corridasIconicas = [
  {
    titulo: "Corrida de Los Angeles",
    local: "Los Angeles, Califórnia",
    src: "/corridaDom.png",
    alt: "Corrida em Los Angeles",
    descricao: "Corrida lendária entre Brian e Dom pelas ruas da cidade."
  },
  {
    titulo: "Drag Race Miami",
    local: "Miami, Flórida",
    src: "/corridaMiami.png",
    alt: "Corrida em Miami",
    descricao: "Corrida de apostas altas em um cenário icônico na Flórida."
  }
];

export default function Galeria() {
  return (
    <div className="p-8 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-8">Galeria de Imagens</h1>

      <h2 className="text-2xl font-bold mt-6">Evolução dos Carros</h2>
      <div className="grid md:grid-cols-2 gap-6 p-4">
        {carrosEvolucao.map((carro, index) => (
          <Card key={index} className="p-4 shadow-xl rounded-2xl bg-white">
            <h3 className="text-center font-bold text-lg">{carro.titulo}</h3>
            <div className="flex justify-center space-x-4 mt-4">
              <Image
                src={carro.antesSrc}
                alt={`${carro.titulo} Antes`}
                width={250}
                height={250}
                className="rounded-2xl"
              />
              <Image
                src={carro.depoisSrc}
                alt={`${carro.titulo} Depois`}
                width={250}
                height={250}
                className="rounded-2xl"
              />
            </div>
            <p className="p-5 text-center text-gray-600">{carro.descricao}</p>
          </Card>
        ))}
      </div>

      <h2 className="text-2xl font-bold mt-8">Corridas Icônicas</h2>
      <div className="grid md:grid-cols-2 gap-6 p-4">
        {corridasIconicas.map((corrida, index) => (
          <Card key={index} className="p-4 shadow-xl rounded-2xl bg-white">
            <Image
              src={corrida.src}
              alt={corrida.alt}
              width={500}
              height={250}
              className="rounded-lg w-full h-1/2 object-cover"
            />
            <h3 className="mt-4 text-center font-bold text-lg">{corrida.titulo}</h3>
            <p className="text-center text-gray-600">{corrida.local}</p>
            <p className="p-5 text-center text-gray-600">{corrida.descricao}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
