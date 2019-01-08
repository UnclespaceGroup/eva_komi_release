import React, {Component} from 'react'
import './css/desktop.module.scss'
import mobile from "./css/mobile.module.scss";
import desktop from "./css/desktop.module.scss";
import {isMobile} from "react-device-detect";
import _ from "lodash";

const s = isMobile ? mobile : desktop
const t = {
    text: 'От аварий и ДТП никто не застрахован. Аварии случаются и владельцам требуются услуги по эвакуации. Также бывают моменты, когда требуется доставить неисправный автомобиль в другое место, или даже в другой город.\n' +
        'Эва-коми - Компания с огромным стажем по оказанию услуг эвакуации. \n' +
        'Мы работаем по всей республике. Можем эвакуировать авто в любой населённый пункт, как по республике, так и по всей России. Для консультации или заказа эвакуатора вам доступны следующие номера:',
    numbers: [
        '+7(912) 864-01-11',
        '+7(821) 234-01-11',
        '+7(963) 022-16-79'
    ]
}
class Description extends Component {
    render() {
        return (
            <div className={s.wrapper}>
                <span>
                    {t.text}
                </span>
                <ul>
                    {
                        _.map(t.numbers, (item, key) =>
                        <li key={key}>{item}</li>
                        )
                    }
                </ul>
                <span></span>
            </div>
        )
    }
}

export default Description
