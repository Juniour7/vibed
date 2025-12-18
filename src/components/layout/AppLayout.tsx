import { Outlet } from "react-router-dom"

// Layout Components
import NavBar from "./navbar/NavBar"
import Footer from "./Footer"

const AppLayout = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default AppLayout
