import { signIn } from "next-auth/react"

export default function AccessDenied() {
  return (
    <>
      <h1>Acesso Negado</h1>
      <p>
        <a
          href="/api/auth/signin"
          onClick={(e) => {
            e.preventDefault()
            signIn()
          }}
        >
          Você precisa logar para acessar essa página.
        </a>
      </p>
    </>
  )
}
