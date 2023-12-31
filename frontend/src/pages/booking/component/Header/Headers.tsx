import { Button, ConfigProvider, Menu, MenuProps } from 'antd';
import { Header } from 'antd/es/layout/layout';
import React, { useState } from 'react'
import LoginPopup from './Components/LoginPopup';
import logo from './assets/logo.png'
import home from './assets/home.png'
import loca from './assets/Explore destinations.png'
import review from './assets/Review.png'
import contact from './assets/Contact Us.png'
import styles from './Headers.module.css'
import { useNavigate } from 'react-router-dom';
import { SizeType } from 'antd/es/config-provider/SizeContext';

function Headers() {
    const navigate = useNavigate();
    const [size] = useState<SizeType>('large'); // default is 'middle'

    const items: MenuProps['items'] = [
        {
            label: 'Home',
            key: 'home',
            icon: <img src={home} />,
        },
        {
            label: 'Explore destinations',
            key: 'app',
            icon: <img src={loca} />,
        },
        {
            label: 'Review',
            key: 'SubMenu',
            icon: <img src={review} />,
        },
        {
            label: 'Contact Us',
            key: 'contact',
            icon: <img src={contact} />,
        },
    ];
    const [current, setCurrent] = useState('app');
    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
        if (e.key == "home") {
            console.log('your select home');
            navigate('/');
        }
        if (e.key == "app") {
            console.log('your select contact');
            navigate('/booking');
        }
    };
    return (
        <Header className={styles.Header}>
            <img src="./carlogo.png" alt="Car Icon" style={{ width: '76.947px', height: '65.079px', margin:3}} />
            <h1 style={{marginTop:'32px', color: '#FC6130', fontSize: '23px', fontFamily: 'Roboto', fontWeight: '700',width:170 }}>Tour in Thailand</h1>
            <ConfigProvider theme={{ token: { colorPrimary: '#FC6130',},}}>
            <Menu className={styles.menu} onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
            </ConfigProvider>
        </Header>
    );
}

export default Headers;