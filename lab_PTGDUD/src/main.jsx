import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Bai1 from './Tuan6/Bai1/bai1.jsx'
import Bai2 from './Tuan6/Bai2/bai2.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      {/* <Bai1 /> */}
      <Bai2 />
    </StrictMode >
  </BrowserRouter>
)
