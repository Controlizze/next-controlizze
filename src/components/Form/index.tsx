import Link from 'next/link'
import { ComponentProps } from 'react'

export type FormProps = ComponentProps<'form'> & {
  login?: boolean
}

export function Form({ login = false, ...props }: FormProps) {
  return (
    <form action="" className="w-full flex flex-col gap-6" {...props}>
      {props.children}
      {login && (
        <div className="w-full flex justify-between items-center">
          <div className="flex items-center gap-2">
            <input type="checkbox" className="w-4 h-4 rounded" />
            <span className="text-xs text-zinc-400">Lembrar minha senha</span>
          </div>

          <Link
            href="/forget-password"
            className="text-xs text-zinc-400 hover:text-zinc-500 transition-all"
          >
            Esqueci minha senha
          </Link>
        </div>
      )}
    </form>
  )
}
