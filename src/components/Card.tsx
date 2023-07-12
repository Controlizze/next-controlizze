import { BaseHTMLAttributes, ReactElement } from 'react'

interface CardProps extends BaseHTMLAttributes<HTMLBodyElement> {
  icon: ReactElement
  text: string
}

export function Card({ icon, text }: CardProps) {
  return (
    <div className="w-72 h-32 mt-10 px-6 py-5 flex flex-col justify-between bg-black-700 rounded-2xl shadow-lg">
      <div className="flex justify-between items-center">
        <span className="text-white text-2xl text-center font-medium">
          {text}
        </span>
        {icon}
      </div>
      <h4 className="text-white text-3xl text-center font-bold">R$0.00</h4>
    </div>
  )
}
