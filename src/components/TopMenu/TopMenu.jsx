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
    },
    {
      title: 'Цены за вызов',
      href: 'tel: 340111'
    },
    {
      title: 'Об эвакуации',
      href: 'tel: 340111'
    }
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
            _.map(items, ({title, href}, key) =>
            <a className={s.item} key={key} href={href} >{title}</a>
            )
              :
              _.map(items, ({title, href}, key) =>
                <a className={s.item} key={key} href={href} >{title}</a>
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
