import Image from 'next/image'
import { FormHTMLAttributes, ReactElement } from 'react'

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  form: ReactElement
}

export default function Container({ form }: FormProps) {
  return (
    <div className="w-full h-screen">
      <div className="w-full h-full px-8 py-8 flex flex-col justify-between items-center bg-zinc-900">
        <Image src="/logo.png" width={260} height={260} alt="Logo" />
        {form}
      </div>
      <div className="hidden"></div>
    </div>
  )
}
