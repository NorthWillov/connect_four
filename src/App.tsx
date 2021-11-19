import { FC, useEffect } from "react"
import "./App.css"
import { useAppSelector, useAppDispatch } from "./redux/hooks"
import { fillGrid } from "./redux/slices/rootSlice"
import Grid from "./Grid"

const App: FC = () => {
  const root = useAppSelector((state) => state.root)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fillGrid())
  }, [])

  return (
    <div className="App">
      <h1>Connect Four</h1>
      <Grid y={6} x={7} />
    </div>
  )
}

export default App
