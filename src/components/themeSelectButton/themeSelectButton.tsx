import styled from "@emotion/styled"
import { useDispatch } from "react-redux"
import { switchTheme } from "../../store/Slices/themeSlice"
import { ThemeSet } from "../../styles/themeSet"

interface themeSelectBUttonProps {
  themeName: ThemeSet
  color: string
}

export default function ThmeSelectButton({
  themeName,
  color,
}: themeSelectBUttonProps) {
  const dispatch = useDispatch()
  const onClick = () => {
    dispatch(switchTheme(themeName))
    localStorage.setItem('theme', themeName)
  }
  const Button = styled.button({
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: color,
  })
  return <Button onClick={onClick}></Button>
}
