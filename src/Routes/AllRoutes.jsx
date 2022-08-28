import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Sale from './Sale'
import Women from './Women'
import Men from "./Men"
import Kids from "./Kids"
import YoungAdult from "./YoungAdult"
import Activewear from "./Activewear"
import Home from "./Home"
import Beauty from "./Beauty"
import Designer from "./Designer"
import Gifts from "./Gifts"
import Brands from "./Brands"
import Signin from './Signin'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Sale/>}/>
        <Route path="/women" element={<Women/>}/>
        <Route path="/men" element={<Men/>}/>
        <Route path="/kids" element={<Kids/>}/>
        <Route path="/youngadult" element={<YoungAdult/>}/>
        <Route path="/activewear" element={<Activewear/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/beauty" element={<Beauty/>}/>
        <Route path="/designer" element={<Designer/>}/>
        <Route path="/gifts" element={<Gifts/>}/>
        <Route path="/brands" element={<Brands/>}/>
        <Route path="/signin" element={<Signin/>}/>
    </Routes>
  )
}

export default AllRoutes
