import React, { createContext, useReducer, useMemo, useEffect } from "react"
import PropTypes from "prop-types"

export const initialState = {
  theme: "light",
  favoriteDentists: JSON.parse(localStorage.getItem("favoriteDentists")) || [],
}

const globalReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      }

    case "ADD_FAVORITE":
      if (state.favoriteDentists.some((dentist) => dentist.id === action.payload.id)) {
        return state
      }
      return {
        ...state,
        favoriteDentists: [...state.favoriteDentists, action.payload],
      }

    case "REMOVE_FAVORITE":
      return {
        ...state,
        favoriteDentists: state.favoriteDentists.filter((dentist) => dentist.id !== action.payload),
      }

    default:
      return state
  }
}

export const ContextGlobal = createContext()

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState)

  useEffect(() => {
    localStorage.setItem("favoriteDentists", JSON.stringify(state.favoriteDentists))
  }, [state.favoriteDentists])

  const value = useMemo(() => ({ state, dispatch }), [state])

  return <ContextGlobal.Provider value={value}>{children}</ContextGlobal.Provider>
}

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
