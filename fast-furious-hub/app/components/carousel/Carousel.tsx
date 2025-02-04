import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "../ui/carousel";
  
  export default function CarouselFilmes() {
    return (
      <Carousel className="w-full max-w-2xl mx-auto">
        <CarouselContent className="flex gap-4 p-2.5">
          <CarouselItem className="flex flex-col justify-center items-center text-center">
            <img className="w-64 h-96 rounded-lg shadow-lg" src="/velozes1.png" alt="Velozes e Furiosos 1 (2001)" />
            <p className="mt-2 text-lg font-semibold">Velozes e Furiosos 1 (2001)</p>
          </CarouselItem>
          <CarouselItem className="flex flex-col justify-center items-center text-center">
            <img className="w-64 h-96 rounded-lg shadow-lg" src="/velozes2.png" alt="+Velozes +Furiosos (2003)" />
            <p className="mt-2 text-lg font-semibold">+Velozes +Furiosos (2003)</p>
          </CarouselItem>
          <CarouselItem className="flex flex-col justify-center items-center text-center">
            <img className="w-64 h-96 rounded-lg shadow-lg" src="/velozes4.png" alt="Velozes e Furiosos 4 (2009)" />
            <p className="mt-2 text-lg font-semibold">Velozes e Furiosos 4 (2009)</p>
          </CarouselItem>
          <CarouselItem className="flex flex-col justify-center items-center text-center">
            <img className="w-64 h-96 rounded-lg shadow-lg" src="/velozes5.png" alt="Velozes e Furiosos 5: Operação Rio (2011)" />
            <p className="mt-2 text-lg font-semibold">Velozes e Furiosos 5: Operação Rio (2011)</p>
          </CarouselItem>
          <CarouselItem className="flex flex-col justify-center items-center text-center">
            <img className="w-64 h-96 rounded-lg shadow-lg" src="/velozes6.png" alt="Velozes e Furiosos 6 (2013)" />
            <p className="mt-2 text-lg font-semibold">Velozes e Furiosos 6 (2013)</p>
          </CarouselItem>
          <CarouselItem className="flex flex-col justify-center items-center text-center">
            <img className="w-64 h-96 rounded-lg shadow-lg" src="/velozes3.png" alt="Velozes e Furiosos: Desafio em Tóquio (2006)" />
            <p className="mt-2 text-lg font-semibold">Velozes e Furiosos: Desafio em Tóquio (2006)</p>
          </CarouselItem>
          <CarouselItem className="flex flex-col justify-center items-center text-center">
            <img className="w-64 h-96 rounded-lg shadow-lg" src="/velozes7.png" alt="Velozes e Furiosos 7 (2015)" />
            <p className="mt-2 text-lg font-semibold">Velozes e Furiosos 7 (2015)</p>
          </CarouselItem>
          <CarouselItem className="flex flex-col justify-center items-center text-center">
            <img className="w-64 h-96 rounded-lg shadow-lg" src="/velozes8.png" alt="Velozes e Furiosos 8 (2017)" />
            <p className="mt-2 text-lg font-semibold">Velozes e Furiosos 8 (2017)</p>
          </CarouselItem>
          <CarouselItem className="flex flex-col justify-center items-center text-center">
            <img className="w-64 h-96 rounded-lg shadow-lg" src="/hobbs.png" alt="Velozes e Furiosos: Hobbs & Shaw (2019)" />
            <p className="mt-2 text-lg font-semibold">Velozes e Furiosos: Hobbs & Shaw (2019)</p>
          </CarouselItem>
          <CarouselItem className="flex flex-col justify-center items-center text-center">
            <img className="w-64 h-96 rounded-lg shadow-lg" src="/velozes9.png" alt="Velozes e Furiosos 9 (2021)" />
            <p className="mt-2 text-lg font-semibold">Velozes e Furiosos 9 (2021)</p>
          </CarouselItem>
          <CarouselItem className="flex flex-col justify-center items-center text-center">
            <img className="w-64 h-96 rounded-lg shadow-lg" src="/velozes10.png" alt="Velozes e Furiosos 10 (2023)" />
            <p className="mt-2 text-lg font-semibold">Velozes e Furiosos 10 (2023)</p>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute left-0" />
        <CarouselNext className="absolute right-0" />
      </Carousel>
    );
  }
  