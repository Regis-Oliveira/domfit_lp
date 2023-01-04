export default function FeedbackClients() {
  return (
    <>
      <div className="bg-slate-900 flex items-center justify-center pt-10 pb-5">
        <p className=" text-center text-3xl text-white">
          Avaliação de clientes
        </p>
      </div>
      <section className=" flex justify-center items-center w-full
        px-6 pb-10 bg-slate-900"
      >
        <div className="max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 
          items-center justify-center my-5">
          <div className="rounded-lg p-4 bg-gray-800 border border-gray-700">
            <h4 className="text-white text-base font-bold">
              Jean ----
            </h4>
            <p className="text-gray-400 text-base">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio facere, nesciunt aspernatur nihil quia veritatis autem consequatur. Veritatis, quas? Modi, ratione consectetur illum animi voluptate nisi at nostrum vel possimus!
            </p>
          </div>
          <div className="rounded-lg p-4 bg-gray-800 border border-gray-700">
            <h4 className="text-white text-base font-bold">
              Juju ----
            </h4>
            <p className="text-gray-400 text-base">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio facere, nesciunt aspernatur nihil quia veritatis autem consequatur. Veritatis, quas? Modi, ratione consectetur illum animi voluptate nisi at nostrum vel possimus!
            </p>
          </div>
          <div className="rounded-lg p-4 bg-gray-800 border border-gray-700">
            <h4 className="text-white text-base font-bold">
              Jean Grey ----
            </h4>
            <p className="text-gray-400 text-base">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio facere, nesciunt aspernatur nihil quia veritatis autem consequatur. Veritatis, quas? Modi, ratione consectetur illum animi voluptate nisi at nostrum vel possimus!
            </p>
          </div>
        </div>
      </section>
    </>
  )
}