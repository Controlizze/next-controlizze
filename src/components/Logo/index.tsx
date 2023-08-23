import Image from 'next/image'

export type LogoProps = {
  size: number
}

export function Logo({ size }: LogoProps) {
  return <Image src="/new_logo.png" width={size} height={size} alt="logo" />
}
