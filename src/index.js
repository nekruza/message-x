import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Containers/App/App';
import reportWebVitals from './reportWebVitals';
import store from './store/index';

const root = ReactDOM.createRoot(document.getElementById('root'));

const render = () => {
  return root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}
render()

store.subscribe(render);

reportWebVitals();
