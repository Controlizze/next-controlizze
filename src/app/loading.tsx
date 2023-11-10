import { LuLoader2 } from 'react-icons/lu'

export default function Loading() {
  return (
    <div className="absolute top-0 left-0 w-full min-h-screen flex flex-col justify-center items-center gap-3 bg-900/60 overflow-hidden z-[100]">
      <LuLoader2 className="text-6xl text-primary-500 animate-spin" />
      <h3 className="text-xl font-semibold text-white">Carregando...</h3>
    </div>
  )
}
