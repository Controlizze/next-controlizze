import Container from 'components/Container'
import FormLogin from 'components/FormLogin'

export const metadata = {
  title: 'Login - Controlizze'
}

export default function LoginPage() {
  return <Container form={<FormLogin />} />
}
