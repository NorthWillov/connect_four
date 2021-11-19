import React, { FC } from "react"
import { useAppSelector, useAppDispatch } from "./redux/hooks"
import { handleBoxClick } from "./redux/slices/rootSlice"

const Box: FC = () => {
  const isClicked = useAppSelector((state) => state.root.isClicked)
  const dispatch = useAppDispatch()

  const hanldeClick = () => {
    dispatch(handleBoxClick())
    console.log(isClicked)
  }

  return (
    <div
      className={`Box ${isClicked ? "Box-Red" : null}`}
      onClick={hanldeClick}
    ></div>
  )
}

export default Box
