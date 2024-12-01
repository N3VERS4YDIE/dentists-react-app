import React, { useContext } from "react"
import Card from "../Components/Card"
import { ContextGlobal } from "../utils/global.context"

const Favs = () => {
  const { state, dispatch } = useContext(ContextGlobal)

  const removeFavoriteDentist = (dentist) => {
    dispatch({ type: "REMOVE_FAVORITE", payload: dentist.id })
    alert(`${dentist.name} removid@ de destacados!`)
  }

  return (
    <main>
      <h1>Dentistas Destacados</h1>
      <div className="card-grid">
        {state.favoriteDentists.length > 0 ? (
          state.favoriteDentists.map((dentist) => (
            <Card
              key={dentist.id}
              id={dentist.id}
              name={dentist.name}
              username={dentist.username}
              buttonText="Remover de destacados"
              onAction={() => removeFavoriteDentist(dentist)}
            />
          ))
        ) : (
          <p>No hay dentistas destacados aún</p>
        )}
      </div>
    </main>
  )
}

export default Favs
