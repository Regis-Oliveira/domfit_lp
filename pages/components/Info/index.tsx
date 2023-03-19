import Link from "next/link";
import Image from "next/image";
import { RocketLaunchIcon } from "@heroicons/react/24/solid";

import imageWhyChoose from "../../../assets/maxProWhyChoose.jpg";
import imageComposition from "../../../assets/maxProComposition.jpg";

export default function Info() {
  return (
    <section className="p-4">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-sky-600 font-bold text-4xl p-6 font-sans">
          Suplemento inteligente
        </h1>
        <div className="mb-5">
          <Image 
            src={imageWhyChoose}
            width={500}
            height={500}
            priority
            className="rounded-xl border border-fuchsia-900" 
            alt="Image showing why choose max pro" 
          />
        </div>
        <div className="max-w-[1440px] flex flex-col justify-center items-center">
          <h2 className="text-gray-300 text-2xl w-1/2 text-center leading-relaxed font-sans">
            Suplemento com alta taxa de sucesso, atingindo resultados incríveis surpreendendo o público, mudando vidas e trazendo novamente a confiança para as pessoas, transformando seus corpos e chegando aos resultados desejados.  
          </h2>
        </div>
      </div>
      <div>
        <div className="flex flex-col items-center justify-center pb-6">
          <div className="flex items-center justify-center pt-7 pb-2">
            <RocketLaunchIcon className="h-10 w-10 text-green-700" /> 
            <h3 className="text-green-700 font-semibold text-5xl font-sans pr-1">
              + 1000
            </h3>
          </div>
          <h4 className="text-gray-300 font-semibold text-2xl font-sans">
            Número de clientes impactados
          </h4>
        </div>
        <div className="flex justify-center pb-7">
          <Link
            target="_blank"
            href="https://domfitsuplem.lojavirtualnuvem.com.br/produtos/max-pro-suplemento-natural-para-emagrecer/" 
            className="h-14 flex items-center bg-green-700 py-2 px-10 text-2xl text-white
              font-bold rounded-2xl hover:bg-green-800 font-sans 
              hover:scale-105 ease-in-out duration-300 transition-all"
          >
            Comprar agora
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center">
          {/* <h2 className="text-[#05c8cb] 
            text-center font-bold text-4xl mb-5 mt-4"
          >
            Composição
          </h2> */}
          <Image 
            src={imageComposition}
            width={600}
            height={600}
            priority
            className="rounded-xl mt-6 border border-fuchsia-900" 
            alt="Image showing why choose max pro" 
          />
        </div>
      </div>
    </section>
  )
}