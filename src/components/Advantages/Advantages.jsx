import React, { Component } from 'react'
import desktop from './css/desktop.module.scss'
import mobile from './css/mobile.module.scss'
import { isMobile } from 'react-device-detect'
import im1 from '../../static/img/advantage1.png'
import im2 from '../../static/img/advantage2.png'
import im3 from '../../static/img/advantage3.png'
import im4 from '../../static/img/advantage4.png'
import _ from 'lodash'
import Item from './Item'

const s = isMobile ? mobile : desktop

const t = {
  items: [
    {
      image: im1,
      title: 'Быстрый эвакуатор',
      text: 'Время ожидания заказа 20 минут'
    },
    {
      image: im2,
      title: 'Только позвони',
      text: <div>Для заказа достаточно позвонить <a href={'tel:320111'}><big>320-111</big></a> </div>
    },
    {
      image: im3,
      title: 'Работаем круглосуточно',
      text: 'Оператор всегда на связи, 24 часа в сутки, 7 дней в неделю '
    },
    {
      image: im4,
      title: 'Приемливая цена',
      text: 'Низкая цена за качественное обслуживание'
    }
  ]
}

class Advantages extends Component {
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

export default Advantages
