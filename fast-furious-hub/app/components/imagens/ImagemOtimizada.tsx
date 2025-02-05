import Image from "next/image";
import sw2 from "@/assets/sw2.png";

interface ImageProps {
  alt: string;
  caption?: string;
}

interface ImagensProps {
  images: ImageProps[];
}

export default function Imagens({ images }: ImagensProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {images.map((image, index) => (
        <div key={index} className="relative w-full h-64">
          <Image
              src={sw2}
              alt="Sw"
              width={500}
              height={500}
              layout="responsive"
              objectFit="cover"
              quality={75}
              className="object-center"
              aria-describedby="caption"
            />
          {image.caption && (
            <p className="text-center mt-2 text-sm text-gray-600">
              {image.caption}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
