import { useSelector } from "react-redux"

interface HeaderProps {
  color?: string
}

export default function Header({ color = "black" }: HeaderProps) {
  const list = useSelector(( { list } : {list : string[]}) => list)
  const hasList = !!list.length

  return (
    <header
      css={{
        marginBottom: "20px",
      }}
    >
      <h1
        css={{
          color,
          fontSize: "3.2em",
          lineHeight: "1.1",
          fondWeight: "bold",
        }}
      >
        {hasList ? "You Should Do This" : "You have nothing to do"}
      </h1>
    </header>
  )
}