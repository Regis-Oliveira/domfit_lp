const feedbacks = [
  {
    id: 1,
    name: 'Suse Oliveira',
    message: 'Comecei a ter resultados em 3 dias com esse suplemento, achei incrível, hoje faz parte da minha vida.'
  },
  {
    id: 2,
    name: 'Heloana Daiana Carvalho',
    message: '  Consegui emagrecer usando o Max Pro 😍, ajudou a regular minha alimentação rsrsrs hoje me sinto bem melhor.'
  },
  {
    id: 3,
    name: 'Edenise Gomes',
    message: 'Amei esses produtos, realmente meu corpo mudou e aumentei minha autoestima ❤️.'
  }
]

export default function FeedbackClients() {
  return (
    <>
      <div className="flex items-center justify-center pt-10 pb-5">
        <p className=" text-center text-3xl font-bold text-white font-sans">
          Avaliação de clientes
        </p>
      </div>
      <section className=" flex justify-center items-center w-full
        px-6 pb-10"
      >
        <div className="max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 
          items-center justify-center my-5">
          {feedbacks.map((feedback) => (
            <div 
              className="rounded-xl p-4 bg-black border border-[rgb(5,200,203)] min-h-[11rem]"
              key={feedback.id}
            >
              <h4 className="text-white text-lg font-bold font-sans">
                {feedback.name}
              </h4>
              <p className="text-gray-400 text-lg font-sans">
                {feedback.message}
              </p>
            </div>
          ))}          
        </div>
      </section>
    </>
  )
}