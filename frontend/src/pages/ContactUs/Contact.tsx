import './Contact.css';
import {FacebookOutlined, MailOutlined, CommentOutlined, WhatsAppOutlined} from '@ant-design/icons';


function Contact() {
  return (
    <div className='Layout'>
      <h2 style={{margin: '250px 222px'}} > Contact Us </h2>
      <div className='card'>
        <a href="https://www.facebook.com/S.realmay/" target="_blank" ><FacebookOutlined /></a>
        <a href="mailto:yanika3468@gmail.com"><MailOutlined /></a>
        <a href="line://ti/p/~may_s14"><CommentOutlined  /></a>
        <a href="tel:0952713468"><WhatsAppOutlined /></a>
        <div className='contact'>
          <p style={{marginLeft:'-394px', position:'absolute'}}>เม ย์ </p>
          <p style={{marginLeft:'-230px',position:'absolute'}}>yanika3468@gmail.com </p>
          <p style={{marginLeft:'75px', position:'absolute'}}>@May_s14 </p>
          <p style={{marginLeft:'300px', position:'absolute'}}>095-271-3468 </p>
        </div>
      </div>

      <div className='footer'>
        <div style={{width: '100%',textAlign:'center', boxShadow: '0px 2px 10px #C7C7C7', border: '1px #CCCCCC solid' }}></div>
        <a href="/Admin" target="_blank" > Admin Log in </a>
      </div>

    </div>
  );
}

export default Contact; 
