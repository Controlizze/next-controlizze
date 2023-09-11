import { ReactNode } from 'react'

import { VariantProps, tv } from 'tailwind-variants'

const card = tv({
  base: 'w-full flex bg-background-700 rounded shadow-xl shadow-default',
  variants: {
    padding: {
      base: 'p-5',
      sm: 'px-5 py-3'
    },
    flex: {
      col: 'flex-col'
    },
    gap: {
      base: 'gap-7',
      sm: 'gap-2'
    }
  }
})

type Props = VariantProps<typeof card> & {
  children: ReactNode
}

export function Container({ children, padding, flex, gap }: Props) {
  return <div className={card({ padding, flex, gap })}>{children}</div>
}
