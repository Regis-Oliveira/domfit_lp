import Image from "next/image";
import seloImg from "../../../assets/selo.png";

export default function Assurance() {
  return (
    <section className="px-10 sm:pb-4 pb-10 pt-4 flex flex-col sm:flex-row items-center justify-center
      bg-slate-800 w-full">
      <div>
        <Image
          alt="Image from tag about product assurance by law"
          src={seloImg}
          priority
          width={400}
          height={400}
          className="w-60 sm:w-72"
        />
      </div>
      <div className="max-w-lg sm:pl-3">
        <p className="text-gray-400 text-base sm:text-lg leading-relaxed text-center">
          O código de defesa consumidor (Art. 49) garante 7 dias para solicitar reembolso em caso de insatisfação com o produto.
        </p>
      </div>
    </section>
  )
}