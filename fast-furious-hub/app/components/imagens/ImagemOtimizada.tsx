import Image, { StaticImageData } from "next/image";

interface ImageProps {
  alt: string;
  caption?: string;
  src : string | StaticImageData;
}

export default function Imagens({...ImageProps}: ImageProps) {
  return (

          <Image
              src={ImageProps.src}
              alt={ImageProps.alt}
              width={250}
              height={250}
              objectFit="cover"
              quality={100}
              className="object-center"
              aria-describedby="caption"
            />
  );
}
