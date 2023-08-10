import { ComponentProps } from 'react'

export type ErrorMessageProps = ComponentProps<'span'>

export function ErrorMessage({ ...props }: ErrorMessageProps) {
  return <span className="text-xs text-red-500">{props.children}</span>
}
