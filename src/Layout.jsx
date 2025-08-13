
import { Outlet } from 'react-router'
import Header from './Components/Header'
import "./styles/reset.scss"
import "./styles/responsivness.scss"
import "./styles/logo.scss"
import "./styles/family.scss"
import "./styles/homeapartments.scss"

function App() {
 

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>
      </footer>
    </>
  )
}

export default App
