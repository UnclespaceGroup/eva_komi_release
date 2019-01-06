import React, {Component} from 'react'
import './css/desktop.module.scss'
import logo from '../../static/img/logo.png'
import mobile from "./css/mobile.module.scss";
import desktop from "./css/desktop.module.scss";
import {isMobile} from "react-device-detect";

const s = isMobile ? mobile : desktop
class Footer extends Component {
    render() {
        return (
            <div className={s.footer}>

                <div className={s.wrap}>
                    <ul className={s.contacts}>
                        Контакты:
                            <li className={s.address}>
                                Сыктывкар
                            </li>
                            <li className={s.phone}>
                              89992998610
                            </li>
                            <li className={s.mail}>
                                dev@UncleSpace.ru
                            </li>
                    </ul>
                    <div>
                        <a className={s.logo} target={'_blank'} href={'https://unclespace.ru/'}><img src={logo} alt={'im'} /> </a>
                    </div>
                </div>
                    <div className={s.description}>
                        © 2019 UncleSpace Group.
                    </div>
            </div>

        )
    }
}

export default Footer
