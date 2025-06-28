import { Outlet } from "react-router"
import Header from "./Components/Header"


function App() {
  

  return (
   <>
    <Header/>
    <Outlet/>
    <Footer/>
   </>
  )
}

export default App
