import React, { Component } from 'react'
import desktop from './css/desktop.module.scss'
import mobile from './css/mobile.module.scss'
import { isMobile } from "react-device-detect";
import _ from 'lodash'

const s = isMobile ? mobile : desktop

const t = {
  items: [
    {
      title: 'Быстрый заказ эвакуатора',
      href: 'tel: 340111'
    }
  ]
}

class TopMenu extends Component {
  render(){
    const {
      items
    } = t
    return(
      <div className={s.container}>
        <div className={s.items}>
          {
            _.map(items, ({title, href}, key) =>
            <a key={key} href={href} >{title}</a>
            )
          }
        </div>
      </div>
    )
  }
}
export default TopMenu
