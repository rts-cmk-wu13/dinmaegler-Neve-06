
import { Outlet } from 'react-router'
import Header from './Components/Header'
import Footer from './Components/Footer'
import "./styles/reset.scss"
import "./styles/responsivness.scss"
import "./styles/logo.scss"
import "./styles/family.scss"
import "./styles/homeapartments.scss"
import "./styles/footer.scss"

function App() {
 

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer/>
    </>
  )
}

export default App
