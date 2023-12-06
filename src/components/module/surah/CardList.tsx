import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import CoreCard from '../../core/card/CoreCard'

type Props = {}

const menus = [
    {   
        id: 1,
        name: 'Al-Faatiha',
        city: 'Mecca',
        ayah: '7'
    },
    {
        id: 2,
        name: 'Al-Faatiha',
        city: 'Mecca',
        ayah: '7'
    },
    {
        id: 3,
        name: 'Al-Faatiha',
        city: 'Mecca',
        ayah: '7'
    }
]

function CardList({ }: Props) {
    return (
        <>

        { menus.map((item, index) => (
  <CoreCard key={item.id} style={{marginBottom: '15px'}}>
  <>
      <Box sx={{ textAlign: 'center', borderColor: '#1FA06E', borderWidth: '2px', borderStyle: 'solid', width: '25px', height: '25px', borderRadius: '50%', color: 'green' }}>
         {index+1}
      </Box>
      <Box sx={{ marginLeft: '20px' }}>
          <Typography color="#356B5C" sx={{ fontWeight: '700', lineHeight: '30px' }}> {item.name} </Typography>
          <Typography color="#C6DAD4" sx={{ fontSize: '12px' }}> {item.city}, {item.ayah} Ayah </Typography>
      </Box>
  </>
</CoreCard>
        ))}
          
        </>
    )
}

export default CardList