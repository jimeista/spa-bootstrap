import React from 'react'

import { CustomNavbar as Navbar } from './Navbar'

export const Layout = (props) => {
  return (
    <>
      <div className={'top-header'}/>
      <div className={'wrapper'}>
        <Navbar />
        <div className={'layout-wrapper'}>{props.children}</div>
      </div>
    </>
  )
}
