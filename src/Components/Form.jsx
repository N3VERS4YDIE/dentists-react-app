import React, { useState } from "react"

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  })

  const [error, setError] = useState("")
  const [successMessage, setSuccessMessage] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const validateForm = () => {
    if (formData.fullName.trim().length <= 5) {
      setError("El nombre completo debe tener más de 5 caracteres.")
      return false
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email.trim())) {
      setError("El email ingresado no es válido.")
      return false
    }

    setError("")
    return true
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateForm()) {
      console.log("Datos enviados:", formData)
      setSuccessMessage(
        `Gracias ${formData.fullName}, te contactaremos cuando antes vía mail`
      )
      setFormData({ fullName: "", email: "" })
    } else {
      setSuccessMessage("")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div>
        <label htmlFor="fullName">Nombre Completo</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      {error && <p className="error-message">{error}</p>}
      <button type="submit">Enviar</button>
      {successMessage && <p className="success-message">{successMessage}</p>}
    </form>
  )
}

export default Form
