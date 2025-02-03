import { Card, CardDescription, CardTitle } from "../ui/card";
import Image from "next/image";


interface Props {
  src : string;
  alt : string;
  title : string;
  text : string;
  
}


export default function Cards({src , alt , title , text}: Props){
  return (
    <Card className="p-4 shadow-lg">
      <div className="row-1 w-100 h-100 justify-center">
        <Image src={src}  alt={alt} className="object-cover" width={500} height={500} />
        <CardTitle className="mt-4 flex items-center justify-center">{title}</CardTitle>
      <CardDescription className="p-5">{text}</CardDescription>
      </div>
    </Card>
  );
}