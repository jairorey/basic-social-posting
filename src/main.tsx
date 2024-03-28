
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <main className='container'>
        <App />
    </main>
  </BrowserRouter>
)
