import { FC, useEffect } from "react"
import "./App.css"
import { useAppDispatch, useAppSelector } from "./redux/hooks"
import { fillGrid } from "./redux/slices/rootSlice"
import Grid from "./Grid"

const App: FC = () => {
  const { gameGridArr } = useAppSelector((state) => state.root)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fillGrid())
  }, [])

  return (
    <div className="App">
      <h1>Connect Four</h1>
      {gameGridArr.length !== 0 ? <Grid y={6} x={7} /> : null}
    </div>
  )
}

export default App
