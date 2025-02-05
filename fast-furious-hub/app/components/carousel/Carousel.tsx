import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Imagens from "../imagens/ImagemOtimizada";
import velozes1 from "@/assets/velozes1.png";
import velozes2 from "@/assets/velozes2.png";
import velozes3 from "@/assets/velozes3.png";
import velozes4 from "@/assets/velozes4.png";
import velozes5 from "@/assets/velozes5.png";
import velozes6 from "@/assets/velozes6.png";
import velozes7 from "@/assets/velozes7.png";
import velozes8 from "@/assets/velozes8.png";
import hobbs from "@/assets/hobbs.png";
import velozes9 from "@/assets/velozes9.png";
import velozes10 from "@/assets/velozes10.png";

export default function CarouselFilmes() {
  return (
    <Carousel className="w-full max-w-2xl mx-auto">
      <CarouselContent className="flex gap-4 p-2.5">
        <CarouselItem className="flex flex-col justify-center items-center text-center">
          <Imagens alt="velozes1" src={velozes1} />
          <p className="mt-2 text-lg font-semibold">
            Velozes e Furiosos 1 (2001)
          </p>
        </CarouselItem>
        <CarouselItem className="flex flex-col justify-center items-center text-center">
          <Imagens alt="velozes2" src={velozes2} />
          <p className="mt-2 text-lg font-semibold">
            +Velozes +Furiosos (2003)
          </p>
        </CarouselItem>
        <CarouselItem className="flex flex-col justify-center items-center text-center">
          <Imagens alt="velozes4" src={velozes4} />
          <p className="mt-2 text-lg font-semibold">
            Velozes e Furiosos 4 (2009)
          </p>
        </CarouselItem>
        <CarouselItem className="flex flex-col justify-center items-center text-center">
          <Imagens alt="velozes5" src={velozes5} />
          <p className="mt-2 text-lg font-semibold">
            Velozes e Furiosos 5: Operação Rio (2011)
          </p>
        </CarouselItem>
        <CarouselItem className="flex flex-col justify-center items-center text-center">
          <Imagens alt="velozes6" src={velozes6} />
          <p className="mt-2 text-lg font-semibold">
            Velozes e Furiosos 6 (2013)
          </p>
        </CarouselItem>
        <CarouselItem className="flex flex-col justify-center items-center text-center">
          <Imagens alt="velozes3" src={velozes3} />
          <p className="mt-2 text-lg font-semibold">
            Velozes e Furiosos: Desafio em Tóquio (2006)
          </p>
        </CarouselItem>
        <CarouselItem className="flex flex-col justify-center items-center text-center">
          <Imagens alt="velozes7" src={velozes7} />
          <p className="mt-2 text-lg font-semibold">
            Velozes e Furiosos 7 (2015)
          </p>
        </CarouselItem>
        <CarouselItem className="flex flex-col justify-center items-center text-center">
          <Imagens alt="velozes8" src={velozes8} />
          <p className="mt-2 text-lg font-semibold">
            Velozes e Furiosos 8 (2017)
          </p>
        </CarouselItem>
        <CarouselItem className="flex flex-col justify-center items-center text-center">
          <Imagens alt="hobbs" src={hobbs} />
          <p className="mt-2 text-lg font-semibold">
            Velozes e Furiosos: Hobbs & Shaw (2019)
          </p>
        </CarouselItem>
        <CarouselItem className="flex flex-col justify-center items-center text-center">
          <Imagens alt="velozes9" src={velozes9} />
          <p className="mt-2 text-lg font-semibold">
            Velozes e Furiosos 9 (2021)
          </p>
        </CarouselItem>
        <CarouselItem className="flex flex-col justify-center items-center text-center">
          <Imagens alt="velozes10" src={velozes10} />
          <p className="mt-2 text-lg font-semibold">
            Velozes e Furiosos 10 (2023)
          </p>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="absolute left-0" />
      <CarouselNext className="absolute right-0" />
    </Carousel>
  );
}
