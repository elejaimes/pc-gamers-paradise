import {useState} from 'react'
import { Form, Button } from 'react-bootstrap'

const PurchaseForm = () => {

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      address,
      email,
      cardNumber,
    }
    localStorage.setItem('purchaseData', JSON.stringify(formData))

    setName('');
    setAddress('');
    setEmail('');
    setCardNumber('');

  }

  return (
    <div className="purchase-form">
      <h2>Compra - Información requerida</h2>
      <form onSubmit={handleSubmit}>

      <Form.Group controlId="name">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Ingrese su Nombre" value={name} onChange={(e) => setName(e.target.value)} required 
        />
      </Form.Group>
      <Form.Group controlId="address">
        <Form.Label>Dirección</Form.Label>
        <Form.Control
          type="text" placeholder="Ingresa tu dirección" value={address} onChange={(e) => setAddress(e.target.value)}
          required
          />
      </Form.Group>
      <Form.Group controlId="email">
        <Form.Label>e-mail</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingresa su e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          />
      </Form.Group>
      <Form.Group controlId="cardNumber">
        <Form.Label>Número de Tarjeta</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingresa el número de tu tarjeta"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          required
          />
      </Form.Group>
      <Button variant="primary" type="submit">
          Completar Compra
      </Button>

      </form>
    </div>
  )
}

export default PurchaseForm