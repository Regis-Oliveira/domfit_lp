export default function FeedbackClients() {
  return (
    <>
      <div className="flex items-center justify-center pt-10 pb-5">
        <p className=" text-center text-3xl text-white font-sans">
          Avaliação de clientes
        </p>
      </div>
      <section className=" flex justify-center items-center w-full
        px-6 pb-10"
      >
        <div className="max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 
          items-center justify-center my-5">
          <div className="rounded-xl p-4 bg-gray-900 border border-gray-700 min-h-[8.2rem]">
            <h4 className="text-white text-base font-bold font-sans">
              Suse Oliveira
            </h4>
            <p className="text-gray-400 text-base font-sans">
              Comecei a ter resultados em 3 dias com esse suplemento, achei incrível, hoje faz parte da minha vida
            </p>
          </div>
          <div className="rounded-xl p-4 bg-gray-900 border border-gray-700 min-h-[8.2rem]">
            <h4 className="text-white text-base font-bold font-sans">
              Heloana Daiana Carvalho
            </h4>
            <p className="text-gray-400 text-base font-sans">
              Consegui emagrecer usando o Max Pro 😍, ajudou a regular minha alimentação rsrsrs hoje me sinto bem melhor 
            </p>
          </div>
          <div className="rounded-xl p-4 bg-gray-900 border border-gray-700 min-h-[8.2rem]">
            <h4 className="text-white text-base font-bold font-sans">
              Edenise Gomes
            </h4>
            <p className="text-gray-400 text-base font-sans">
              Amei esses produtos, realmente meu corpo mudou e aumentei minha autoestima ❤️
            </p>
          </div>
        </div>
      </section>
    </>
  )
}