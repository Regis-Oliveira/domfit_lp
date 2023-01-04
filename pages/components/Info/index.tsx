import { RocketLaunchIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Info() {
  return (
    <section className="p-4 bg-gradient-to-r from-slate-800 to-indigo-800">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center text-white text-3xl p-6 font-sans">
          Suplemento inteligente
        </h1>
        <div className="max-w-[1440px] flex flex-col justify-center items-center">
          <h2 className="text-gray-400 text-lg w-1/2 text-center leading-relaxed font-sans">
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
          <h4 className="text-gray-300 font-semibold text-lg font-sans">
            Número de clientes impactados
          </h4>
        </div>
        <div className="flex justify-center pb-7">
          <Link href="/#" className="bg-green-700 py-2 px-10 text-lg text-white
            font-bold rounded-2xl hover:bg-green-800 transition-colors font-sans"
          >
            Comprar agora
          </Link>
        </div>
      </div>
    </section>
  )
}