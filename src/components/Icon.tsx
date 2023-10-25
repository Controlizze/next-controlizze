import { IconType } from 'react-icons/lib'

type IconProps = {
  icon: IconType
  className?: string
}

export default function Icon({ icon: Icon, className }: IconProps) {
  return <Icon className={className} />
}
