import { ErrorMessage } from './ErrorMessage'
import { Field } from './Field'
import { Input } from './Input'
import { InputIcon } from './InputIcon'
import { InputLabel } from './InputLabel'

export const InputForm = {
  root: Field,
  label: InputLabel,
  form: Input,
  icon: InputIcon,
  error: ErrorMessage
}
