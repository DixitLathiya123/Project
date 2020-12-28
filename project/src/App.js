import './App.css';
import Routing from './Routing';
import store from './Redux/Store'
import 'antd/dist/antd.css'
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ToastContainer />
        <Routing />
      </Provider>
    </div>
  );
}

export default App;
