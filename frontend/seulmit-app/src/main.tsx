import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
// import store from './store';
import './index.css';
import App from './App.tsx';

const root = createRoot(document.getElementById('root')!); // "root"는 반드시 존재해야 함.

root.render(
  <StrictMode>
    {/* <Provider> */}
      <App />
    {/* </Provider> */}
  </StrictMode>
);
