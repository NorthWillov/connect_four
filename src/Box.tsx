import React, { FC, useState } from "react"

const Box: FC = () => {
  const [isClicked, setIsClicked] = useState(false)

  const hanldeClick = () => {
    setIsClicked(true)
  }

  return (
    <div
      className={`Box ${isClicked ? "Box-Red" : null}`}
      onClick={hanldeClick}
    ></div>
  )
}

export default Box
