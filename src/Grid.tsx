import React, { FC } from "react"
import Row from "./Row"

interface IGrid {
  y: number
  x: number
}

const Grid: FC<IGrid> = ({ y, x }) => {
  return (
    <div className="Grid">
      {Array(y)
        .fill(1)
        .map((notused, idx) => (
          <Row rowY={idx} x={x} key={idx} />
        ))}
    </div>
  )
}

export default Grid
