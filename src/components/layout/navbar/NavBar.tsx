
// NavBar components
import NavSm from "./NavSm"
import NavLg from "./NavLg"

const NavBar = () => {
  return (
    <nav>
        <div className="hidden md:block"><NavLg /></div>
        <div className="block md:hidden"><NavSm /></div>
    </nav>
  )
}

export default NavBar
