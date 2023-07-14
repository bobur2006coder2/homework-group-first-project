import React from 'react'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import Section from './Components/Section/Section'
import MapPage from './Components/YandexMap/MapPage'
import './index.css'

export default function App() {
  return (
    <>
      <Navbar />
      <div className="bg-slate-100">

      <Header />
      <MapPage />
      <Section/>
      <Footer/>
      </div>
    </>
  )
}
