import React from 'react'
import { Footer, List, NavBar, Sort, Title } from '../UI'

const MainPage = () => {
  return (
    <div className='mainFrame'>
        <div className='gradient'/>
        <NavBar/>
        <Title/>
        <Sort/>
        <List/>
        <Footer/>
    </div>
  )
}

export default MainPage