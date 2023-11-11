import { ReactNode } from 'react'
import { IconType } from 'react-icons/lib'

import { VariantProps, tv } from 'tailwind-variants'

const btns = tv({
  base: 'px-2 py-1 flex justify-center items-center gap-2 border rounded transition-all',
  variants: {
    textColor: {
      default: 'text-white',
      red: 'text-red-600',
      orange: 'text-orange-600'
    },
    btnColor: {
      default: 'border-white-600 hover:bg-white-600/10',
      red: 'border-red-600 hover:bg-red-600/10',
      orange: 'border-orange-600 hover:bg-orange-600/10'
    }
  },
  defaultVariants: {
    textColor: 'default',
    btnColor: 'default'
  }
})

type TableButtonProps = VariantProps<typeof btns> & {
  icon: IconType
  children: ReactNode
  action: () => void
}

export default function TableButton({
  icon: Icon,
  action,
  children,
  textColor,
  btnColor
}: TableButtonProps) {
  return (
    <button onClick={action} className={btns({ textColor, btnColor })}>
      <Icon className="text-sm" />
      <span className="hidden 2xl:block text-xs">{children}</span>
    </button>
  )
}
