import { ReactNode } from 'react'

import { VariantProps, tv } from 'tailwind-variants'

const title = tv({
  base: 'flex gap-0.5',
  variants: {
    flex: {
      col: 'flex-col'
    }
  }
})

// const gradient = tv({
//   base: 'w-3/5 h-1 rounded-full',
//   variants: {
//     gradientColor: {
//       default: 'bg-gradient-to-r from-red-700 to-background-700',
//       green: 'bg-gradient-to-r from-green-700 to-background-700',
//       orange: 'bg-gradient-to-r from-orange-700 to-background-700',
//       primary: 'bg-gradient-to-r from-primary-500 to-background-700'
//     }
//   },
//   defaultVariants: {
//     gradientColor: 'default'
//   }
// })

type Props = VariantProps<typeof title> & {
  children: ReactNode
  gradientColor: string
}

export function Title({ children, flex, gradientColor }: Props) {
  return (
    <div className={title({ flex })}>
      <h3 className="text-lg font-medium text-white">{children}</h3>
      {/* <div className={gradient({ gradientColor })} /> */}
      <div
        className={`w-3/5 h-1 bg-gradient-to-r from-${gradientColor}-700 to-background-700 rounded-full`}
      />
    </div>
  )
}
