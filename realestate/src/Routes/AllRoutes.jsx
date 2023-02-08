import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { PropertyList } from '../Pages/PropertyList'
import Signup from '../Pages/SignUp'
import { SinglePage } from '../Pages/SinglePage'

export const AllRoutes = () => {
  return (
    <>

    <Routes>
      <Route path='/' element={<PropertyList/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/details/:id' element={<SinglePage/>}/>
    </Routes>
    
     </>
  )
}
