import React from 'react'

export const CardSponsors = ({ data }) => {
  return (
    <div className='card-sponsors'>
      <div className='card-sponsors__content'>
        <img src={data.logo} alt='logo sponsor'/>
      </div>
    </div>
  )
}
