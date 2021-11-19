import React, { FC } from "react"
import Box from "./Box"

interface IRow {
  x: number
  rowY: number
}

const Row: FC<IRow> = ({ x, rowY }) => {
  return (
    <div className="Row">
      {Array(x)
        .fill(1)
        .map((notused, idx) => (
          <Box rowY={rowY} colX={idx} key={idx} />
        ))}
    </div>
  )
}

export default Row
