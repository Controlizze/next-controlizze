import { ComponentProps } from 'react'

export type ActionProps = ComponentProps<'button'>

export function Action({ ...props }: ActionProps) {
  return (
    <button
      type="button"
      className="w-14 h-12 flex justify-center items-center bg-primary-500 hover:opacity-75 rounded-e transition-all"
      {...props}
    >
      {props.children}
    </button>
  )
}
