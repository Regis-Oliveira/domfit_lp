import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import supplementPill from "../../../assets/supplementPill-640x800.png";

export default function Hero() {  
  return (
    <div className="bg-no-repeat bg-cover bg-center bg-hero-pattern">
      <section className="
        pt-14 justify-start items-center flex flex-col backdrop-blur-0"
      >
        <div className="max-w-6xl">
          <div className="flex flex-col justify-center items-center relative sm:gap-5">
            <h1 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-sky-600 text-6xl font-bold font-sans">
              Max Pro
            </h1>
            <h2 className="text-center text-gray-300 text-3xl font-semibold mt-4 font-sans">
              Suplemento natural para emagrecer
            </h2>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              animate={{
                scale: [0.6, 0.9, 0.7],
                rotate: [0, 0, -5],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
              }}
              whileTap={{ scale: 0.75 }}
            >
              <Image
                alt="Beautiful image of MaxPro Suplem"
                src={supplementPill}
                priority
                width={600}
                height={600}
                className="align-middle justify-self-auto w-[38rem] drop-shadow-[0_15px_35px_rgba(10,20,250,0.75)] border border-purple-500"
              />
            </motion.div>
            <div className="items-center justify-between flex flex-col px-3 pb-10">
              <p className="text-gray-300 text-2xl leading-relaxed p-3 mb-3 max-w-xl 
                font-sans sm:pr-6"
              >
                Um suplemento alimentar natural que vai te auxiliar na reeducação alimentar e inibir o apetite, auxiliando na ansiedade e saciedade, fazendo com que vc possa eliminar de 2 até 8 kilos por mês 😉💚✅ 
              </p>
              <div className="flex justify-center items-center w-full pl-3 md:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link
                  target="_blank" 
                  href="https://domfitsuplem.lojavirtualnuvem.com.br/produtos/max-pro-suplemento-natural-para-emagrecer/" 
                  className="h-14 flex items-center bg-gradient-to-r from-green-400 to-sky-600 text-2xl text-white font-bold 
                    py-1 sm:py-3 px-10 rounded-2xl hover:bg-gradient-to-r hover:from-green-500 hover:to-sky-700 font-sans transition-all"
                >
                  Comprar agora
                </Link>
              </motion.button>
              </div>
            </div> 
          </div>
        </div>      
      </section>
    </div>
  )
}