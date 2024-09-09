// Ejemplo del uso del hook useMemo

import { useMemo, useState } from 'react';

const initialState = [
  { id: 1, name: 'Laptop', available: true },
  { id: 2, name: 'Phone', available: false },
  { id: 3, name: 'Headphones', available: true },
  { id: 4, name: 'Keyboard', available: false },
];

const randomBoolean = () => Math.random() < 0.3;

const Product = () => {
  const [products, setProducts] = useState(initialState);
  const [count, setCount] = useState(0);

  const getAvailableProducts = () => {
    console.log('Calculando productos disponibles');
    return products.filter((product) => product.available);
  };

  //   const availableProducts = useMemo(() => {
  //     return getAvailableProducts();
  //   }, [products]);

  const availableProducts = getAvailableProducts();

  const handleAddProductButton = () => {
    setProducts([
      ...products,
      {
        id: products.length + 1,
        name: `Product ${products.length + 1}`,
        available: randomBoolean(),
      },
    ]);
  };

  return (
    <>
      {/* Lista de productos disponibles */}
      <div>
        <h2>Available productos</h2>
        <ol>
          {availableProducts.map((product, index) => (
            <li key={index}>{product.name}</li>
          ))}
        </ol>
        <button onClick={handleAddProductButton}>Add product</button>
      </div>

      {/* Contador para obligar el renderizado de la pagina */}
      <div>
        <h2>Count: {count}</h2>
        <button
          onClick={() => {
            setCount((prev) => prev + 1);
          }}
        >
          Increace
        </button>
      </div>
    </>
  );
};

export default Product;
