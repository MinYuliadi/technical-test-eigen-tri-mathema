import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ListNews from '../modules/news/ListNews'
import DetailNews from '../modules/news/DetailNews'

const Routers = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<ListNews />} />
            <Route path='/news/:id' element={<DetailNews />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Routers