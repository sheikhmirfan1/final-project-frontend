
import ReactDOM from 'react-dom/client'
import Routing from './Routing.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './auth/Auth.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  </AuthProvider>
);
