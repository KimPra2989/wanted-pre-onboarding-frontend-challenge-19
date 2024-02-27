export default function Header({ color = "black" }) {
  return (
    <header css={{
        borderBottom : '1px black solid',
        padding : '10px 0'
    }}>
      <h1
        css={{
          color,
        }}
      >
        You Should Do This
      </h1>
    </header>
  )
}
