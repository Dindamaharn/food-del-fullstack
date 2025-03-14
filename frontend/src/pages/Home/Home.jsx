import React from 'react'
import './Home.css'
import Header from '../../componens/Header/Header'
import ExploreMenu from '../../componens/ExploreMenu/ExploreMenu'
import { useState } from 'react'
import FoodDisplay from '../../componens/FoodDisplay/FoodDisplay'
import AppDownload from '../../componens/AppDownload/AppDownload'

const Home = () => {

    const[category,setCategory] = useState ("All");

  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <AppDownload/>
    </div>
  )
}

export default Home
