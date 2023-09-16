import { ComponentProps } from 'react'
import { LuEye, LuEyeOff } from 'react-icons/lu'

type Props = ComponentProps<'button'> & {
  ocultPassword: boolean
}

export function Action({ ocultPassword, ...props }: Props) {
  return (
    <button
      className="absolute top-1/2 translate-y-[-50%] right-3 flex justify-between items-center"
      {...props}
    >
      {!ocultPassword ? (
        <LuEye className="w-5 h-5 text-zinc-400" />
      ) : (
        <LuEyeOff className="w-5 h-5 text-zinc-400" />
      )}
    </button>
  )
}
