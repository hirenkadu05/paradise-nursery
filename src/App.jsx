import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { ArrowRight, Leaf } from 'lucide-react';
import Navbar from './Navbar';
import AboutUs from './AboutUs';
import ProductList from './ProductList';
import CartItem from './CartItem';
import './App.css';

function Home() {
  return <>
    <section className="hero">
      <div className="hero-overlay" />
      <div className="container hero-content">
        <span className="hero-pill"><Leaf size={16}/> Welcome to Paradise Nursery</span>
        <h1>Bring nature <em>home.</em></h1>
        <p>Beautiful indoor plants, handpicked to help your space bloom. Find your new favorite green companion today.</p>
        <Link className="button button-primary hero-cta" to="/plants">Get Started <ArrowRight size={20}/></Link>
      </div>
    </section>
    <AboutUs/>
  </>;
}

export default function App() {
  return <BrowserRouter>
    <Navbar/>
    <main><Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/plants" element={<ProductList/>}/>
      <Route path="/cart" element={<CartItem/>}/>
      <Route path="*" element={<Home/>}/>
    </Routes></main>
    <footer className="footer">© {new Date().getFullYear()} Paradise Nursery. Grow joy, one plant at a time.</footer>
  </BrowserRouter>;
}
