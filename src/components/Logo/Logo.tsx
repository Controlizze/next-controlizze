type LogoProps = {
  banner?: boolean
}

export default function Logo({ banner }: LogoProps) {
  return (
    <div
      className={`${
        banner ? 'absolute top-10 left-10' : ''
      } flex justify-center items-center gap-2`}
    >
      <img
        src="/icon.png"
        className="w-6 h-6 md:w-8 md:h-8 2xl:w-10 2xl:h-10"
        alt="emplem"
      />
      <span
        style={{ fontFamily: 'Russo One' }}
        className="text-2xl md:text-3xl xl:text-4xl text-white"
      >
        Controlizze
      </span>
    </div>
  )
}
