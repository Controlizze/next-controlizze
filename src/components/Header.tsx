import { LuMenu } from 'react-icons/lu'

type HeaderProps = {
  category: string
  page: string
}

export default function Header({ category, page }: HeaderProps) {
  return (
    <header className="fixed z-50 lg:relative top-0 left-0 w-full px-7 py-5 lg:px-8 lg:py-8 flex items-center gap-2 bg-800 lg:bg-900 shadow-xl lg:shadow-none shadow-black/25">
      <button
        className="w-11 h-11 flex lg:hidden justify-center items-center bg-600 rounded-full"
        // onClick={() => {
        //   setOpenSidebar(!openSidebar)
        // }}
      >
        <LuMenu className="text-white text-2xl" />
      </button>

      <div className="w-fit flex flex-col justify-center gap-0">
        <h3 className="text-xs lg:text-sm 2xl:text-lg text-zinc-400 uppercase">
          {category}
        </h3>
        <h1 className="text-xl lg:text-2xl 2xl:text-3xl font-bold text-white uppercase">
          {page}
        </h1>
      </div>
    </header>
  )
}
