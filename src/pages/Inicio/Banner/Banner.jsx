import React from 'react'

export const Banner = () => {
  return (
    <div className='banner-container'>
      <div className='banner-overlay'></div>
      <h2 className='banner-title'>
        Disfruta de la mejor musica sin anuncios!
      </h2>
      <div className='banner-image-container'>
        <img src={`assets/lp.jpg`} alt='banner-image' className='banner-img' />
      </div>
    </div>
  )
}
