// import { useState } from "react"
import "./App.css"
import List from "./components/List/List"
import Input from "./components/Input"
import Header from "./components/Header/Header"
import { useDispatch, useSelector } from "react-redux"
import Button from "./components/Button"
import { deleteList } from "./store/Slices/listSlice"

function App() {
  // const [count, setCount] = useState(0)
  const list = useSelector((state: { list: string[] }) => state.list)
  const dispatch = useDispatch();
  const deleteHandler = (idx: number) => {
    dispatch(deleteList(idx))
  }
  console.log(list)
  return (
    <>
      <div
        css={{
          padding: "20px 20px",
          textAlign: "center",
          width: "640px",
          margin: "0 auto",
          backgroundColor: "#cec7ab",
        }}
      >
        <Header />
        {list.map((item, idx) => (
          <List key={item + idx}>
            <p>{item}</p>
            <Button
              width="10%"
              css={{
                marginLeft: "auto",
              }}
              onClick={()=>{deleteHandler(idx)}}
            >
              삭제
            </Button>
          </List>
        ))}
        <Input />
      </div>
    </>
  )
}

export default App
