import React from 'react'

export const CustomCard = ({ title = 'Мои счета' }) => {
  return (
    <div className='card text-dark mt-2 mb-2 custom-card'>
      <div className='card-body pt-1'>
        <div className='position-absolute bookmark'>
          <svg
            width='2em'
            height='2em'
            color='red'
            viewBox='0 0 16 16'
            class='bi bi-bookmark-fill'
            fill='currentColor'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill-rule='evenodd'
              d='M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5V2z'
            />
          </svg>
        </div>
        <div className={'custom-card-title'}>
          <span>{title}</span>
        </div>
        <p>
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </p>
      </div>
    </div>
  )
}
