import { Layout } from 'antd';
import Contents from './component/Contents';
import ContentPackage from './component/ContentPackage';
import Headers from './component/Header/Headers';
const { Content } = Layout;

function Home() {
    return (
        <div>   
            <div style={{zIndex: 3,position:'relative'}}> 
                <Headers />
            </div>
            <Content style={{ background: '#fff', paddingBottom: 100 , overflow:'hidden' }}>
                <Contents />
                <div>
                    <ContentPackage />
                </div>
            </Content>
        </div>
    );
}

export default Home;