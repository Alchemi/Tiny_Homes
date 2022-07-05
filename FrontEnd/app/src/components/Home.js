import React from 'react'
import Hero from './hero/Hero'
import Best from './best/Best'
import Navbar from './navbar/Navbar'
import Footer from './footer/Footer'

export function Home(){
        return (
      //hero goes inbetween navbar and best took it because it was pushing navbar out of the screen
      
            <>
            <Navbar />
            <Hero />
            <Best />
            <Footer />
            </>
            
            
         
        )
}