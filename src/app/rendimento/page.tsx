import Container from 'components/Container'

export const metadata = {
  title: 'Rendimento - Controlizze'
}

export default function Rendimento() {
  return (
    <Container className="flex">
      <div className="w-full h-full p-14 flex flex-col gap-14">
        <div className="w-fit flex flex-col gap-1">
          <span className="text-4xl font-semibold text-white">Rendimento</span>
          <div className="w-3/5 h-1 bg-gradient-to-r from-primary-100 to-primary-900 rounded-full"></div>
        </div>

        <div className="w-full h-full flex flex-col gap-8">
          <div className="w-full h-full p-8 flex flex-col gap-8 bg-background-700 rounded-2xl shadow-xl">
            <div className="w-full flex items-center">
              <span className="text-2xl font-semibold text-white">
                Registros
              </span>
            </div>

            <div className="w-[1408px] h-full flex gap-4">
              {/* Card */}
              <div className="w-56 h-full flex justify-center items-center bg-background-500 rounded-xl shadow-lg">
                <span className="text-2xl text-white">Corretora</span>
              </div>

              {/* Card */}
              <div className="w-56 h-full flex justify-center items-center bg-background-500 rounded-xl shadow-lg">
                <span className="text-2xl text-white">Corretora</span>
              </div>

              {/* Card */}
              <div className="w-56 h-full flex justify-center items-center bg-background-500 rounded-xl shadow-lg">
                <span className="text-2xl text-white">Corretora</span>
              </div>

              {/* Card */}
              <div className="w-56 h-full flex justify-center items-center bg-background-500 rounded-xl shadow-lg">
                <span className="text-2xl text-white">Corretora</span>
              </div>

              {/* Card */}
              <div className="w-56 h-full flex justify-center items-center bg-background-500 rounded-xl shadow-lg">
                <span className="text-2xl text-white">Corretora</span>
              </div>

              {/* Card */}
              <div className="w-56 h-full flex justify-center items-center bg-background-500 rounded-xl shadow-lg">
                <span className="text-2xl text-white">Corretora</span>
              </div>
            </div>
          </div>

          <div className="w-full h-full p-8 flex flex-col gap-8 bg-background-700 rounded-2xl shadow-xl">
            <div className="w-full flex items-center">
              <span className="text-2xl font-semibold text-white">
                Registros
              </span>
            </div>

            <div className="w-[1408px] h-full flex gap-4">
              {/* Card */}
              <div className="w-56 h-full flex justify-center items-center bg-background-500 rounded-xl shadow-lg">
                <span className="text-2xl text-white">Corretora</span>
              </div>

              {/* Card */}
              <div className="w-56 h-full flex justify-center items-center bg-background-500 rounded-xl shadow-lg">
                <span className="text-2xl text-white">Corretora</span>
              </div>

              {/* Card */}
              <div className="w-56 h-full flex justify-center items-center bg-background-500 rounded-xl shadow-lg">
                <span className="text-2xl text-white">Corretora</span>
              </div>

              {/* Card */}
              <div className="w-56 h-full flex justify-center items-center bg-background-500 rounded-xl shadow-lg">
                <span className="text-2xl text-white">Corretora</span>
              </div>

              {/* Card */}
              <div className="w-56 h-full flex justify-center items-center bg-background-500 rounded-xl shadow-lg">
                <span className="text-2xl text-white">Corretora</span>
              </div>

              {/* Card */}
              <div className="w-56 h-full flex justify-center items-center bg-background-500 rounded-xl shadow-lg">
                <span className="text-2xl text-white">Corretora</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
