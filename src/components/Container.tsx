import { FormHTMLAttributes, ReactElement } from 'react'

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  form: ReactElement
}

export default function Container({ form }: FormProps) {
  return (
    <div
      className="w-full h-screen p-6 sm:p-0 flex justify-center items-center"
      style={{
        background:
          'linear-gradient(#00000060, #00000060), url(/fundo_geometrico.png)',
        backgroundColor: '#111111'
      }}
    >
      {form}
    </div>
  )
}
