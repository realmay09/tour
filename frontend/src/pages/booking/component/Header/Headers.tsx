import { Button, ConfigProvider, Menu, MenuProps, Popconfirm, message } from 'antd';
import { Header } from 'antd/es/layout/layout';
import React, { useEffect, useState } from 'react'
import logo from './assets/logo.png'
import carlogo from './assets/โลโก้.png'
import home from './assets/home.png'
import loca from './assets/Explore destinations.png'
import review from './assets/Review.png'
import contact from './assets/Contact Us.png'
import styles from './Headers.module.css'
import './Headers.module.css'
import { useNavigate } from 'react-router-dom';
import { SizeType } from 'antd/es/config-provider/SizeContext';

function Headers() {
    const navigate = useNavigate();
    const [size] = useState<SizeType>('large'); // default is 'middle'

    const items: MenuProps['items'] = [
        {
            label: 'Home',
            style:{left:'-5px'},
    
            key: 'home',
            icon: <img src={home}
            style={{position:'absolute', margin:'19px -15px',height:'21px'}} />,
        },
        {
            label: 'Explore destinations',
            key: 'app',
            icon: <img src={loca} 
            style={{position:'absolute', margin:'19px -12px',height:'21px'}}/>,
        },
        {
            label: 'Review',
            style:{left:'8px'},
            key: 'review',
            icon: <img src={review} 
            style={{position:'absolute', margin:'19px -15px',height:'21px'}}/>,
        },
        {
            label: 'Contact Us',
            style:{left:'20px'},
            key: 'contact',
            icon: <img src={contact} 
            style={{position:'absolute', margin:'18px -19px',height:'28px'}}/>,
        },
    ];
    const [current, setCurrent] = useState('home');
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
        if (e.key == "review") {
            console.log('your select contact');
            navigate('/Review');
        }
        if (e.key == "contact") {
            console.log('your select contact');
            navigate('/ContactUs');
        }
    };


    return (
        <Header className={styles.Headerbar}>
            <img src={carlogo} alt="Car Icon" style={{ width: '40px', height: '40px', margin: '6px 0px' }} />
            <h1 style={{ margin: '20px 8px', color: '#FC6130', fontSize: '20px', fontFamily: 'Roboto', fontWeight: 600 }}>Tour in Thailand</h1>
            
            <ConfigProvider theme={{ token: { colorPrimary: '#FC6130'} }}>
                <Menu
                    className={styles.menu}
                    onClick={onClick}
                    selectedKeys={[current]}
                    mode="horizontal"
                    items={items}
                />
            </ConfigProvider>


        </Header>
    );
}

export default Headers;




