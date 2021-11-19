import { FC } from "react"
import "./App.css"
import Grid from "./Grid"

const App: FC = () => {
  return (
    <div className="App">
      <h1>Connect Four</h1>
      <Grid y={6} x={7} />
    </div>
  )
}

export default App
