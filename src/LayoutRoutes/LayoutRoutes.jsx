import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Dishes from '../pages/dishes/Dishes'
import Home from '../pages/Home/Home'
import Booking from '../pages/booking/Booking'
import About from '../pages/About/About'
import NotFound from '../pages/NotFound/NotFound'




function LayoutRoutes() {
  return (
    <Router>
<Header/>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/FoodFactory-Restuarant-App' element={<Home/>}/>
<Route path='/dishes' element={<Dishes/>}/>
<Route path='/services' element={<Booking/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/*' element={<NotFound/>}/>

</Routes>
<Footer/>
    </Router>
  )
}

export default LayoutRoutes
