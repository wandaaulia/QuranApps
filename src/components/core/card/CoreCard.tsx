import { Card } from '@mui/material'
import React, { MouseEventHandler } from 'react'

type Props = {
    children: React.ReactElement
    style? : React.CSSProperties

    onClick? : MouseEventHandler<HTMLDivElement> | undefined
}

function CoreCard({children, style,  onClick}: Props) {
  return (
    <Card data-testid="card-surah" style={style} sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '16px 10px', borderRadius: '10px'}} elevation={0}
    onClick={onClick}>
       {children}
        </Card>
  )
}

export default CoreCard