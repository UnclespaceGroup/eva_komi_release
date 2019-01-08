import React, { Component } from 'react'
import desktop from './css/desktop.module.scss'
import mobile from './css/mobile.module.scss'
import { isMobile } from "react-device-detect";
import _ from 'lodash'
import Scrollchor from 'react-scrollchor'

const s = isMobile ? mobile : desktop

const t = {
  items: [
    <a className={s.item} href={'tel:340111'}>Звони 340-111</a>,
    <Scrollchor animate={{offset: 20, duration: 600}} className={s.item} to="price" >К ценам</Scrollchor>,
    <a className={s.item} href={'http://www.consultant.ru/law/podborki/jevakuaciya_avtomobilya/'} target={' _blank'}>Об эвакуации</a>
  ]
}

class TopMenu extends Component {
  state = {
    open: false
  }
  render(){
    const {
      items
    } = t
    const {
      state: {
        open
      },
      click
    } = this
    return(
      <div className={s.container}>
        <div className={s.items}>
          {
            isMobile ? open &&
            _.map(items, (item, key) =>
            <div className={s.item} key={key}>{item}</div>
            )
              :
              _.map(items, (item, key) =>
                <div className={s.item} key={key} >{item}</div>
              )
          }
          {
            isMobile ?
              <div className={s.top}>
                <a href={'tel: 340111'} className={s.button}>Быстрый вызов</a>
                <div className={s.burger} onClick={click}/>
              </div>

              :<a href={'tel: 340111'} className={s.button}>Быстрый вызов</a>
          }
        </div>
      </div>
    )
  }
  click = () => {
    const { open } = this.state
    this.setState({open: !open})
  }
}
export default TopMenu
