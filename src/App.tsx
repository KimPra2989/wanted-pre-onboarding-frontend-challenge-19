import "./App.css"
import List from "./components/List/List"
import Input from "./components/Input"
import Header from "./components/Header/Header"
import { useSelector } from "react-redux"
import { RootState } from "./store/store"
import themeSet from "./styles/themeSet"
import ThmeSelectButton from "./components/themeSelectButton/themeSelectButton"

function App() {
  const { list, theme } = useSelector((state: RootState) => state)
  return (
    <>
      <div className="background" css={{
        backgroundColor : theme.background
      }}>
        <div
          className="card"
          css={{
            backgroundColor: theme.card,
          }}
        >
          <div className="themeBtnWrapper">
            <ThmeSelectButton themeName="loid" color={themeSet.loid.card} />
            <ThmeSelectButton themeName="anya" color={themeSet.anya.card} />
            <ThmeSelectButton themeName="piplup" color={themeSet.piplup.card} />
          </div>
          <Header />
          {list.map((item, idx) => (
            <List idx={idx} text={item} key={item + idx}></List>
          ))}
          <Input />
        </div>
      </div>
    </>
  )
}

export default App
