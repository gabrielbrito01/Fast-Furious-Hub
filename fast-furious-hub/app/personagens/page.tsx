import Card from "../components/card/Card";
import Image from "next/image";
import CardList from "../components/card/CardList";

interface Props {
    src: string;
    alt: string;
    title: string;
    text: string;
    text1?: string;
    text2?: string;
    text3?: string;
}

export default function Personagens() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5 bg-gray-100 min-h-screen">
            <CardList 
                src="/dogge.png" 
                alt="Dominic Toretto"
                title="Dominic Toretto"
                text="Dodge Charger R/T 1970."
                text1="Chevrolet Chevelle SS 1970."
                text2="Não importa se você ganha por um centímetro ou um quilômetro. Vencer é vencer."
                text3="Levo a minha vida 1 Km de cada vez, nada mais importa, durante aqueles 10 segundos ou menos eu sou livre!"
            />
            <CardList 
                src="/skyline.png" 
                alt="Brian O'Conner"
                title="Brian O'Conner"
                text="Carros: Nissan Skyline R34, Toyota Supra MK4."
                text1="'Eu vivo minha vida um quarto de milha de cada vez.'"
                text2="Eu vivo 1/4 de milha de cada vez, e não existe outra maneira melhor."
                text3="Cada corrida, cada aceleração, é a minha vida."
            />
            <CardList 
                src="/mazda.png" 
                alt="Han Lue"
                title="Han Lue"
                text="Carros: Mazda RX-7, Nissan Silvia S15."
                text1="'A vida é simples. Você faz escolhas e não olha para trás.'"
                text2="Não sou de planejar o futuro, apenas vivo o presente."
                text3="Tudo é sobre fazer as escolhas certas no momento certo."
            />
            <CardList 
                src="/evo.png" 
                alt="Sean Boswell"
                title="Sean Boswell"
                text="Carros: Mitsubishi Lancer Evolution IX, Ford Mustang Fastback."
                text1="'Você realmente acha que pode sair dirigindo assim sem consequências?'"
                text2="Eu sou mais do que só velocidade, estou aprendendo o que realmente importa."
                text3="Minha vida mudou com cada curva, e vou fazer dela a melhor."
            />
            <CardList 
                src="/doggec.png" 
                alt="Letty Ortiz"
                title="Letty Ortiz"
                text="Carros: Dodge Challenger SRT8, Plymouth Barracuda."
                text1="'Corridas não são só sobre velocidade. É sobre respeito.'"
                text2="Eu dou meu melhor, não apenas nas corridas, mas em cada aspecto da minha vida."
                text3="A vitória é só uma parte do que realmente importa."
            />
            <CardList 
                src="/honda.png" 
                alt="Mia Toretto"
                title="Mia Toretto"
                text="Carros: Acura Integra Type R, Honda NSX."
                text1="'A família sempre vem em primeiro lugar.'"
                text2="A verdadeira força não vem de carros ou corridas, mas da minha família."
                text3="Estou aqui para garantir que todos nós fiquemos juntos, aconteça o que acontecer."
            />
            <CardList 
                src="/bmw.png" 
                alt="Roman Pearce"
                title="Roman Pearce"
                text="Carros: Mitsubishi Eclipse Spyder, BMW M5."
                text1="'Cara, eu sou o entretenimento.'"
                text2="A diversão é a chave de tudo. É a minha maneira de ver o mundo."
                text3="Não levo a vida muito a sério, mas sempre com um sorriso no rosto."
            />
            <CardList 
                src="/acura.png" 
                alt="Tej Parker"
                title="Tej Parker"
                text="Carros: Jeep Wrangler Rubicon, Acura NSX."
                text1="'O dinheiro sempre precisa de um cérebro para gastá-lo direito.'"
                text2="Você tem que ser inteligente no jogo, ou o jogo vai te engolir."
                text3="Com as ferramentas certas e um plano bem pensado, qualquer coisa é possível."
            />
        </div>
    );
}
