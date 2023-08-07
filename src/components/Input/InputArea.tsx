import { ComponentProps } from 'react'

export type InputAreaProps = ComponentProps<'input'>

export function InputArea({ ...props }: InputAreaProps) {
  return (
    <div
      className="px-6 py-4 flex justify-between items-center gap-3 border-2 bg-white rounded-lg border-zinc-400 text-base"
      {...props}
    >
      <input
        type="email"
        placeholder="E-mail"
        className="w-full outline-none"
        {...props}
      />
    </div>
  )
}
