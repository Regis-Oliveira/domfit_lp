import Image from "next/image";
import Link from "next/link";
import background from "../../../assets/1280x893.jpg";
import supplementPill from "../../../assets/supplementPill.png";

export default function Hero() {
  return (
    <section className="bg-no-repeat bg-center bg-gradient-to-r from-slate-900 to-indigo-900
      pt-20 justify-start items-center flex flex-col"
    >
      <div className="max-w-6xl">
        <div className="flex flex-col justify-center items-center relative">
          <h1 className=" text-center text-white text-6xl font-bold font-sans">
            Max Pro
          </h1>
          <h2 className="text-center text-gray-300 text-3xl mt-4 font-sans">
            Suplemento natural para emagrecer
          </h2>
          {/* <Image
            alt="Beautiful background image with blue circles"
            src={background}
            priority
            width={600}
            height={600}
            className="bg-no-repeat bg-center bg-cover"
          />       */}
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Image
            alt="Beautiful background image with blue circles"
            src={supplementPill}
            priority
            width={800}
            height={800}
            className="align-middle justify-self-auto w-96"
          />
          <div className="items-center justify-between flex flex-col md:block px-3 
            pb-10"
          >
            <p className="text-gray-400 text-xl leading-relaxed p-3 mb-5 max-w-xl 
              font-sans sm:pr-6"
            >
              Um suplemento alimentar natural que vai te auxiliar na reeducação alimentar e inibir o apetite, auxiliando na ansiedade e saciedade, fazendo com que vc possa eliminar de 2 até 8 kilos por mês 😉💚✅ 
            </p>
            <Link href="/#" className="bg-green-700 py-3 px-10 text-xl text-white
              font-bold rounded-3xl hover:bg-green-800 transition-colors font-sans"
            >
              Comprar agora
            </Link>
          </div> 
        </div>
      </div>      
    </section>
  )
}