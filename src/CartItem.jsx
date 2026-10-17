import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ArrowLeft, Minus, Plus, ShoppingCart, Trash2 } from 'lucide-react';
import { removeItem, updateQuantity } from './CartSlice';

export default function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return (
    <div className="page-wrap container cart-page">
      <div className="page-heading"><span className="eyebrow"><ShoppingCart size={16}/> Your shopping cart</span><h1>Your green picks.</h1><p>Review your plant friends before bringing them home.</p></div>
      {items.length === 0 ? (
        <div className="empty-cart"><ShoppingCart size={42}/><h2>Your cart is growing roots...</h2><p>No plants yet! Find your first favorite in our collection.</p><Link className="button button-primary" to="/plants">Explore Plants</Link></div>
      ) : (
        <div className="cart-layout">
          <section aria-label="Cart items" className="cart-list">
            {items.map((item) => <article className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name}/>
              <div className="cart-item-info"><h2>{item.name}</h2><span className="unit-price">${item.price.toFixed(2)} each</span><div className="qty-control" aria-label={`Quantity of ${item.name}`}>
                <button aria-label={`Decrease ${item.name} quantity`} onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}><Minus size={16}/></button>
                <span>{item.quantity}</span>
                <button aria-label={`Increase ${item.name} quantity`} onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}><Plus size={16}/></button>
              </div></div>
              <div className="cart-item-end"><strong>${(item.price * item.quantity).toFixed(2)}</strong><button className="remove-button" aria-label={`Remove ${item.name}`} onClick={() => dispatch(removeItem(item.id))}><Trash2 size={17}/> Remove</button></div>
            </article>)}
            <Link to="/plants" className="continue-shopping"><ArrowLeft size={18}/> Continue Shopping</Link>
          </section>
          <aside className="order-summary"><h2>Order Summary</h2><div className="summary-row"><span>Items ({totalQuantity})</span><span>${totalAmount.toFixed(2)}</span></div><div className="summary-row"><span>Shipping</span><span>Calculated at checkout</span></div><div className="summary-total"><strong>Total Amount</strong><strong>${totalAmount.toFixed(2)}</strong></div><button className="button button-primary checkout-button" onClick={() => window.alert('Coming Soon! Checkout will be available soon.')}>Checkout</button><p className="checkout-note">A little green goes a long way 🌿</p></aside>
        </div>
      )}
    </div>
  );
}
