type ButtonProps = {
  width: string | number
  height: string | number
  fontWeight: string
  upper?: string
  textButton: string
}

export default function Button({
  width,
  height,
  fontWeight,
  upper,
  textButton
}: ButtonProps) {
  return (
    <button
      className={`w-${width} h-${height} bg-primary-500 hover:bg-primary-300 rounded-md shadow-lg transition text-zinc-50 font-${fontWeight} ${upper}`}
    >
      {textButton}
    </button>
  )
}
