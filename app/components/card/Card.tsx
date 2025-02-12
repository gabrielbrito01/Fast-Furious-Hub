"use client";

import { Card, CardDescription, CardTitle } from "../ui/card";
import Image from "next/image";
import { useState } from "react";

interface Props {
  src: string;
  alt: string;
  title: string;
  text: string;
}

export default function Cards({ src, alt, title, text }: Props) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <>
      <Card className="p-4 shadow-lg">
        <div className="relative w-full h-64 cursor-pointer" onClick={() => setIsLightboxOpen(true)}>
          <Image 
            src={src} 
            alt={alt} 
            className="object-cover" 
            layout="fill" 
            objectFit="cover" 
            priority={true} 
          />
        </div>
        <CardTitle className="mt-4 flex items-center justify-center">{title}</CardTitle>
        <CardDescription className="p-5">{text}</CardDescription>
      </Card>

      {isLightboxOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-50 flex items-center justify-center"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div
            className="relative max-w-4xl w-auto mx-4 rounded-lg overflow-hidden"
            onClick={(event) => event.stopPropagation()} 
          >
            <Image
              src={src}
              alt={alt}
              width={1000}
              height={1000}
              objectFit="contain"
              quality={100}
            />
            <button
              className="absolute top-4 right-4 text-white text-3xl font-bold cursor-pointer"
              onClick={() => setIsLightboxOpen(false)}
              aria-label="Fechar lightbox"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
}
