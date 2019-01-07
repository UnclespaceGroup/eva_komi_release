import React, { Component } from 'react'
import desktop from './css/desktop.module.scss'
import mobile from './css/mobile.module.scss'
import { isMobile } from 'react-device-detect'

const s = isMobile ? mobile : desktop

class Layout extends Component{
  render() {
    const { children } = this.props
    return(
      <div className={s.layout}>
        {children}
      </div>
    )
  }
}
export default Layout
