import './App.css';
import Routes from './Routes';
import store from './Redux/Store'
import 'antd/dist/antd.css'
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ToastContainer />
        <Routes />
      </Provider>
    </div>
  );
}
export default App;