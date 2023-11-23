import { BaseHTMLAttributes } from 'react'
import { IconType } from 'react-icons/lib'

import Icon from 'components/Icon'

import { twMerge } from 'tailwind-merge'

type CardProps = BaseHTMLAttributes<HTMLDivElement> & {
  title: string
  gradient: string
  icon?: IconType
  iconColor: string
  value: number
}

export default function CardValue({
  title,
  icon,
  iconColor,
  gradient,
  value,
  ...props
}: CardProps) {
  const formatValue = (value: number | undefined) => {
    return value?.toFixed(2).toString().replace('-', '')
  }

  return (
    <div className="w-full px-8 py-5 flex flex-col items-center gap-3 bg-800 rounded shadow-xl shadow-black/25">
      <div className="w-full flex justify-between items-center">
        <div className="flex flex-col gap-0.5">
          <h3 className="text-xl 2xl:text-2xl text-white">{title}</h3>
          <div
            className={`w-3/5 h-1 bg-gradient-to-r ${gradient} to-800 rounded-full`}
          />
        </div>
        {icon && (
          <Icon icon={icon} className={`text-3xl lg:text-4xl ${iconColor}`} />
        )}
      </div>
      <h3
        className={twMerge(
          'text-3xl 2xl:text-4xl font-bold text-white text-center',
          props.className
        )}
      >
        R$ {formatValue(value)}
      </h3>
    </div>
  )
}
