import React, {Component} from 'react'
import desktop from './css/desktop.module.scss'
import mobile from './css/mobile.module.scss'
import {isMobile} from "react-device-detect";
import TopMenu from '../components/TopMenu/TopMenu'
import TopPage from "../components/topPage/TopPage";
import Footer from "../components/Footer/Footer";
import Price from '../components/Price/Price'
import Advantages from '../components/Advantages/Advantages'
import Banner from '../components/Banners/Banner'
import Description from "../components/Description/Description";

const s = isMobile ? mobile : desktop

class Landing extends Component {
  render(){
    return(
      <div className={s.container}>
        <TopMenu />
        <TopPage />
        <Advantages />
        <div id="price" />
        <Banner/>
        <Price />
          <Description />
        <Footer/>
      </div>
    )
  }
}

export default Landing
