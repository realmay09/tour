import { Layout } from 'antd';
import homeimg from './assets/homeimg.png'
import styles from './Contentstyle.module.css'

function Contents() {
    return (
        <Layout style={{ overflow: 'hidden' }}>
            <div className={styles.picture}>
                <img className={styles.rectangleIcon} src={homeimg} />
                <div className={styles.textsearch}>Your world of joy</div>
                <div className={styles.textsearch2}>เปิดประสบการณ์แห่งความสนุกได้ทุกที่ทั่วไทย</div>
            </div>
        </Layout>
    );
}

export default Contents;
