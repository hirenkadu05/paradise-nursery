import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Leaf, ShoppingCart } from 'lucide-react';

export default function Navbar() {
  const count = useSelector((state) => state.cart.items.reduce((sum, item) => sum + item.quantity, 0));
  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Main navigation">
        <Link to="/" className="brand"><span className="brand-mark"><Leaf size={25}/></span><span>Paradise <strong>Nursery</strong></span></Link>
        <div className="nav-links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/plants">Plants</NavLink>
          <NavLink to="/cart" className="cart-nav"><ShoppingCart size={21}/><span>Cart</span><span className="cart-count" aria-label={`${count} items in cart`}>{count}</span></NavLink>
        </div>
      </nav>
    </header>
  );
}
