import styled from "@emotion/styled"
import Button from "../Button"
import { useDispatch, useSelector } from "react-redux"
import { deleteList } from "../../store/Slices/listSlice"
import { RootState } from "../../store/store"

interface ListProps {
  text: string
  idx: number
}
export default function List({ text, idx }: ListProps) {
  const dispatch = useDispatch()
  const deleteHandler = (idx: number) => {
    dispatch(deleteList(idx))
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

  return (
    <List>
      <p>{text}</p>
      <Button backgroundColor={theme.button}
        css={{
          marginLeft: "auto",
          marginRight: "10px",
        }}
        width="10%"
        onClick={() => {
          deleteHandler(idx)
        }}
      >
        Delete
      </Button>
    </List>
  )
}
