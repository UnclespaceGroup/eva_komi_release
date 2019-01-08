import React, { Component } from 'react'
import desktop from './css/desktop.module.scss'
import mobile from './css/mobile.module.scss'
import { isMobile } from 'react-device-detect'
import image from '../../static/img/map.png'

const s = isMobile ? mobile : desktop

const t = {
  image: image,
  title: 'Перевозки за городом и по России',
  description: ''
}

class Banner extends Component {
  render () {
    const {
      image,
      title,
      description
    } = t
    return (
      <div className={s.container}>
        <div className={s.left}>
          <div className={s.image} style={{backgroundImage: `urg(${image})`}} />
        </div>
        <div className={s.right}>
          <div className={s.title}>{title}</div>
          <div className={s.description}>{description}</div>
        </div>
      </div>
    )
  }
}

export default Banner
