import React, { Component } from 'react'
import desktop from './css/desktop.module.scss'
import mobile from './css/mobile.module.scss'
import { isMobile } from "react-device-detect";
import TopMenu from '../components/TopMenu/TopMenu'
import TopPage from "../components/topPage/TopPage";
import Advantages from '../components/Advantages/Advantages'

const s = isMobile ? mobile : desktop

class Landing extends Component {
  render(){
    return(
      <div className={s.container}>
        <TopMenu />
        <TopPage />
        <Advantages />
      </div>
    )
  }
}
export default Landing
