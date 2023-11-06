import { BaseHTMLAttributes, Dispatch, ReactNode, SetStateAction } from 'react'

import Sidebar from './Sidebar'

import { twMerge } from 'tailwind-merge'

type ContainerProps = BaseHTMLAttributes<HTMLDivElement> & {
  children: ReactNode
  withSidebar?: boolean
  isSidebarOpen: boolean
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>
}

const notSidebarClass = 'min-h-screen flex flex-col lg:flex-row'
const withSidebarClass = 'min-h-screen flex'

export default function Container({
  children,
  withSidebar,
  isSidebarOpen,
  setIsSidebarOpen,
  ...props
}: ContainerProps) {
  return (
    <>
      {withSidebar ? (
        <div className={withSidebarClass}>
          {/* Sidebar */}
          <Sidebar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />

          {/* Conteúdo principal */}
          <main
            className={twMerge(
              'w-full lg:w-[75%] 2xl:w-[80%] mt-[84px] lg:mt-0 lg:ml-[25%] 2xl:ml-[20%] px-7 py-5 lg:p-8 flex flex-col flex-grow justify-start lg:justify-between gap-6',
              props.className
            )}
          >
            {children}
          </main>
        </div>
      ) : (
        <div className={notSidebarClass}>{children}</div>
      )}
    </>
  )
}
