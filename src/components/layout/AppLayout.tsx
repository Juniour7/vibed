import { Outlet } from "react-router-dom"

// Layout Components
import NavBar from "./navbar/NavBar"
import Footer from "./Footer"
import ScrollToTop from "./ScrollToTop"

const AppLayout = () => {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <NavBar />
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default AppLayout
