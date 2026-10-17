import { Leaf, HeartHandshake, Sprout } from 'lucide-react';

export default function AboutUs() {
  return (
    <section className="about-section" aria-labelledby="about-heading">
      <div className="container about-inner">
        <div>
          <span className="eyebrow">A little about us</span>
          <h2 id="about-heading">Your home deserves a little more green.</h2>
          <p>Welcome to Paradise Nursery, your online destination for happy, healthy houseplants. We believe that every space, from a sunny apartment to a cozy work desk, can feel more alive with a touch of nature.</p>
          <p>Our thoughtfully curated plants make it easy for both first-time plant parents and longtime growers to find something they love.</p>
        </div>
        <div className="about-benefits">
          <div><Sprout/><div><strong>Carefully chosen</strong><p>Beautiful plants for all experience levels.</p></div></div>
          <div><HeartHandshake/><div><strong>Grown with care</strong><p>Plants and people come first.</p></div></div>
          <div><Leaf/><div><strong>Greener living</strong><p>Bring a breath of nature into everyday life.</p></div></div>
        </div>
      </div>
    </section>
  );
}
