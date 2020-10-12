import React from 'react'

export const CustomSpinner = () => {
  return (
    <div className='d-flex justify-content-center'>
      <div className='spinner-border m-5 text-primary' role='status'>
        <span className='sr-only'>Loading...</span>
      </div>
    </div>
  )
}
