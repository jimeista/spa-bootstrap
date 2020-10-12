import React from 'react'

export const CustomUserCard = ({ user }) => {
  const { name, username, website } = user
  return (
    <div className='card user-card'>
      <div className='card-body'>
        <h5 className='card-title'>{name}</h5>
        <div className='text-secondary'>
          <label>username:</label>
          <span className='ml-2'>{username}</span>
        </div>
        <div className='text-secondary'>
          <label>website:</label>
          <span className='ml-2'>{website}</span>
        </div>
        <a
          href={`#${name}`}
          data-toggle='collapse'
          data-target={`#${name.split(' ')[0]}`}
          aria-expanded='false'
          aria-controls={`${name}`}
        >
          Show more ..
        </a>
        <div className='collapse m-2 mx-auto' id={`${name.split(' ')[0]}`}>
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </div>
    </div>
  )
}
