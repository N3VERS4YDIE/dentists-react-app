import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

const Card = ({ id, name, username, buttonText, onAction }) => {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>@{username}</p>
      {/* <p>ID: {id}</p> */}
      <img src="/images/doctor.jpg" alt="doctor" />

      <Link to={`/dentist/${id}`} className="link-button">
        Ver detalle
      </Link>

      <button onClick={onAction}>
        {buttonText}
      </button>
    </div>
  )
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  onAction: PropTypes.func.isRequired,
}

export default Card
