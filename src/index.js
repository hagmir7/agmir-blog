import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.css';
import App from './App';
import i18n from './i18n';
import { HelmetProvider } from 'react-helmet-async';
import { Spin, Space } from 'antd';


const loadingarkup = (
  <div className='w-100 landig bg-light d-flex justify-content-center align-items-center'>
      <div>
        <Space size="large">
          <Spin size="large" />
        </Space>
      </div>    
   </div>
)


ReactDOM.render(

  <React.StrictMode>
    <HelmetProvider>
      <Suspense fallback={loadingarkup}>
        <App />
      </Suspense>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root')
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();