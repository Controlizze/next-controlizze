import {
  ButtonHTMLAttributes,
  ReactElement,
  ReactNode,
  cloneElement
} from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  icon?: ReactElement
  sizeX: string
  sizeY: string
  variant?:
    | 'default'
    | 'outline'
    | 'transparent'
    | 'warn'
    | 'danger'
    | 'disable'
  upperText?: string
  defaultStyle?: string
}

export const Button = (props: ButtonProps) => {
  const { variant } = props

  const style =
    'block flex justify-center items-center rounded-md shadow-md transition-all font-bold'

  switch (variant) {
    case 'outline':
      return <OutlineButton defaultStyle={style} {...props} />
    case 'transparent':
      return <TransparentButton defaultStyle={style} {...props} />
    case 'warn':
      return <WarnButton defaultStyle={style} {...props} />
    case 'danger':
      return <CancelButton defaultStyle={style} {...props} />
    case 'disable':
      return <DisableButton defaultStyle={style} {...props} />
    case 'default':
      return <DefaultButton defaultStyle={style} {...props} />
  }
}

export const DefaultButton = (props: ButtonProps) => {
  const { children, icon, sizeX, sizeY, upperText, defaultStyle } = props

  return (
    <button
      {...props}
      className={`w-${sizeX} h-${sizeY} ${defaultStyle} bg-primary-500 hover:bg-primary-300 text-white ${upperText}`}
    >
      <span>{children}</span>
      {icon && cloneElement(icon, { className: 'fill-white w-6 h-6' })}
    </button>
  )
}

export const OutlineButton = (props: ButtonProps) => {
  const { children, icon, sizeX, sizeY, upperText, defaultStyle } = props

  return (
    <button
      {...props}
      className={`w-${sizeX} h-${sizeY} ${defaultStyle} border-2 border-primary-500 hover:border-primary-300 text-primary-500 hover:text-primary-300 ${upperText}`}
    >
      <span>{children}</span>
      {icon && cloneElement(icon, { className: 'fill-white w-6 h-6' })}
    </button>
  )
}

export const TransparentButton = (props: ButtonProps) => {
  const { children, icon, sizeX, sizeY, upperText, defaultStyle } = props

  return (
    <button
      {...props}
      className={`w-${sizeX} h-${sizeY} ${defaultStyle} text-primary-500 hover:text-primary-300 ${upperText}`}
    >
      <span>{children}</span>
      {icon && cloneElement(icon, { className: 'fill-white w-6 h-6' })}
    </button>
  )
}

export const WarnButton = (props: ButtonProps) => {
  const { children, icon, sizeX, sizeY, upperText, defaultStyle } = props

  return (
    <button
      {...props}
      className={`w-${sizeX} h-${sizeY} ${defaultStyle} bg-yellow-500 hover:bg-yellow-300 text-white ${upperText}`}
    >
      <span>{children}</span>
      {icon && cloneElement(icon, { className: 'fill-white w-6 h-6' })}
    </button>
  )
}

export const CancelButton = (props: ButtonProps) => {
  const { children, icon, sizeX, sizeY, upperText, defaultStyle } = props

  return (
    <button
      {...props}
      className={`w-${sizeX} h-${sizeY} ${defaultStyle} bg-red-500 hover:bg-red-300 text-white ${upperText}`}
    >
      <span>{children}</span>
      {icon && cloneElement(icon, { className: 'fill-white w-6 h-6' })}
    </button>
  )
}

export const DisableButton = (props: ButtonProps) => {
  const { children, icon, sizeX, sizeY, upperText, defaultStyle } = props

  return (
    <button
      {...props}
      disabled
      className={`w-${sizeX} h-${sizeY} ${defaultStyle} bg-zinc-400 text-white ${upperText}`}
    >
      <span>{children}</span>
      {icon && cloneElement(icon, { className: 'fill-white w-6 h-6' })}
    </button>
  )
}
