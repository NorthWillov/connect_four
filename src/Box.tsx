import React, { FC, useState, useEffect } from "react"
import { useAppSelector, useAppDispatch } from "./redux/hooks"
import { handleBoxClick } from "./redux/slices/rootSlice"

interface IBox {
  rowY: number
  colX: number
}

const Box: FC<IBox> = ({ rowY, colX }) => {
  const { gameGridArr, currPlayer, winner } = useAppSelector(
    (state) => state.root
  )
  const dispatch = useAppDispatch()
  const [isClicked, setIsClicked] = useState(false)
  const [myColor, setMyColor] = useState<string>("")

  const hanldeClick = () => {
    if (gameGridArr[rowY][colX] === "enabled" && winner === "Draw") {
      setMyColor(currPlayer === "Red" ? "Red" : "Yellow")
      dispatch(handleBoxClick(rowY, colX))
      setIsClicked(true)
      console.log(`Coordinates: y: ${rowY} x: ${colX}`)
    }
  }

  return (
    <div
      className={`Box ${isClicked ? `Box-${myColor}` : ""} ${
        gameGridArr[rowY][colX] === "enabled" ? "enabled" : ""
      }`}
      onClick={hanldeClick}
    ></div>
  )
}

export default Box
