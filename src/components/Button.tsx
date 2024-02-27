import styled from "@emotion/styled"
interface ButtonProps {
  width: string
  backgroundColor?: string
  color?: string
}

const Button = styled.button<ButtonProps>(
  ({ width, backgroundColor = "#f6ead4", color = "black" }) => ({
    width,
    backgroundColor,
    color,
    height: "40px",
    padding: "7px 0",
  }),
)

export default Button
