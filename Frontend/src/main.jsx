
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import AuthProvider from './Context/AuthProvider';
import PaymentProvider from './Context/PaymentContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
    <BrowserRouter>
     <AuthProvider>
      <PaymentProvider>
        <App/>
      </PaymentProvider>
     </AuthProvider>
    </BrowserRouter>
  
);
