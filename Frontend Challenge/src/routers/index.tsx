import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ListNews from '../modules/news/containers/ListNews'
import DetailNews from '../modules/news/containers/DetailNews'

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