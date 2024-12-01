import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
  const { id } = useParams()
  const [dentist, setDentist] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchDentist = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        if (!response.ok) {
          throw new Error('Failed to fetch dentist details')
        }
        const data = await response.json()
        setDentist(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchDentist()
  }, [id])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <main>
      <h1>Detalle de dentista</h1>
      {dentist && (
        <div className="dentist-detail">
          <h2>{dentist.name}</h2>
          <img src="/public/images/doctor.jpg" alt="doctor" />
          <p>Email: {dentist.email}</p>
          <p>Phone: {dentist.phone}</p>
          <p>Website: <a href={`http://${dentist.website}`} target="_blank" rel="noreferrer">{dentist.website}</a></p>
        </div>
      )}
    </main>
  )
}

export default Detail
