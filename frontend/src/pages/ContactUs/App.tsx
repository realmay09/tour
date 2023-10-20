import { Layout } from 'antd';
//import Taskbar from '../Detail_package/Header/Taskbar';
import Headers from '../Home/component/Header/Headers';
import Contact from './Contact';

function App() {
  return (
    <Layout>
      
      <Layout style={{ zIndex: 1 }}>
        <Headers />
      </Layout>
      <Layout>
        <Contact />
      </Layout>
      
    </Layout>
  );
}

export default App;
