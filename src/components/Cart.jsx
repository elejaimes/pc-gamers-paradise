import {useState} from 'react'
import PurchaseForm from './PurchaseForm';
import ShoppingCart from './ShoppingCart';

const Cart = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <div>
      <ShoppingCart />
      <button onClick={() => setShowForm(true)}>Ir a Comprar</button>
      {showForm && <PurchaseForm />}
    </div>
  )
}

export default Cart