import React from 'react'
import Banner from '../Banner/Banner'
import Service from '../Service/Service'
import Testimonial from '../Testimonial/Testimonial'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { resetRediect } from '../../../Toolkit/authSlice'

const Home = () => {
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(resetRediect(null));
  }, [dispatch])
  return (
    <>
    <Banner/>
    
    <Service/>
    <Testimonial/>
    </>
  )
}

export default Home
