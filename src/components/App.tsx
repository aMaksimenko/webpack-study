import styles from './App.module.scss';
import {Link, Outlet} from "react-router-dom";
import avatarPng from '@/assets/avatar.png';
import avatarJpg from '@/assets/avatar.jpg';
import CalendarSvg from '@/assets/calendar.svg';

export function App() {

    setTimeout(() => {
        throw new Error('test');
    }, 1000);


    return (
        <div className={styles.app}>
            <h1>platform: {__PLATFORM__}</h1>
            <img width={24} src={avatarPng} alt=""/>
            <img width={24} src={avatarJpg} alt=""/>
            <CalendarSvg width={50} height={50}/>
            <br/>
            <Link to={'/about'}>About</Link>
            <br/>
            <Link to={'/shop'}>Shop</Link>
            <h1>React App</h1>
            <Outlet/>
        </div>
    )
}
