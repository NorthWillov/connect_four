import React, { FC } from "react"
import { useAppSelector, useAppDispatch } from "./redux/hooks"
import { handleBoxClick } from "./redux/slices/rootSlice"

interface IBox {
  rowY: number
  colX: number
}

const Box: FC<IBox> = ({ rowY, colX }) => {
  const isClicked = useAppSelector((state) => state.root.isClicked)
  const dispatch = useAppDispatch()

  const hanldeClick = () => {
    dispatch(handleBoxClick())
    console.log(`Coordinates: y: ${rowY} x: ${colX}`)
  }

  return (
    <div
      className={`Box ${isClicked ? "Box-Red" : null}`}
      onClick={hanldeClick}
    ></div>
  )
}

export default Box
