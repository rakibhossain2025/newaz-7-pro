import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './Route/Router.jsx'
import CardProvider from './uitilits/Provider/CardProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CardProvider>
      <RouterProvider router={router}></RouterProvider>
    </CardProvider>
  </StrictMode>,
)
