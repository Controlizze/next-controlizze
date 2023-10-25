export default function Loading() {
  return (
    <div className="absolute top-0 left-0 w-full min-h-screen flex flex-col justify-center items-center bg-900/60 overflow-hidden z-[100]">
      <img src="/loading.gif" alt="Loading" />
      <h3 className="text-xl font-semibold text-white">Carregando...</h3>
    </div>
  )
}
