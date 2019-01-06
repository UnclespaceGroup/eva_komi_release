import React, { Component } from 'react'
import desktop from './css/desktop.module.scss'
import mobile from './css/mobile.module.scss'
import { isMobile } from "react-device-detect";
import TopMenu from '../components/TopMenu/TopMenu'

const s = isMobile ? mobile : desktop

class Landing extends Component {
  render(){
    return(
      <div className={s.container}>
        <TopMenu />
      </div>
    )
  }
}
export default Landing
