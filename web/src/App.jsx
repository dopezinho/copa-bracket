const Title = ({children, ...props}) => (
  <h1 {...props}>{children}</h1>
)

export function App() {
  return (
    <div className="bg-red-500">
      <Title>Olá mundo</Title>
      <Title>Olá mundo 2</Title>
      <Title>Olá mundo 3</Title>
    </div>
  )
}

