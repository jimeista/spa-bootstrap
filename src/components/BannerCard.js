import React from 'react'

export const BannerCard = ({ footer, img }) => {
  return (
    <div className='card banner-card'>
      {footer && <img src={img} className='banner-img' alt='...' />}
      {footer === null && (
        <div class='card-body'>
          <span>{'Обмен валют:'}</span>
        </div>
      )}
      {footer && <div className={`card-footer banner-footer`}>{footer}</div>}
    </div>
  )
}
