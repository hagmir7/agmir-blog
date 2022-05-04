import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.css';
import App from './App';
import i18n from './i18n';
import { HelmetProvider } from 'react-helmet-async';
import { Spin, Space } from 'antd';


const loadingarkup = (
  <div className='d-flex justify-content-center p-5 align-items-center w-100'>
    <Space size="large">
      <Spin size="large" />
    </Space>
  </div>
)


ReactDOM.render(
  <Suspense fallback={loadingarkup}>
    <React.StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </React.StrictMode>
  </Suspense>,
  document.getElementById('root')
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();