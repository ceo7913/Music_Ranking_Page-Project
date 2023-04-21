import "./styles/styles.min.css"
import Router from './router';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import rootReducer from './redux/reducers/index';
import { Provider } from 'react-redux';
import { NavBar } from "./components/UI";

function App() {
  const store = createStore(rootReducer);
  return (
    <Provider store={store}>
       <BrowserRouter>
          <div className="App">
            <NavBar/>
            <Router/>
          </div>
       </BrowserRouter>
    </Provider>
  );
}

export default App;
