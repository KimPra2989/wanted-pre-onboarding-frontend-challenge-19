import styled from "@emotion/styled"
import Button from "../Button"
import { useDispatch, useSelector } from "react-redux"
import { deleteList, updateList } from "../../store/Slices/listSlice"
import { RootState } from "../../store/store"
import { useRef, useState } from "react"

interface ListProps {
  text: string
  idx: number
}
export default function List({ text, idx }: ListProps) {
  const [isEdit, setEdit] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const dispatch = useDispatch()
  const deleteHandler = (idx: number) => {
    dispatch(deleteList(idx))
  }
  const openEdit = () => {
    setEdit(true)
  }
  const updateHandler = (idx: number) => {
    if (inputRef.current?.value) {
      dispatch(updateList({ idx, value: inputRef.current?.value }))
    } else {
      alert("입력값이 없어요.")
    }
  }
  const theme = useSelector((state: RootState) => state.theme)
  const List = styled.div({
    color: "black",
    width: "100%",
    height: "60px",
    padding: "10px 16px",
    paddingRight: "0",
    marginBottom: "10px",
    borderRadius: "10px",
    textAlign: "start",
    display: "flex",
    alignItems: "center",
    fontWeight: "500",
    fontSize: "20px",
    backgroundColor: theme.list,
  })
  const Input = styled.input({
    height: "100%",
    width: "77%",
    paddingLeft: "5px",
    fontSize: "20px",
    borderBottom: "1px solid black",
    backgroundColor: "transparent",
    verticalAlign: "baseline",
  })

  return (
    <List>
      {isEdit ? (
        <div
          css={{
            height: "30px",
            width: "100%",
            display: "flex",
            gap: "10px",
          }}
        >
          <Input ref={inputRef} type="text" defaultValue={text} />
          <Button
            width="18%"
            backgroundColor={theme.button}
            onClick={() => {
              updateHandler(idx)
            }}
          >
            Edit
          </Button>
        </div>
      ) : (
        <>
          <p>{text}</p>
          <div
            css={{
              marginLeft: "auto",
              marginRight: "10px",
              display: "flex",
              gap: "5px",
            }}
          >
            <Button
              backgroundColor={theme.button}
              width="60px"
              onClick={openEdit}
            >
              Edit
            </Button>
            <Button
              backgroundColor={theme.button}
              width="60px"
              onClick={() => {
                deleteHandler(idx)
              }}
            >
              Delete
            </Button>
          </div>
        </>
      )}
    </List>
  )
}
