import Image, { StaticImageData } from "next/image";

interface ImageProps {
  alt: string;
  caption?: string;
  src: string | StaticImageData;
}

export default function Imagens({ src, alt, caption }: ImageProps) {
  return (
    <>
      <Image
        src={src} 
        alt={alt} 
        width={250} 
        height={250} 
        objectFit="cover" 
        quality={100} 
        className="object-center"
        aria-describedby="caption"
      />
      {caption && <figcaption>{caption}</figcaption>}
    </>
  );
}
