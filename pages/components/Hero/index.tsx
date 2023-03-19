import Image from "next/image";
import Link from "next/link";
import supplementPill from "../../../assets/supplementPill.png";

export default function Hero() {  
  return (
    <div className="bg-no-repeat bg-cover bg-center bg-hero-pattern">
      <section className="
        pt-14 justify-start items-center flex flex-col backdrop-blur-sm"
      >
        <div className="max-w-6xl">
          <div className="flex flex-col justify-center items-center relative mb-8">
            <h1 className=" text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-sky-600 text-6xl font-bold font-sans">
              Max Pro
            </h1>
            <h2 className="text-center text-gray-300 text-3xl font-semibold mt-4 font-sans">
              Suplemento natural para emagrecer
            </h2>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Image
              alt="Beautiful background image with blue circles"
              src={supplementPill}
              priority
              width={800}
              height={800}
              className="align-middle justify-self-auto w-96 filter hover:scale-110 
                ease-in-out duration-300 drop-shadow-[0_15px_35px_rgba(10,20,250,0.75)]"
            />
            <div className="items-center justify-between flex flex-col px-3 pb-10">
              <p className="text-gray-300 text-2xl leading-relaxed p-3 mb-3 max-w-xl 
                font-sans sm:pr-6"
              >
                Um suplemento alimentar natural que vai te auxiliar na reeducação alimentar e inibir o apetite, auxiliando na ansiedade e saciedade, fazendo com que vc possa eliminar de 2 até 8 kilos por mês 😉💚✅ 
              </p>
              <div className="flex justify-center items-center w-full pl-3 md:justify-start">
                <Link
                  target="_blank" 
                  href="https://domfitsuplem.lojavirtualnuvem.com.br/produtos/max-pro-suplemento-natural-para-emagrecer/" 
                  className="h-12 flex items-center hover:scale-105 ease-in-out duration-300 bg-green-700 
                    py-1 sm:py-3 px-10 text-lg text-white font-bold rounded-2xl hover:bg-green-800 font-sans transition-all"
                >
                  Comprar agora
                </Link>
              </div>
            </div> 
          </div>
        </div>      
      </section>
    </div>
  )
}