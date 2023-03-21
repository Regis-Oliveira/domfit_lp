import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { RocketLaunchIcon } from "@heroicons/react/24/solid";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";

import imageWhyChoose from "../../../assets/maxProWhyChoose.jpg";
import imageComposition from "../../../assets/maxProComposition.jpg";

export default function Info() {
  const count = useMotionValue(70);
  const rounded = useTransform(count, latest => Math.round(latest))

  useEffect(() => {
    const controls = animate(count, 873, { duration: 30 });

    return controls.stop;
  }, [count]);

  return (
    <section className="p-4">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-sky-600 font-bold text-4xl p-6 font-sans">
          Suplemento inteligente
        </h1>
        <div className="mb-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 4 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Image 
              src={imageWhyChoose}
              width={500}
              height={500}
              priority
              className="rounded-xl border border-[rgb(5,200,203)]" 
              alt="Image showing why choose max pro" 
            />
          </motion.div>
        </div>
        <div className="max-w-[1440px] flex flex-col justify-center items-center">
          <h2 className="text-gray-300 text-2xl w-[80%] sm:w-1/2 text-center leading-relaxed font-sans">
            Suplemento com alta taxa de sucesso, atingindo resultados incríveis surpreendendo o público, mudando vidas e trazendo novamente a confiança para as pessoas, transformando seus corpos e chegando aos resultados desejados.  
          </h2>
        </div>
      </div>
      <div>
        <div className="flex flex-col items-center justify-center pb-6">
          <div className="flex items-center justify-center pt-7 pb-2">
            <RocketLaunchIcon className="h-12 w-12 bg-gradient-to-r from-green-400 to-sky-600 rounded-md mr-1" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-sky-600 font-semibold text-5xl">+</span>
            <motion.h3 className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-sky-600 font-semibold text-5xl font-sans pl-1">
              {rounded}
            </motion.h3>
          </div>
          <h4 className="text-gray-300 font-semibold text-2xl font-sans">
            Número de clientes impactados
          </h4>
        </div>
        <div className="flex justify-center pb-7">
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
        <div className="flex flex-col justify-center items-center">      
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 4 }}
          >
            <Image 
              src={imageComposition}
              width={600}
              height={600}
              priority
              className="rounded-xl mt-6 border border-[rgb(5,200,203)]" 
              alt="Image showing why choose max pro" 
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}