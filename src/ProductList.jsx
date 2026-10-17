import { useDispatch, useSelector } from 'react-redux';
import { Check, Plus, ShoppingBag } from 'lucide-react';
import { addItem } from './CartSlice';
import { categories } from './plants';

export default function ProductList() {
  const dispatch = useDispatch();
  const cartIds = useSelector((state) => state.cart.items.map((item) => item.id));
  return (
    <div className="page-wrap container">
      <div className="page-heading">
        <span className="eyebrow"><ShoppingBag size={15}/> The plant collection</span>
        <h1>Find your perfect plant.</h1>
        <p>From leafy favorites to fragrant herbs, explore beautiful additions to your home.</p>
      </div>
      {categories.map((category) => (
        <section key={category.name} className="plant-category" aria-label={category.name}>
          <div className="category-title"><div><h2>{category.name}</h2><p>{category.subtitle}</p></div><span>{category.plants.length} plants</span></div>
          <div className="product-grid">
            {category.plants.map((plant) => {
              const added = cartIds.includes(plant.id);
              return <article className="product-card" key={plant.id}>
                <div className="product-image-wrap"><img src={plant.image} alt={plant.name} loading="lazy"/></div>
                <div className="product-body"><h3>{plant.name}</h3><p>{plant.description}</p>
                  <div className="product-bottom"><strong>${plant.price.toFixed(2)}</strong>
                    <button className={`button add-button ${added ? 'added' : ''}`} disabled={added} onClick={() => dispatch(addItem(plant))}>
                      {added ? <><Check size={16}/> Added</> : <><Plus size={16}/> Add to Cart</>}
                    </button>
                  </div>
                </div>
              </article>;
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
