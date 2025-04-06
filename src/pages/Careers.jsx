import React from 'react'
import Batges from '../components/careers/Batges'
import CareerBenefits from '../components/careers/CareerBenefits'
import Orders from '../components/careers/Orders'
import Profile from '../components/careers/Profile'
import Statistics from '../components/careers/Statistics'
import CareerBanner from '../components/careers/CareerBanner'

const Careers = () => {
  return (
    <div>
      <CareerBanner/>
      <Profile/>
      <Statistics/>
      <Orders/>
      <Batges/>
      <CareerBenefits/>
    </div>
  )
}

export default Careers
