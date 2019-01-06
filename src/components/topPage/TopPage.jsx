import React, {Component} from 'react'
import desktop from './css/desktop.module.scss'
import mobile from './css/mobile.module.scss'
import {isMobile} from "react-device-detect";
import _ from 'lodash'

const s = isMobile ? mobile : desktop
const t = {
    title: 'Закажите эвакуатор',
    second_title: 'Звони 340-111',
    description: [
            'Круглосуточная работа, без выходных',
            'Сыктывкар и Республика Коми',
            'Дешёвый и доступный эвакуатор',
    ]

}

class TopPage extends Component {
    render() {
        return (
            <div className={s.background}>
                <div className={s.container}>
                    <div className={s.title}>
                        <h1>{t.title}</h1>
                        <a href={'tel:340111'}>Вызвать</a>
                    </div>
                    <div className={s.description}>
                        <h2>{t.second_title}</h2>
                        <ul>
                        {
                            _.map(t.description, (item, key) =>
                            <li key={key}>{item}</li>
                            )
                        }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default TopPage