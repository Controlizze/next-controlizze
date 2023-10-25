import Link from 'next/link'

type CardProps = {
  url: string
  bg: string
  img: string
}

export default function CardLink({ url, bg, img }: CardProps) {
  return (
    <Link
      href={url}
      target="_blank"
      className={`min-w-[120px] xl:min-w-[160px] 2xl:min-w-[220px] min-h-[120px] xl:min-h-[160px] 2xl:min-h-[220px] flex justify-center items-center ${bg} rounded shadow-lg shadow-black/25`}
    >
      <img src={img} alt="logos" className="w-[80px] xl:w-[120px]" />
    </Link>
  )
}
