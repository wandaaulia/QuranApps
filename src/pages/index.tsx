import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import AppbarMain from '../components/AppbarMain'
import { Card, CardContent, Tab, Typography } from '@mui/material'
import { Box } from '@mui/system'
import TabMain from '../components/core/TabMain'
import CardList from '../components/module/surah/CardList'
import BookmarkBorderSharpIcon from '@mui/icons-material/BookmarkBorderSharp';



export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
     <AppbarMain />
     <Box> 
     <Card className="cardImg">
     <Box className="imgHome"> 
      <Image src="/img/alquran-transparent.png" alt="imgHome" width={120} height={120}/> 
      </Box>
       <CardContent>
        <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '2px'}}> 
          <BookmarkBorderSharpIcon />
          <Typography sx={{fontSize: '12px'}}>  Last Read </Typography>
        </Box>
       
         <Box sx={{marginTop: '40px'}}>
         <Typography sx={{fontSize: '18px',fontWeight: '700'}}> Al-Faatiha </Typography>
         <Typography sx={{fontSize: '13px', fontWeight: '300', marginTop: '10px'}}> Ayah No.3 </Typography>
         </Box>
       </CardContent>
     </Card>
    <TabMain />
    <Box sx={{marginTop: '20px'}}> 
    <CardList />
    </Box>
  
     </Box>

     
      </main>
    </>
  )
}