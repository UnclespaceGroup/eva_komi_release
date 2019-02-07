import React, { Component } from 'react'
import desktop from './css/desktop.module.scss'
import mobile from './css/mobile.module.scss'
import { isMobile } from 'react-device-detect'
import im1 from '../../static/img/price_low.jpg'
import im2 from '../../static/img/price_m_down.jpg'
import im3 from '../../static/img/price_m_up.jpg'
import im4 from '../../static/img/price_big.png'
import _ from 'lodash'
import Item from './Item'

const s = isMobile ? mobile : desktop

const t = {
  items: [
    {
      image: im1,
      title: 'До 1 тонны',
      text: 'Легковые малолитражные автомобили',
      price: '1500₽'
    },
    {
      image: im2,
      title: 'До 1.5 тонн',
      text: 'Легковые автомобили, легкие внедорожники',
      price: '1700₽'
    },
    {
      image: im3,
      title: 'До 2 тонны',
      text: 'Внедорожники и кроссоверы',
      price: '1900₽'
    },
    {
      image: im4,
      title: 'До 2.5 тонн',
      text: 'Тяжелые внедорожники и микроавтобусы',
      price: '2100₽'
    }
  ]
}

class Price extends Component {
  render () {
    const {
      items
    } = t
    return (
      <div className={s.background}>
        <div className={s.container}>
          {
            _.map(items, (item, key) =>
              <Item key={key} {...item} />
            )
          }
        </div>
      </div>
    )
  }
}

export default Price
