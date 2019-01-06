import React, { Component } from 'react'
import desktop from './css/desktop.module.scss'
import mobile from './css/mobile.module.scss'
import { isMobile } from "react-device-detect";

const s = isMobile ? mobile : desktop

class Item extends Component {
  render(){
    const {
      image,
      title,
      text
    } = this.props
    return(
      <div className={s.wrapper}>
        <div className={s.image} style={{backgroundImage: `url(${image})`}} />
        <div className={s.title}>{title}</div>
        <div className={s.text}>{text}</div>
      </div>
    )
  }
}
export default Item
