import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { ContextGlobal } from "../utils/global.context"

const Navbar = () => {
  const { state, dispatch } = useContext(ContextGlobal)

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" })
  }

  return (
    <nav className={state.theme === "dark" ? "navbar dark" : "navbar light"}>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/favs">Destacados</Link></li>
        <li><Link to="/contact">Contacto</Link></li>
      </ul>
      <button onClick={toggleTheme}>
        Cambiar a modo {state.theme === "light" ? "oscuro 🌙" : "claro ☀️"}
      </button>
    </nav>
  )
}

export default Navbar
