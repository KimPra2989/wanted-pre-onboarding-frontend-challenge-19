import { css } from "@emotion/react"
import styled from "@emotion/styled"

interface ButtonProps {
  width: string
  backgroundColor?: string
  color?: string
}

const hover = css({
  opacity: '0.8',
})
const active = css({
  opacity: '0.8',
  borderWidth: '2px',
  borderStyle: 'inset',
  borderColor: 'black'
})
   
const Button = styled.button<ButtonProps>(
  {
    cursor: 'pointer',
    height: "100%",
    padding: "7px 0",
    border: '1px solid black',
    borderRadius: '5px',
    '&:hover': hover, 
    '&:active': active,
  },
  ({ width, backgroundColor = "white", color = "black" }) => ({
    width,
    backgroundColor,
    color,
  }),
)

export default Button