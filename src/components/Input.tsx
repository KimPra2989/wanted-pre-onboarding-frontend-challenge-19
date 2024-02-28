import styled from "@emotion/styled"
import Button from "./Button"
import { MouseEventHandler, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { add } from "../store/Slices/listSlice"
import { RootState } from "../store/store"

export default function Input() {
  const inputRef = useRef<HTMLInputElement>(null)
  const list = useSelector((state: RootState) => state.list)
  const theme = useSelector((state: RootState) => state.theme)
  
  const hasList = !!list.length
  const dispatch = useDispatch()
  const onClick: MouseEventHandler = () => {
    if (inputRef.current) {
      const value = inputRef.current.value
      if (value) {
        dispatch(add(inputRef.current?.value))
      } else {
        alert("내용이 없습니다.")
      }
    }
  }
  const Input = styled.input({
    height: "100%",
    width: "60%",
    paddingLeft: "5px",
    fontSize: '20px',
    borderBottom: "1px solid black",
    backgroundColor: 'transparent',
    verticalAlign: 'baseline'
  })

  return (
    <div
      css={{
        margin: "0 auto",
        marginTop: '20px',
        height: "30px",
        width: "100%",
        display: "flex",
        justifyContent: hasList? 'left' : 'center',
        gap: '10px'
      }}
    >
      <Input ref={inputRef} type="text" placeholder="input what you'll have to do"/>
      <Button width="20%" backgroundColor={theme.button} onClick={onClick}>
        add
      </Button>
    </div>
  )
}
