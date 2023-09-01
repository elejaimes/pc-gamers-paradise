import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { collection, addDoc, getFirestore } from 'firebase/firestore';

const PurchaseForm = ({ cart, onPurchaseSuccess }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [email, setEmail] = useState('');

  const db = getFirestore();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const ordersCollection = collection(db, 'purchase');
      const newPurchase = await addDoc(ordersCollection, {
        name,
        address,
        email,
        cardNumber,
        items: cart.map(item => ({
          id: item.id,
          name: item.name,
          quantity: item.quantity,
          totalPrice: item.price * item.quantity,
        })),
      });


      Swal.fire({
        title: '¡Compra Exitosa!',
        text: `Tu compra se realizó con éxito. ID de compra: ${newPurchase.id}`,
        icon: 'success',
        confirmButtonText: 'OK',
      });


      setName('');
      setAddress('');
      setEmail('');
      setCardNumber('');


      onPurchaseSuccess();
    } catch (error) {
      console.error('Error al agregar el documento: ', error);
  
      Swal.fire({
        title: 'Error',
        text: 'Hubo un error al procesar tu compra. Por favor, inténtalo nuevamente.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  };

  return (
    <div className="purchase-form">
      <h2 className='mt-3'>Información Requerida para Completar Compra</h2>
      <form onSubmit={handleSubmit}>

      <Form.Group controlId="name">
        <Form.Label className='mt-3'>Nombre y Apellido</Form.Label>
        <Form.Control type="text" placeholder="Ingrese su Nombre Completo" value={name} onChange={(e) => setName(e.target.value)} required 
        />
      </Form.Group>
      <Form.Group controlId="address">
        <Form.Label className='mt-3'>Dirección</Form.Label>
        <Form.Control
          type="text" placeholder="Ingresa tu dirección" value={address} onChange={(e) => setAddress(e.target.value)}
          required
          />
      </Form.Group>
      <Form.Group controlId="email">
        <Form.Label className='mt-3'>e-mail</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingresa su e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          />
      </Form.Group>
      <Form.Group controlId="cardNumber">
        <Form.Label className='mt-3'>Número de Tarjeta</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingresa el número de tu tarjeta"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          required
          />
      </Form.Group >
      <Button className='mt-3' variant="primary" type="submit">
          Completar Compra
      </Button>
      </form>
    </div>
  )
}

export default PurchaseForm