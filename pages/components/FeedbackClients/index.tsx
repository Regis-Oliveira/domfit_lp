export default function FeedbackClients() {
  return (
    <>
      <div className="bg-gradient-to-r from-slate-900 to-indigo-900 flex items-center justify-center pt-10 pb-5">
        <p className=" text-center text-3xl text-white font-sans">
          Avaliação de clientes
        </p>
      </div>
      <section className=" flex justify-center items-center w-full
        px-6 pb-10 bg-gradient-to-r from-slate-900 to-indigo-900"
      >
        <div className="max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 
          items-center justify-center my-5">
          <div className="rounded-xl p-4 bg-gray-900 border border-gray-700">
            <h4 className="text-white text-base font-bold font-sans">
              Jean ----
            </h4>
            <p className="text-gray-400 text-base font-sans">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio facere, nesciunt aspernatur nihil quia veritatis autem consequatur. Veritatis, quas? Modi, ratione consectetur illum animi voluptate nisi at nostrum vel possimus!
            </p>
          </div>
          <div className="rounded-xl p-4 bg-gray-900 border border-gray-700">
            <h4 className="text-white text-base font-bold font-sans">
              Juju ----
            </h4>
            <p className="text-gray-400 text-base font-sans">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio facere, nesciunt aspernatur nihil quia veritatis autem consequatur. Veritatis, quas? Modi, ratione consectetur illum animi voluptate nisi at nostrum vel possimus!
            </p>
          </div>
          <div className="rounded-xl p-4 bg-gray-900 border border-gray-700">
            <h4 className="text-white text-base font-bold font-sans">
              Jean Grey ----
            </h4>
            <p className="text-gray-400 text-base font-sans">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio facere, nesciunt aspernatur nihil quia veritatis autem consequatur. Veritatis, quas? Modi, ratione consectetur illum animi voluptate nisi at nostrum vel possimus!
            </p>
          </div>
        </div>
      </section>
    </>
  )
}