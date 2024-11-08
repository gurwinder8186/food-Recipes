import { useState, useEffect } from 'react'
import '/client/fire.css'

const Error = () => {
  const [showError, setShowError] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowError(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`error-container ${showError ? 'show-error' : ''}`}>
      <div className={`fire ${showError ? 'exploding' : ''}`} />
      <div className={`error-message ${showError ? 'show' : ''}`}>
        <img
          className="this-is-fine"
          src="/images/this-is-fine-fine.gif"
          alt="this is fine dog"
        />
        <img
          className="computer"
          src="/images/quantumcomputer.jpg"
          alt="quantum computer"
        />
        <h2>TEMP 1,003°C</h2>
        <p>Please cool down Quantum Computer, melting imminent!</p>
      </div>
    </div>
  )
}

export default Error
