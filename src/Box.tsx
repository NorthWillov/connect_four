import React, { FC, useState, useEffect } from "react"
import { useAppSelector, useAppDispatch } from "./redux/hooks"
import { handleBoxClick } from "./redux/slices/rootSlice"

interface IBox {
  rowY: number
  colX: number
}

const Box: FC<IBox> = ({ rowY, colX }) => {
  const { gameGridArr, currPlayer } = useAppSelector((state) => state.root)
  const dispatch = useAppDispatch()
  const [isClicked, setIsClicked] = useState(false)
  const [myColor, setMyColor] = useState<string>("")

  useEffect(() => {
    console.log(gameGridArr)
  }, [])

  const hanldeClick = () => {
    if (gameGridArr[rowY][colX] === 5) {
      setMyColor(currPlayer === 1 ? "Red" : "Yellow")
      dispatch(handleBoxClick(rowY, colX))
      setIsClicked(true)
      console.log(`Coordinates: y: ${rowY} x: ${colX}`)
    }
  }

  return (
    <div
      className={`Box ${isClicked ? `Box-${myColor}` : ""} ${
        gameGridArr[rowY][colX] === 5 ? "enabled" : ""
      }`}
      onClick={hanldeClick}
    ></div>
  )
}

export default Box
