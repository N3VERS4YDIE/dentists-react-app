import React, { useContext, useEffect, useState } from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from '../utils/global.context'

const Home = () => {
  const [dentists, setDentists] = useState([])

  const { dispatch } = useContext(ContextGlobal)

  const addFavorite = (dentist) => {
    dispatch({ type: "ADD_FAVORITE", payload: dentist })
    alert(`${dentist.name} añadid@ a destacados!`)
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setDentists(data))
      .catch(error => console.error('Error fetching dentists:', error))
  }, [])

  return (
    <main>
      <h1>Inicio</h1>
      <div className="card-grid">
        {dentists.map(dentist => (
          <Card
            key={dentist.id}
            id={dentist.id}
            name={dentist.name}
            username={dentist.username}
            buttonText="Añadir a destacados"
            onAction={() => addFavorite(dentist)}
          />
        ))}
      </div>
    </main>
  )
}

export default Home
