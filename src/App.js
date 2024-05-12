
import './App.css';
import Head from './Components/Head';
import Body from './Components/Body';
import store from './utils/store';
import { Provider } from 'react-redux';

function App() {
  return ( 

    <Provider store = {store}>
    <div  >
      <Head/>
      <Body/>
    </div>
    </Provider>
  );
}

export default App;
