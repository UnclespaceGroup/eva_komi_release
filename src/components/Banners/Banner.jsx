import React, { Component } from 'react'
import desktop from './css/desktop.module.scss'
import mobile from './css/mobile.module.scss'
import { isMobile } from 'react-device-detect'
import image from '../../static/img/map.png'
import Layout from '../Layout/Layout'

const s = isMobile ? mobile : desktop

const t = {
  image: image,
  title: 'Перевозки за городом и по России',
  description:
    <div>
    <p>Междугородние перевозки, по России и республике Коми</p>
      <span>от <big>40р</big> за километр</span>
      <p><small>*Подробности следует обсудить</small></p>
  </div>
}

class Banner extends Component {
  render () {
    const {
      image,
      title,
      description
    } = t
    return (
      <Layout>
        <div className={s.container}>
          <div className={s.left}>
            <div className={s.image} style={{backgroundImage: `url(${image})`}} />
          </div>
          <div className={s.right}>
            <div className={s.title}>{title}</div>
            <div className={s.description}>{description}</div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Banner
