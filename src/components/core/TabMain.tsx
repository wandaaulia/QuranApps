import { Box, Tab, Tabs } from '@mui/material'
import React from 'react'

type Props = {}


const menus = [
    {
        name: 'Surah'
    },
    {
        name: 'Dua'
    }, {
        name: 'Lecture'
    }
]

function TabMain({}: Props) {
    const [value, setValue] = React.useState('one');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '350px', marginTop: '10px'}}>
    <Tabs
      value={value}
      onChange={handleChange}
      textColor="secondary"
      variant="fullWidth"
      TabIndicatorProps={{
        sx: {
          display: 'none'
        }
      }}
      sx={{
        padding: '4px 4px',
        backgroundColor: 'white',
        marginTop: '30px',
        minHeight: '20px',
        display: 'flex',
        '& button.Mui-selected': {
          backgroundColor: '#1FA06E',
          color: 'white',
          borderRadius: '6px 6px'
      },
      '& button' : {
        fontSize: '12px',
        fontWeight: '500',
        margin: 'auto 2px'
      }
      }}
    
    >

        { menus.map((item, index) => (
            <Tab key={index} value={item.name} label={item.name} />
        ))}

     
    </Tabs>
  </Box>
  )
}

export default TabMain