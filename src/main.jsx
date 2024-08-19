
import ReactDOM from 'react-dom/client'
import Routing from './Routing.jsx'
import { BrowserRouter } from 'react-router-dom'
import { OrderProvider } from './context/orderContext.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById("root")).render(
  <OrderProvider>
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  </OrderProvider>
);
