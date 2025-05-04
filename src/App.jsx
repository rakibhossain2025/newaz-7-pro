import { Outlet, useLocation } from 'react-router'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {
  const location = useLocation()
  const hideFooter = location.pathname === '/page-not-found'
  return (
    <>

      <section className='bg-[#efefef] '>
        <Header></Header>
        <div className='w-11/12 mx-auto space-y-12 max-w-7xl '>

          <Outlet></Outlet>
          {!hideFooter && <Footer />}
        </div>
      </section>
    </>
  )
}

export default App
