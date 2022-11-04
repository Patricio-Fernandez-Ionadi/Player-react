import React from 'react'

export const Banner = () => {
  return (
    <article
      className='banner-container'
      style={{ height: `${window.innerHeight}px` }}
    >
      <div className='banner-overlay'></div>
      <h2 className='banner-title'>
        Disfruta de la mejor musica sin anuncios!
      </h2>
      <figure className='banner-image-container'>
        <img src={`assets/lp.jpg`} alt='banner-image' className='banner-img' />
      </figure>
    </article>
  )
}
