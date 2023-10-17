export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-black/50 overflow-hidden">
      <img src="/loading.gif" alt="Loading" />
      <h3 className="text-xl font-semibold text-white">Carregando...</h3>
    </div>
  )
}
