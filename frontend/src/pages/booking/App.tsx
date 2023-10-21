import { Layout } from 'antd';
import Headers from '../Home/component/Header/Headers';
import Booking from './Booking';
function App() {
  return (
    <Layout>
      
      <Layout style={{ zIndex: 1 }}>
        <Headers />
      </Layout>
      <Layout>
        <Booking />
      </Layout>
      
    </Layout>
  );
}

export default App;
