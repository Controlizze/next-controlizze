import { ComponentProps } from 'react'
import { LuEye, LuEyeOff } from 'react-icons/lu'

type Props = ComponentProps<'button'> & {
  ocultPassword: boolean
}

export function Action({ ocultPassword, ...props }: Props) {
  return (
    <button type="button" {...props}>
      {!ocultPassword ? (
        <LuEye className="absolute top-1/2 translate-y-[-50%] right-3 w-5 h-5 text-zinc-400" />
      ) : (
        <LuEyeOff className="absolute top-1/2 translate-y-[-50%] right-3 w-5 h-5 text-zinc-400" />
      )}
    </button>
  )
}
