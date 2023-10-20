import { Button, ConfigProvider, Menu, MenuProps, Popconfirm, message,Avatar } from 'antd';
import { UserOutlined ,CaretDownOutlined} from '@ant-design/icons';

import { Header } from 'antd/es/layout/layout';
import React, { useEffect, useState } from 'react'
import LoginPopup from './Components/LoginPopup';
import carlogo from './assets/โลโก้.png'
import logo from './assets/logo.png'
import home from './assets/home.png'
import loca from './assets/Explore destinations.png'
import review from './assets/Review.png'
import contact from './assets/Contact Us.png'
import styles from './Headers.module.css'
import { useNavigate } from 'react-router-dom';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import { member } from './Components/LoginPopup';
import { relative } from 'path';

function Headers() {
    const navigate = useNavigate();
    const [size] = useState<SizeType>('large'); // default is 'middle'

    const imageUrls = [
        'cat2.jpg',
        'avata.jpg',
        'cat3.jpg',
        'cat4.jpg',
        'cat5.jpg',
      ];

    function getRandomImage() {
        const randomIndex = Math.floor(Math.random() * imageUrls.length);
        return imageUrls[randomIndex];
    }
    const randomImageUrl = getRandomImage();

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
            console.log("statuslogin : ", islogin)
            console.log(member)
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

    useEffect(() => {
        const userIsLoggedIn = member ? true : false;
        setIslogin(userIsLoggedIn);
    }, [member])

    const [islogin, setIslogin] = useState(false);
    const [isLoginPopupOpen, setState] = useState(false);
    const successes = () => {
        setState(true);
    }
    const closePopup = () => {
        setState(false);
        setIslogin(false);
    };

    const logout = () => {
        setIslogin(false);
        window.location.href = "/";
    }
    console.log(isLoginPopupOpen);

    const confirm = (e?: React.MouseEvent<HTMLElement>) => {
        console.log(e);
        message.success('Log out success');
        logout()
    };
    const cancel = (e?: React.MouseEvent<HTMLElement>) => {
        console.log(e);
    };

    return (
        <Header className={styles.Headerbar}>
            <img src={carlogo} alt="Car Icon" style={{ width: '40px', height: '40px', margin: '6px 0px' }} />
            <h1 style={{ margin: '20px 8px', color: '#FC6130', fontSize: '20px', fontFamily: 'Roboto', fontWeight: 600 }}>Tour in Thailand</h1>
            <ConfigProvider theme={{ token: { colorPrimary: '#FC6130'}, }}>
                <Menu className={styles.menu} style={{}} onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
            </ConfigProvider>
            {isLoginPopupOpen && <LoginPopup
                onClose={closePopup} />}

            {islogin ? 
                // แสดง Avatar แทนปุ่ม Log out เมื่อผู้ใช้เข้าสู่ระบบ
                <div>
                    <div className= {styles.avatar} >
                        <Avatar src= {randomImageUrl} alt= 'phoflie' size={45} icon={<UserOutlined />} />
                    </div>

                    <div className= {styles.Menu}>
                        <button className={styles.dropbtn}> <CaretDownOutlined /></button>
                        <div className={styles.Menucontent}>
                            <a href="/">Home</a>
                            <a href="/review">Review </a>
                            <a href="/booking">My Booking</a>
                            <a href="/Contact">Contact Us</a>
                            <Popconfirm
                                 title="Logout"
                                 description="Are you sure to Logout?"
                                 onConfirm={confirm}
                                 onCancel={cancel}
                                 okText="Yes"
                                 cancelText="No" > 
                                 <button className={styles.buttonmanu} style={{backgroundColor: '#FC6130'}}>
                                    <p style={{color:'white', fontSize: '18px',fontFamily:'Roboto', fontWeight: 550}}> Log out</p>
                                 </button>
                            </Popconfirm>
                        </div>                               
                    </div>
                </div>
         
                : <Button className={styles.buttonstyle} style={{ borderRadius: '29px', backgroundColor: '#fc6130' }} type="primary" onClick={successes} size={size}>
                   <p style={{margin:'-5px', fontFamily: 'Roboto', fontSize: '20px', fontWeight:700, color: 'white'}}>Log in</p>
                </Button>
            }

        </Header>
    );
}

export default Headers;