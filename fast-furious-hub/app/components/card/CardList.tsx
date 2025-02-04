import { Card, CardDescription, CardTitle } from "../ui/card";
import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  title: string;
  text: string;
  text1?: string;
  text2?: string;
  text3?: string;
}

export default function CardList({
  src,
  alt,
  title,
  text,
  text1,
  text2,
  text3,
}: Props) {
  return (
    <Card className="p-4 shadow-lg">
      <div className="row-1 w-100 h-100 justify-center">
        <Image
          src={src}
          alt={alt}
          className="object-cover"
          width={500}
          height={500}
        />
        <CardTitle className="mt-4 flex items-center justify-center">
          {title}
        </CardTitle>
        <CardDescription className="p-5">
          <ul className="space-y-3 pl-5 text-gray-700">
            <li className="text-sm p-3 rounded-lg border border-gray-300 bg-white shadow-md hover:bg-blue-100 hover:shadow-xl transition-colors duration-300">
              {text}
            </li>
            <li className="text-sm p-3 rounded-lg border border-gray-300 bg-white shadow-md hover:bg-blue-100 hover:shadow-xl transition-colors duration-300">
              {text1}
            </li>
            <li className="text-sm p-3 rounded-lg border border-gray-300 bg-white shadow-md hover:bg-blue-100 hover:shadow-xl transition-colors duration-300">
              {text2}
            </li>
            <li className="text-sm p-3 rounded-lg border border-gray-300 bg-white shadow-md hover:bg-blue-100 hover:shadow-xl transition-colors duration-300">
              {text3}
            </li>
          </ul>
        </CardDescription>
      </div>
    </Card>
  );
}
