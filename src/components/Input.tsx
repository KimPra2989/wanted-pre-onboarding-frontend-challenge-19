import styled from "@emotion/styled"
import Button from "./Button"
import { MouseEventHandler, useRef } from "react"
import { useDispatch } from "react-redux"
import { add } from "../store/Slices/listSlice"

export default function Input() {
  const inputRef = useRef<HTMLInputElement>(null)
  const dispatch = useDispatch()
  const onClick: MouseEventHandler = () => {
    // console.log(inputRef.current)
    if (inputRef.current) {
      const value = inputRef.current.value
      if (value) {
        dispatch(add(inputRef.current?.value))
      }else {
        alert('내용이 없습니다.')
      }
    }
  }
  const Input = styled.input`
    height: 100%;
    padding: 0 7px &hover {
      border: 1px blue solid;
    }
  `
  return (
    <div
      css={{
        margin: "0 auto",
        height: "40px",
        width: "100%",
      }}
    >
      <Input ref={inputRef} type="text" />
      <Button width="20%" onClick={onClick}>
        전송
      </Button>
    </div>
  )
}
