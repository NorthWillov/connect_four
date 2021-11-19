import { FC } from "react"
import "./App.css"
import Grid from "./Grid"

const App: FC = () => {
  return (
    <div className="App">
      <h1>Connect Four</h1>
      <Grid />
    </div>
  )
}

export default App
