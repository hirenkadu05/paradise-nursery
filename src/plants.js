// Public Unsplash source images are linked by photo ID. Internet is required to load them.
const photo = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=640&q=80`;

export const categories = [
  {
    name: 'Air Purifying Plants',
    subtitle: 'Fresh foliage for a calmer home.',
    plants: [
      { id: 'snake', name: 'Snake Plant', price: 18, image: photo('photo-1593482892290-f54927ae1bb6'), description: 'Resilient upright leaves; excellent for beginners.' },
      { id: 'peace', name: 'Peace Lily', price: 24, image: photo('photo-1593691509543-c55fb32e5cee'), description: 'Glossy green leaves and graceful white blooms.' },
      { id: 'spider', name: 'Spider Plant', price: 15, image: photo('photo-1572688484438-313a6e50c333'), description: 'Playful arching leaves that thrive indoors.' },
      { id: 'aloe', name: 'Aloe Vera', price: 16, image: photo('photo-1501004318641-b39e6451bec6'), description: 'Sun-loving succulent with sculptural leaves.' },
      { id: 'pothos', name: 'Golden Pothos', price: 20, image: photo('photo-1614594975525-e45190c55d0b'), description: 'Trailing vines with golden-green variegation.' },
      { id: 'rubber', name: 'Rubber Plant', price: 29, image: photo('photo-1597055181300-e3633a917c9c'), description: 'Bold, glossy foliage with a modern look.' },
    ],
  },
  {
    name: 'Aromatic Plants',
    subtitle: 'Herbs and scent-filled favorites.',
    plants: [
      { id: 'lavender', name: 'Lavender', price: 19, image: photo('photo-1499002238440-d264edd596ec'), description: 'Fragrant purple blossoms for sunny spots.' },
      { id: 'mint', name: 'Mint', price: 12, image: photo('photo-1628556270448-4d4e4148e1b1'), description: 'Bright and refreshing culinary leaves.' },
      { id: 'rosemary', name: 'Rosemary', price: 17, image: photo('photo-1515586000433-45406d8e6662'), description: 'Evergreen needle-like leaves with a woody aroma.' },
      { id: 'basil', name: 'Sweet Basil', price: 14, image: photo('photo-1618375569909-3c8616cf7733'), description: 'Kitchen favorite with lush, fragrant leaves.' },
      { id: 'thyme', name: 'Thyme', price: 13, image: photo('photo-1466692476868-aef1dfb1e735'), description: 'Compact herbal greenery for a sunny windowsill.' },
      { id: 'lemongrass', name: 'Lemongrass', price: 16, image: photo('photo-1485955900006-10f4d324d411'), description: 'Citrusy scent and elegant grass-like leaves.' },
    ],
  },
  {
    name: 'Decorative Plants',
    subtitle: 'Statement greenery to style your space.',
    plants: [
      { id: 'monstera', name: 'Monstera Deliciosa', price: 39, image: photo('photo-1501004318641-b39e6451bec6'), description: 'Iconic split leaves that make a bold statement.' },
      { id: 'fiddle', name: 'Fiddle Leaf Fig', price: 49, image: photo('photo-1598880940080-ff9a29891b85'), description: 'Elegant tree with large violin-shaped leaves.' },
      { id: 'zz', name: 'ZZ Plant', price: 28, image: photo('photo-1497250681960-ef046c08a56e'), description: 'Polished, low-maintenance, deep green foliage.' },
      { id: 'calathea', name: 'Calathea', price: 32, image: photo('photo-1545241047-6083a3684587'), description: 'Beautiful patterned leaves with rich colors.' },
      { id: 'bird', name: 'Bird of Paradise', price: 45, image: photo('photo-1485955900006-10f4d324d411'), description: 'Large tropical leaves with architectural appeal.' },
      { id: 'fern', name: 'Boston Fern', price: 21, image: photo('photo-1416879595882-3373a0480b5b'), description: 'Soft, feathery fronds for relaxed spaces.' },
    ],
  },
];
