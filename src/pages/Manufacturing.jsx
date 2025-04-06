import React from 'react'
import ServiceBanner from '../components/Common/ServiceBanner'
import { Manufacturing as allData } from '../data/ServicesData'
import Profile from '../components/Manufacturing/Profile'
import UniteTable from '../components/Manufacturing/UniteTable'
import Applications from '../components/Common/Applications'
import Units from '../components/Manufacturing/Unites'

const Manufacturing = () => {
  const pageName = "Manufacturing Units"
  return (
    <div>
     <ServiceBanner data={allData.banner} ServiceName={pageName}  />
     <Profile/>
     <UniteTable/>
     <Applications data={allData.Applications} />
     <Units data={allData.units} />
    </div>
  )
}

export default Manufacturing
